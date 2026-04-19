const { computeScore, interpretScore } = require("./engine");

describe("scoring engine", () => {
  it("runs configured strategy by id", () => {
    const result = computeScore({
      strategyId: "simple_sum",
      answers: [
        { questionId: 1, normalizedValue: 2 },
        { questionId: 2, normalizedValue: 5 },
      ],
    });

    expect(result.total).toBe(7);
  });

  it("interprets threshold result", () => {
    const interpretation = interpretScore({
      scoringResult: { total: 55 },
      interpretation: {
        kind: "thresholds",
        thresholds: [
          { maxValue: 30, message: "low" },
          { maxValue: 60, message: "mid" },
        ],
      },
    });

    expect(interpretation.match).toEqual({ maxValue: 60, message: "mid" });
  });
});

