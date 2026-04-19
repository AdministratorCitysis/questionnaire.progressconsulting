const strategy = require("./simple-sum");

describe("simple_sum strategy", () => {
  it("sums numeric values from normalized answers", () => {
    const result = strategy.calculate({
      answers: [
        { questionId: 1, normalizedValue: 2 },
        { questionId: 2, normalizedValue: 3 },
        { questionId: 3, rawValue: 4 },
      ],
    });

    expect(result.total).toBe(9);
    expect(result.strategy).toBe("simple_sum");
  });
});

