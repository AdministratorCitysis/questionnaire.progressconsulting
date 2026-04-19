const { getNumericValue } = require("../types");

const simpleSumStrategy = {
  id: "simple_sum",
  calculate({ answers }) {
    const details = [];
    const total = (answers || []).reduce((acc, answer) => {
      const value = getNumericValue(answer);
      details.push({
        questionId: answer.questionId,
        value,
      });
      return acc + value;
    }, 0);

    return {
      strategy: "simple_sum",
      total,
      details,
      warnings: [],
    };
  },
};

module.exports = simpleSumStrategy;

