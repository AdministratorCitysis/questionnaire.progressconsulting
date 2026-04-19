const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;

const ROOT = process.cwd();
const SRC = path.join(ROOT, "src");
const APP_FILE = path.join(SRC, "App.js");
const OUTPUT_DIR = path.join(ROOT, "data", "questionnaires");
const DOCS_DIR = path.join(ROOT, "docs");

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function parseFile(filePath) {
  const code = read(filePath);
  return parser.parse(code, {
    sourceType: "module",
    plugins: ["jsx", "classProperties"],
  });
}

function toPosix(p) {
  return p.split(path.sep).join("/");
}

function rel(p) {
  return toPosix(path.relative(ROOT, p));
}

function safeEvalLiteral(node) {
  if (!node) return undefined;
  switch (node.type) {
    case "StringLiteral":
    case "NumericLiteral":
    case "BooleanLiteral":
      return node.value;
    case "NullLiteral":
      return null;
    case "TemplateLiteral":
      if (node.expressions.length === 0) {
        return node.quasis.map((q) => q.value.cooked || "").join("");
      }
      return { __unparsed: generate(node).code };
    case "UnaryExpression":
      if (node.operator === "-" && node.argument.type === "NumericLiteral") {
        return -node.argument.value;
      }
      return { __unparsed: generate(node).code };
    case "ArrayExpression":
      return node.elements.map((el) => safeEvalLiteral(el));
    case "ObjectExpression": {
      const obj = {};
      for (const prop of node.properties) {
        if (prop.type !== "ObjectProperty") continue;
        let key;
        if (prop.key.type === "Identifier") key = prop.key.name;
        else if (prop.key.type === "StringLiteral") key = prop.key.value;
        else key = generate(prop.key).code;
        obj[key] = safeEvalLiteral(prop.value);
      }
      return obj;
    }
    default:
      return { __unparsed: generate(node).code };
  }
}

function getImports(ast) {
  const imports = [];
  traverse(ast, {
    ImportDeclaration(p) {
      imports.push({
        source: p.node.source.value,
        specifiers: p.node.specifiers.map((s) => ({
          local: s.local.name,
          imported:
            s.type === "ImportDefaultSpecifier"
              ? "default"
              : s.imported && s.imported.name
              ? s.imported.name
              : "*",
          type: s.type,
        })),
      });
    },
  });
  return imports;
}

function resolveLocalImport(fromFile, source) {
  const base = path.resolve(path.dirname(fromFile), source);
  const candidates = [
    `${base}.js`,
    `${base}.jsx`,
    path.join(base, "index.js"),
    path.join(base, "index.jsx"),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c) && fs.statSync(c).isFile()) return c;
  }
  return null;
}

function extractRoutesFromApp() {
  const ast = parseFile(APP_FILE);
  const imports = getImports(ast);
  const importMap = new Map();
  imports.forEach((imp) => {
    imp.specifiers.forEach((s) => {
      importMap.set(s.local, imp.source);
    });
  });

  const routes = [];
  traverse(ast, {
    JSXOpeningElement(p) {
      const nameNode = p.node.name;
      if (nameNode.type !== "JSXIdentifier" || nameNode.name !== "Route") return;
      let routePath = null;
      let componentName = null;
      for (const attr of p.node.attributes) {
        if (attr.type !== "JSXAttribute") continue;
        if (attr.name.name === "path" && attr.value && attr.value.type === "StringLiteral") {
          routePath = attr.value.value;
        }
        if (attr.name.name === "component" && attr.value && attr.value.type === "JSXExpressionContainer") {
          if (attr.value.expression.type === "Identifier") {
            componentName = attr.value.expression.name;
          }
        }
      }
      if (routePath && componentName) {
        const srcImport = importMap.get(componentName);
        routes.push({
          path: routePath,
          componentName,
          importSource: srcImport || null,
        });
      }
    },
  });

  return routes;
}

