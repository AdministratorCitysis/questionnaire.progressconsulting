const strategy = require("./profile-mapping");

describe("profile_mapping strategy", () => {
  it("maps total to profile range", () => {
    const result = strategy.calculate({
      answers: [
        { questionId: 1, normalizedValue: 3 },
        { questionId: 2, normalizedValue: 4 },
      ],
      config: {
        profiles: [
          { id: "low", min: 0, max: 4 },
          { id: "high", min: 5, max: 10 },
        ],
      },
    });

    expect(result.total).toBe(7);
    expect(result.profile).toEqual({ id: "high", min: 5, max: 10 });
  });
});

