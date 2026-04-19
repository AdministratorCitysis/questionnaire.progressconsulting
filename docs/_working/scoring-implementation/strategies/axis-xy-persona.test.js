const strategy = require("./axis-xy-persona");

describe("axis_xy_persona strategy", () => {
  it("computes improved grid index from precomputed axes", () => {
    const result = strategy.calculate({
      answers: [],
      context: { precomputedAxes: { x: 18, y: 20 } },
      config: {
        mode: "improved",
        middle: 16,
      },
    });

    expect(result.axes.x).toBe(18);
    expect(result.axes.y).toBe(20);
    expect(result.profile.gridIndex).toMatchObject({
      yIndex: 0,
      xIndex: 2,
    });
  });

  it("computes legacy grid index with 3x3 logic", () => {
    const result = strategy.calculate({
      answers: [],
      context: { precomputedAxes: { x: 16, y: 14 } },
      config: {
        mode: "legacy",
        middle: 16,
      },
    });

    expect(result.profile.gridIndex).toEqual({
      xIndex: 1,
      yIndex: 2,
    });
  });
});