function collectModuleFiles(entryFile) {
  const visited = new Set();
  const queue = [entryFile];
  while (queue.length) {
    const current = queue.shift();
    if (!current || visited.has(current) || !fs.existsSync(current)) continue;
    visited.add(current);
    const ast = parseFile(current);
    const imports = getImports(ast);
    for (const imp of imports) {
      if (!imp.source.startsWith(".")) continue;
      const resolved = resolveLocalImport(current, imp.source);
      if (resolved) queue.push(resolved);
    }
  }
  return [...visited];
}

function extractStateAndMethods(filePath) {
  const ast = parseFile(filePath);
  const out = {
    file: rel(filePath),
    states: [],
    methods: [],
    inputs: [],
  };

  traverse(ast, {
    AssignmentExpression(p) {
      if (
        p.node.left.type === "MemberExpression" &&
        p.node.left.object.type === "ThisExpression" &&
        p.node.left.property.type === "Identifier" &&
        p.node.left.property.name === "state"
      ) {
        out.states.push({
          kind: "this.state",
          value: safeEvalLiteral(p.node.right),
          code: generate(p.node.right).code,
        });
      }
    },
    ClassProperty(p) {
      if (p.node.key.type === "Identifier" && p.node.key.name === "state") {
        out.states.push({
          kind: "classProperty.state",
          value: safeEvalLiteral(p.node.value),
          code: generate(p.node.value).code,
        });
      }
    },
    ClassMethod(p) {
      if (p.node.key.type === "Identifier") {
        out.methods.push({
          name: p.node.key.name,
          code: generate(p.node).code,
        });
      }
    },
    ClassProperty(p) {
      if (p.node.key.type === "Identifier" && p.node.value && p.node.value.type === "ArrowFunctionExpression") {
        out.methods.push({
          name: p.node.key.name,
          code: generate(p.node).code,
        });
      }
    },
    JSXOpeningElement(p) {
      if (p.node.name.type !== "JSXIdentifier") return;
      const tag = p.node.name.name;
      if (!["input", "select", "textarea", "button"].includes(tag)) return;
      let typeAttr = null;
      for (const attr of p.node.attributes) {
        if (attr.type !== "JSXAttribute") continue;
        if (attr.name && attr.name.name === "type" && attr.value && attr.value.type === "StringLiteral") {
          typeAttr = attr.value.value;
        }
      }
      out.inputs.push({
        tag,
        type: typeAttr,
        code: generate(p.node).code,
      });
    },
  });

  return out;
}

function findQuestionnaireData(extractedFiles) {
  const fromQuestionnaireFile = extractedFiles.find((f) => /Questionnaire\.js$/i.test(f.file));
  if (fromQuestionnaireFile && fromQuestionnaireFile.states.length) {
    return fromQuestionnaireFile.states[0].value || {};
  }
  for (const f of extractedFiles) {
    for (const s of f.states) {
      const v = s.value;
      if (!v || typeof v !== "object") continue;
      if (v.questionnaire || v.questions || v.Qualificatifs || v.Classements || v.Questionnaire) {
        return v;
      }
    }
  }
  return {};
}

function deriveTypeFromInputs(extractedFiles) {
  const inputs = extractedFiles.flatMap((f) => f.inputs);
  const hasRadio = inputs.some((i) => i.tag === "input" && i.type === "radio");
  const hasCheckbox = inputs.some((i) => i.tag === "input" && i.type === "checkbox");
  const hasNumber = inputs.some((i) => i.tag === "input" && i.type === "number");
  const hasText = inputs.some((i) => i.tag === "input" && (i.type === "text" || i.type === null));
  if (hasRadio && !hasCheckbox) return "single_choice_radio";
  if (hasCheckbox) return "multiple_choice_checkbox_or_custom";
  if (hasNumber) return "numeric_input";
  if (hasText) return "text_or_free_numeric_input";
  return "uncertain";
}

