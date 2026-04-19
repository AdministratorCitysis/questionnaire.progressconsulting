const { normalizeAnswers } = require("./answers/answer-model");
const { strategyRegistry } = require("./strategies");
const { interpretByThresholds } = require("./interpreters/thresholds");
const { interpretByProfileKey } = require("./interpreters/profile-map");

function computeScore({ strategyId, questionnaire, answers, config, context }) {
  const strategy = strategyRegistry[strategyId];
  if (!strategy) {
    throw new Error(`Unknown scoring strategy: ${strategyId}`);
  }

  const normalizedAnswers = normalizeAnswers(answers);
  return strategy.calculate({
    questionnaire,
    answers: normalizedAnswers,
    config: config || questionnaire?.scoring?.config || {},
    context: context || {},
  });
}

function interpretScore({ scoringResult, interpretation }) {
  if (!interpretation || !interpretation.kind) {
    return null;
  }

  if (interpretation.kind === "thresholds") {
    const total = typeof scoringResult?.total === "number" ? scoringResult.total : 0;
    return interpretByThresholds(total, interpretation.thresholds);
  }

  if (interpretation.kind === "profile_map") {
    return interpretByProfileKey(interpretation.profileKey, interpretation.profilesByKey);
  }

  return {
    interpreter: interpretation.kind,
    match: null,
    warnings: [`Unknown interpreter kind: ${interpretation.kind}`],
  };
}

module.exports = {
  computeScore,
  interpretScore,
};

