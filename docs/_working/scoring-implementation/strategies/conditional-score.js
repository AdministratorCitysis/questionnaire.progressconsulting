const { toKey } = require("../types");

function resolveOptionIndex(answer, optionOrder) {
  if (Number.isInteger(answer.optionIndex)) return answer.optionIndex;

  if (answer.optionId != null && Array.isArray(optionOrder)) {
    return optionOrder.findIndex((id) => toKey(id) === toKey(answer.optionId));
  }

  if (typeof answer.rawValue === "number" && Number.isInteger(answer.rawValue)) {
    return answer.rawValue;
  }

  return -1;
}

const conditionalScoreStrategy = {
  id: "conditional_score",
  calculate({ answers, config }) {
    const questionToGroup = config?.questionToGroup || {};
    const optionOrder = config?.optionOrder || null;
    const groupOptionValues = config?.groupOptionValues || {};

    const groupScores = {};
    let total = 0;
    const details = [];
    const warnings = [];

    (answers || []).forEach((answer) => {
      const questionKey = toKey(answer.questionId);
      const groupId = questionToGroup[questionKey] ?? answer?.meta?.categoryId ?? null;
      if (groupId == null) {
        warnings.push(`No group for question ${questionKey}`);
        return;
      }

      const groupKey = toKey(groupId);
      const valuesForGroup = groupOptionValues[groupKey];
      if (!Array.isArray(valuesForGroup)) {
        warnings.push(`No conditional values for group ${groupKey}`);
        return;
      }

      const optionIndex = resolveOptionIndex(answer, optionOrder);
      if (optionIndex < 0 || optionIndex >= valuesForGroup.length) {
        warnings.push(`Invalid option index for question ${questionKey}`);
        return;
      }

      const mappedValue = valuesForGroup[optionIndex];
      groupScores[groupKey] = (groupScores[groupKey] || 0) + mappedValue;
      total += mappedValue;

      details.push({
        questionId: answer.questionId,
        groupId: groupKey,
        optionIndex,
        mappedValue,
      });
    });

    return {
      strategy: "conditional_score",
      total,
      groupScores,
      details,
      warnings,
    };
  },
};

module.exports = conditionalScoreStrategy;