function extractSectionsAndQuestions(stateData) {
  const sections = [];
  const uncertainties = [];

  const q = stateData.questionnaire || stateData;

  function mapQuestion(qItem, fallbackChoices) {
    if (!qItem || typeof qItem !== "object") return null;
    const text = qItem.text || qItem.title || qItem.name || null;
    const choices = Array.isArray(qItem.choices)
      ? qItem.choices
      : Array.isArray(qItem.possibilites)
      ? qItem.possibilites
      : fallbackChoices || [];
    return {
      id: qItem.id ?? null,
      text,
      raw: qItem,
      options: choices,
    };
  }

  if (Array.isArray(q.questions)) {
    sections.push({
      id: "questions",
      title: q.title || q.titre || null,
      order: sections.length + 1,
      questions: q.questions.map((item) => mapQuestion(item, q.choices || [])),
      responseOptions: q.choices || [],
    });
  }

  if (Array.isArray(q.categories) && q.categories.some((c) => Array.isArray(c.questions))) {
    q.categories.forEach((cat, idx) => {
      sections.push({
        id: `category-${cat.id ?? idx + 1}`,
        title: cat.name || cat.text || `category-${idx + 1}`,
        order: sections.length + 1,
        questions: (cat.questions || []).map((item) => mapQuestion(item, q.answers || [])),
        responseOptions: q.answers || q.choices || [],
        rawCategory: cat,
      });
    });
  }

  if (Array.isArray(stateData.Qualificatifs)) {
    stateData.Qualificatifs.forEach((item, idx) => {
      sections.push({
        id: `qualificatif-${item.id ?? idx + 1}`,
        title: item.title || `Qualificatif ${idx + 1}`,
        order: sections.length + 1,
        typeHint: "point_distribution",
        questions: (item.propositions || []).map((prop) => ({
          id: prop.id ?? null,
          text: item.instruction || null,
          raw: prop,
          options: prop.choices || [],
        })),
        responseOptions: [],
        rawSection: item,
      });
    });
  }

  if (Array.isArray(stateData.Classements)) {
    stateData.Classements.forEach((item, idx) => {
      sections.push({
        id: `classement-${item.id ?? idx + 1}`,
        title: item.title || `Classement ${idx + 1}`,
        order: sections.length + 1,
        typeHint: "ranking_or_ordering",
        questions: (item.suggestions || []).map((sugg) => ({
          id: sugg.id ?? null,
          text: sugg.text || null,
          raw: sugg,
          options: sugg.possibilites || [],
        })),
        responseOptions: [],
        rawSection: item,
      });
    });
  }

  if (Array.isArray(stateData.Questionnaire)) {
    stateData.Questionnaire.forEach((item, idx) => {
      sections.push({
        id: `questionnaire-block-${item.id ?? idx + 1}`,
        title: item.title || `Questionnaire ${idx + 1}`,
        order: sections.length + 1,
        questions: (item.questions || []).map((question) => mapQuestion(question, item.choices || [])),
        responseOptions: item.choices || [],
        rawSection: item,
      });
    });
  }

  if (sections.length === 0) {
    uncertainties.push("Aucune section explicite extraite automatiquement depuis l'etat.");
  }

  return { sections, uncertainties };
}

