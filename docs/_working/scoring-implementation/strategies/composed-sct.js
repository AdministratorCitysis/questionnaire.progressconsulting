const { getNumericValue, toKey } = require("../types");

function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

function accumulate(map, key, value) {
  map[key] = (map[key] || 0) + value;
}

function scoreLikertByGroup(answers, questionToGroup) {
  const groupScores = {};
  const details = [];

  safeArray(answers).forEach((answer) => {
    if (answer.type === "ranking_item") return;
    const groupId = questionToGroup[toKey(answer.questionId)] ?? answer?.meta?.categoryId ?? null;
    if (groupId == null) return;
    const groupKey = toKey(groupId);
    const value = getNumericValue(answer);
    accumulate(groupScores, groupKey, value);
    details.push({ source: "likert", questionId: answer.questionId, groupId: groupKey, value });
  });

  return { groupScores, details };
}

function scoreRankingByGroup(answers, config) {
  const groupScores = {};
  const details = [];
  const rankingPointsByPosition = safeArray(config?.rankingPointsByPosition);
  const optionToGroup = config?.rankingOptionToGroup || {};

  safeArray(answers)
    .filter((answer) => answer.type === "ranking_item")
    .forEach((answer) => {
      const rankedOptions = safeArray(answer.rankedOptions);
      rankedOptions.forEach((ranked, index) => {
        const groupId = ranked.groupId ?? optionToGroup[toKey(ranked.optionId)] ?? null;
        if (groupId == null) return;
        const groupKey = toKey(groupId);
        const points = typeof rankingPointsByPosition[index] === "number" ? rankingPointsByPosition[index] : 0;
        accumulate(groupScores, groupKey, points);
        details.push({
          source: "ranking",
          questionId: answer.questionId,
          optionId: ranked.optionId,
          rank: index + 1,
          groupId: groupKey,
          value: points,
        });
      });
    });

  return { groupScores, details };
}

function mergeScores(lhs, rhs) {
  const out = { ...lhs };
  Object.entries(rhs).forEach(([key, value]) => {
    out[key] = (out[key] || 0) + value;
  });
  return out;
}

const composedSctStrategy = {
  id: "composed_sct",
  calculate({ answers, config }) {
    const questionToGroup = config?.likertQuestionToGroup || {};
    const likert = scoreLikertByGroup(answers, questionToGroup);
    const ranking = scoreRankingByGroup(answers, config);
    const groupScores = mergeScores(likert.groupScores, ranking.groupScores);

    return {
      strategy: "composed_sct",
      groupScores,
      details: [...likert.details, ...ranking.details],
      warnings: [],
    };
  },
};

module.exports = composedSctStrategy;

