const strategy = require("./category-sum");

describe("category_sum strategy", () => {
  it("aggregates values by mapped group", () => {
    const result = strategy.calculate({
      answers: [
        { questionId: 1, normalizedValue: 1 },
        { questionId: 2, normalizedValue: 3 },
        { questionId: 3, normalizedValue: 2 },
      ],
      config: {
        questionToGroup: {
          "1": "a",
          "2": "a",
          "3": "b",
        },
      },
    });

    expect(result.groupScores).toEqual({ a: 4, b: 2 });
    expect(result.warnings).toEqual([]);
  });
});