function buildScoringModel(stateData, structure, inputTypeInference) {
  const q = stateData.questionnaire || stateData;
  const model = {
    inputTypeInference,
    groups: [],
    questionToGroupMapping: [],
    responseValueRules: [],
    resultThresholds: [],
    multiGroupImpact: [],
    uncertainties: [],
  };

  const groups = [];
  if (Array.isArray(q.categories)) {
    q.categories.forEach((cat) => {
      groups.push({
        id: cat.id ?? null,
        name: cat.name || cat.text || null,
        raw: cat,
      });
    });
  }
  if (Array.isArray(stateData.colors)) {
    stateData.colors.forEach((c) => {
      groups.push({
        id: c.id ?? null,
        name: c.text || c.name || null,
        raw: c,
      });
    });
  }
  model.groups = groups;

  if (Array.isArray(q.questions)) {
    q.questions.forEach((question) => {
      if (question.categoryId !== undefined) {
        model.questionToGroupMapping.push({
          questionId: question.id ?? null,
          groupId: question.categoryId,
          source: "question.categoryId",
          questionText: question.text || null,
        });
      } else {
        model.questionToGroupMapping.push({
          questionId: question.id ?? null,
          groupId: null,
          source: "no_direct_group",
          questionText: question.text || null,
          uncertainty: "Aucun categoryId detecte directement sur la question.",
        });
      }
    });
  }

  if (Array.isArray(q.categories) && q.categories.some((cat) => Array.isArray(cat.values))) {
    q.categories.forEach((cat) => {
      if (Array.isArray(cat.values)) {
        model.responseValueRules.push({
          kind: "category_specific_choice_values",
          groupId: cat.id ?? null,
          values: cat.values,
          source: "questionnaire.categories[].values (applique dans Possibilites)",
        });
      }
    });
  }

  if (Array.isArray(q.choices)) {
    model.responseValueRules.push({
      kind: "global_choices",
      choices: q.choices,
      source: "questionnaire.choices",
    });
  }

  if (Array.isArray(q.answers)) {
    const thresholds = q.answers.filter((a) => a && typeof a === "object" && a.maxvalue !== undefined);
    if (thresholds.length) {
      model.resultThresholds.push({
        source: "questionnaire.answers[].maxvalue",
        thresholds,
      });
    }
  }
  if (Array.isArray(q.reponses)) {
    const thresholds = q.reponses.filter((a) => a && typeof a === "object" && a.maxvalue !== undefined);
    if (thresholds.length) {
      model.resultThresholds.push({
        source: "questionnaire.reponses[].maxvalue",
        thresholds,
      });
    }
  }

  if (Array.isArray(stateData.Qualificatifs)) {
    model.responseValueRules.push({
      kind: "qualificatif_point_allocation",
      source: "Qualificatifs[].propositions[].choices[].points/feature",
      rawSections: stateData.Qualificatifs,
    });
  }
  if (Array.isArray(stateData.Classements)) {
    model.responseValueRules.push({
      kind: "classement_ordering_scoring",
      source: "Classements[].suggestions[].possibilites[]",
      rawSections: stateData.Classements,
      uncertainty:
        "La valeur finale depend de la logique de classement (ordre/drag) dans les composants Suggestion/Classement.",
    });
  }
  if (Array.isArray(stateData.Questionnaire)) {
    stateData.Questionnaire.forEach((block) => {
      if (Array.isArray(block.questions)) {
        block.questions.forEach((qItem) => {
          model.questionToGroupMapping.push({
            questionId: qItem.id ?? null,
            groupId: qItem.categoryId ?? null,
            source: "Questionnaire[].questions[].categoryId",
            questionText: qItem.text || null,
          });
        });
      }
      if (Array.isArray(block.choices)) {
        model.responseValueRules.push({
          kind: "questionnaire_block_choices",
          source: "Questionnaire[].choices",
          choices: block.choices,
        });
      }
    });
  }

  structure.sections.forEach((s) => {
    (s.questions || []).forEach((qItem) => {
      const raw = qItem.raw || {};
      const groupFields = ["categoryId", "feature", "features"];
      const present = groupFields.filter((k) => raw[k] !== undefined);
      if (present.length > 1) {
        model.multiGroupImpact.push({
          questionId: qItem.id ?? null,
          questionText: qItem.text || null,
          fields: present,
          raw,
        });
      }
    });
  });

  if (model.multiGroupImpact.length === 0) {
    model.uncertainties.push(
      "Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects."
    );
  }

  return model;
}

