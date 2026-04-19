const { getNumericValue, toKey } = require("../types");

function normalizeDimensionTargets(config, answer) {
  if (config?.questionToDimensions) {
    const row = config.questionToDimensions[toKey(answer.questionId)];
    if (Array.isArray(row)) return row;
  }

  if (Array.isArray(answer?.meta?.dimensions)) {
    return answer.meta.dimensions;
  }

  if (answer?.meta?.dimensionId != null) {
    return [{ dimensionId: answer.meta.dimensionId, weight: 1 }];
  }

  return [];
}

const multiDimensionalStrategy = {
  id: "multi_dimensional",
  calculate({ answers, config }) {
    const dimensionScores = {};
    const details = [];
    const warnings = [];

    (answers || []).forEach((answer) => {
      const value = getNumericValue(answer);
      const targets = normalizeDimensionTargets(config, answer);

      if (!targets.length) {
        warnings.push(`No dimension target for question ${toKey(answer.questionId)}`);
        details.push({
          questionId: answer.questionId,
          value,
          targets: [],
        });
        return;
      }

      targets.forEach((target) => {
        const key = toKey(target.dimensionId);
        const weight = typeof target.weight === "number" ? target.weight : 1;
        const weighted = value * weight;
        dimensionScores[key] = (dimensionScores[key] || 0) + weighted;
      });

      details.push({
        questionId: answer.questionId,
        value,
        targets,
      });
    });

    return {
      strategy: "multi_dimensional",
      dimensionScores,
      details,
      warnings,
    };
  },
};

module.exports = multiDimensionalStrategy;

