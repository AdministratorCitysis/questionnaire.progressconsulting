const { getNumericValue, toKey } = require("../types");

function buildMapping(config) {
  if (!config) return {};
  if (config.questionToGroup && typeof config.questionToGroup === "object") {
    return config.questionToGroup;
  }
  if (Array.isArray(config.questionToGroup)) {
    return config.questionToGroup.reduce((acc, row) => {
      acc[toKey(row.questionId)] = row.groupId;
      return acc;
    }, {});
  }
  return {};
}

const categorySumStrategy = {
  id: "category_sum",
  calculate({ answers, config }) {
    const mapping = buildMapping(config);
    const groupScores = {};
    const warnings = [];
    const details = [];

    (answers || []).forEach((answer) => {
      const questionIdKey = toKey(answer.questionId);
      const groupId = mapping[questionIdKey] ?? answer?.meta?.categoryId ?? null;
      const value = getNumericValue(answer);

      if (groupId == null) {
        warnings.push(`No group mapping for question ${questionIdKey}`);
        details.push({ questionId: answer.questionId, value, groupId: null });
        return;
      }

      const groupKey = toKey(groupId);
      groupScores[groupKey] = (groupScores[groupKey] || 0) + value;
      details.push({ questionId: answer.questionId, value, groupId: groupKey });
    });

    return {
      strategy: "category_sum",
      groupScores,
      details,
      warnings,
    };
  },
};

module.exports = categorySumStrategy;