function inferScoringValidation(extractedFiles) {
  const methods = extractedFiles.flatMap((f) =>
    f.methods.map((m) => ({
      file: f.file,
      name: m.name,
      code: m.code,
    }))
  );

  const scoringRules = [];
  const validationRules = [];
  const resultCalculations = [];
  const conditions = [];
  const uncertainties = [];

  methods.forEach((m) => {
    const c = m.code;
    if (c.includes(".every(") && c.includes("completed")) {
      validationRules.push({
        source: `${m.file}::${m.name}`,
        rule: "Completion verifiee via every(...completed === true).",
        snippet: c,
      });
    }
    if (c.includes("+= ") || c.includes("+=") || c.includes("reduce(")) {
      scoringRules.push({
        source: `${m.file}::${m.name}`,
        rule: "Accumulation de score detectee (+= ou reduce).",
        snippet: c,
      });
    }
    if (c.includes("maxvalue") || c.includes("Score:")) {
      resultCalculations.push({
        source: `${m.file}::${m.name}`,
        rule: "Calcul/resultat base sur seuils ou affichage de score detecte.",
        snippet: c,
      });
    }
    if (c.includes("if(") || c.includes("if (")) {
      conditions.push({
        source: `${m.file}::${m.name}`,
        note: "Conditions de branchement detectees dans la logique.",
        snippet: c,
      });
    }
  });

  if (scoringRules.length === 0) {
    uncertainties.push("Aucune regle de scoring explicite detectee automatiquement.");
  }
  if (validationRules.length === 0) {
    uncertainties.push("Aucune regle de validation explicite detectee automatiquement.");
  }

  return {
    scoringRules,
    validationRules,
    resultCalculations,
    conditions,
    logicMethods: methods,
    uncertainties,
  };
}

function isLikelyQuestionnaire(record) {
  if (record.path === "/portail") return false;
  const hasSections = record.structure.sections.length > 0;
  const hasScoring = record.logic.scoringRules.length > 0;
  const hasQuestionsKeyword = record.sourceFiles.some((f) => /Questions\.js$/i.test(f));
  return hasSections || hasScoring || hasQuestionsKeyword;
}

function routeId(routePath) {
  return routePath.replace(/^\//, "").replace(/[\/]+/g, "-").toLowerCase();
}

function summarize(record) {
  const sectionCount = record.structure.sections.length;
  const questionCount = record.structure.sections.reduce((acc, s) => acc + (s.questions ? s.questions.length : 0), 0);
  const title =
    record.questionnaireData?.questionnaire?.title ||
    record.questionnaireData?.questionnaire?.titre ||
    record.questionnaireData?.title ||
    null;
  return { sectionCount, questionCount, title };
}

function ensureDirs() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(DOCS_DIR, { recursive: true });
}

