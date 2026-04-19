const strategy = require("./multi-dimensional");

describe("multi_dimensional strategy", () => {
  it("applies weighted contributions to multiple dimensions", () => {
    const result = strategy.calculate({
      answers: [
        { questionId: 1, normalizedValue: 4 },
        { questionId: 2, normalizedValue: 2 },
      ],
      config: {
        questionToDimensions: {
          "1": [
            { dimensionId: "x", weight: 1 },
            { dimensionId: "y", weight: 0.5 },
          ],
          "2": [{ dimensionId: "y", weight: 1 }],
        },
      },
    });

    expect(result.dimensionScores).toEqual({
      x: 4,
      y: 4,
    });
  });
});

