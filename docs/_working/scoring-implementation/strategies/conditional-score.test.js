const strategy = require("./conditional-score");

describe("conditional_score strategy", () => {
  it("maps option index to group-specific values (delegation pattern)", () => {
    const result = strategy.calculate({
      answers: [
        { questionId: 1, optionIndex: 0 }, // group positive => 1
        { questionId: 2, optionIndex: 0 }, // group negative => 4
        { questionId: 3, optionIndex: 3 }, // group positive => 4
      ],
      config: {
        questionToGroup: {
          "1": "positive",
          "2": "negative",
          "3": "positive",
        },
        groupOptionValues: {
          positive: [1, 2, 3, 4],
          negative: [4, 3, 2, 1],
        },
      },
    });

    expect(result.groupScores).toEqual({
      positive: 5,
      negative: 4,
    });
    expect(result.total).toBe(9);
    expect(result.warnings).toEqual([]);
  });
});