function main() {
  ensureDirs();
  const routes = extractRoutesFromApp();
  const results = [];
  const extractionNotes = [];

  for (const route of routes) {
    if (!route.importSource) continue;
    const entryFile = resolveLocalImport(APP_FILE, route.importSource);
    if (!entryFile) continue;

    const moduleFiles = collectModuleFiles(entryFile);
    const extractedFiles = moduleFiles.map((f) => extractStateAndMethods(f));
    const questionnaireData = findQuestionnaireData(extractedFiles);
    const structure = extractSectionsAndQuestions(questionnaireData);
    const logic = inferScoringValidation(extractedFiles);
    const inputTypeInference = deriveTypeFromInputs(extractedFiles);
    const scoringModel = buildScoringModel(questionnaireData, structure, inputTypeInference);

    const record = {
      routePath: route.path,
      routeComponent: route.componentName,
      routeImportSource: route.importSource,
      extractionTimestamp: new Date().toISOString(),
      sourceFiles: moduleFiles.map((f) => rel(f)).sort(),
      questionnaireData,
      structure: {
        responseTypeInference: inputTypeInference,
        sections: structure.sections,
        uncertainties: structure.uncertainties,
      },
      scoringModel,
      logic,
      uncertainties: [...structure.uncertainties, ...logic.uncertainties, ...scoringModel.uncertainties],
    };

    if (!isLikelyQuestionnaire(record)) {
      continue;
    }

    const id = routeId(route.path);
    const outFile = path.join(OUTPUT_DIR, `${id}.json`);
    fs.writeFileSync(outFile, JSON.stringify(record, null, 2), "utf8");
    results.push({ id, file: rel(outFile), ...summarize(record), routePath: route.path, component: route.componentName });

    if (record.uncertainties.length) {
      extractionNotes.push({
        id,
        routePath: route.path,
        component: route.componentName,
        uncertainties: record.uncertainties,
      });
    }
  }

  const inventoryLines = [];
  inventoryLines.push("# Questionnaire Inventory");
  inventoryLines.push("");
  inventoryLines.push("Extraction fidele de l'existant (sans modification de contenu/logique).");
  inventoryLines.push("");
  inventoryLines.push(`Total questionnaires extraits: ${results.length}`);
  inventoryLines.push("");
  inventoryLines.push("| Route | Composant | Titre (si detecte) | Sections | Items de section | JSON |");
  inventoryLines.push("|---|---|---|---:|---:|---|");
  results
    .sort((a, b) => a.routePath.localeCompare(b.routePath))
    .forEach((r) => {
      inventoryLines.push(
        `| \`${r.routePath}\` | \`${r.component}\` | ${r.title ? r.title.replace(/\|/g, "\\|") : "_non detecte_"} | ${r.sectionCount} | ${r.questionCount} | [${path.basename(
          r.file
        )}](/${toPosix(path.resolve(ROOT, r.file))}) |`
      );
    });
  fs.writeFileSync(path.join(DOCS_DIR, "questionnaire-inventory.md"), inventoryLines.join("\n"), "utf8");

  const notesLines = [];
  notesLines.push("# Questionnaire Extraction Notes");
  notesLines.push("");
  notesLines.push("## Ambiguites et regles implicites");
  notesLines.push("");
  if (extractionNotes.length === 0) {
    notesLines.push("Aucune ambiguite remontee automatiquement.");
  } else {
    extractionNotes
      .sort((a, b) => a.routePath.localeCompare(b.routePath))
      .forEach((n) => {
        notesLines.push(`### ${n.routePath} (${n.component})`);
        n.uncertainties.forEach((u) => notesLines.push(`- ${u}`));
        notesLines.push("");
      });
  }

  notesLines.push("## Points complexes");
  notesLines.push("");
  notesLines.push("- Plusieurs questionnaires utilisent des structures heterogenes (`questionnaire.questions`, `categories[].questions`, `Qualificatifs`, `Classements`, `Questionnaire`).");
  notesLines.push("- Les regles de scoring/validation sont souvent implicites dans des methodes `handle*` et dans des composants `Answer`/`Result`/`Possibilites`.");
  notesLines.push("- Les valeurs de choix peuvent etre surchargees dynamiquement selon la categorie (ex: Delegation et variantes).");
  notesLines.push("- Certains questionnaires combinent plusieurs mecaniques (classement + echelle de Likert), ex: SCT.");
  notesLines.push("");
  notesLines.push("## Differences entre questionnaires");
  notesLines.push("");
  notesLines.push("- Echelle radio standard (0..4 ou equivalents).");
  notesLines.push("- Echelle radio avec mapping conditionnel des valeurs par categorie.");
  notesLines.push("- Saisie numerique libre (Timing).");
  notesLines.push("- Allocation de points sur propositions (Couleurs).");
  notesLines.push("- Classement/reordonnancement de possibilites (SCT/Couleurs).");
  notesLines.push("- Scoring par categories/dimensions, parfois avec seuils textuels (`maxvalue`), parfois avec restitutions graphiques.");
  fs.writeFileSync(path.join(DOCS_DIR, "questionnaire-extraction-notes.md"), notesLines.join("\n"), "utf8");

  console.log(`Extracted ${results.length} questionnaire JSON files.`);
}

main();
