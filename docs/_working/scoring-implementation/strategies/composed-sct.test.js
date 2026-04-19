const strategy = require("./composed-sct");

describe("composed_sct strategy", () => {
  it("combines likert and ranking points by group", () => {
    const result = strategy.calculate({
      answers: [
        { questionId: 1, normalizedValue: 8, type: "single_choice" },
        { questionId: 2, normalizedValue: 4, type: "single_choice" },
        {
          questionId: "rank-1",
          type: "ranking_item",
          rankedOptions: [
            { optionId: "a", groupId: "1" },
            { optionId: "b", groupId: "2" },
          ],
        },
      ],
      config: {
        likertQuestionToGroup: {
          "1": "1",
          "2": "2",
        },
        rankingPointsByPosition: [14, 12],
      },
    });

    expect(result.groupScores).toEqual({
      "1": 22,
      "2": 16,
    });
  });
});

