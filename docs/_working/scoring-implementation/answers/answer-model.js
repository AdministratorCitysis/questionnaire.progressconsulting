/**
 * Creates a normalized answer record.
 * This function is pure and does not mutate inputs.
 */
function createAnswerRecord(input) {
  return {
    questionId: input.questionId,
    sectionId: input.sectionId ?? null,
    optionId: input.optionId ?? null,
    optionIndex: Number.isInteger(input.optionIndex) ? input.optionIndex : null,
    rawValue: typeof input.rawValue === "number" ? input.rawValue : null,
    normalizedValue: typeof input.normalizedValue === "number" ? input.normalizedValue : null,
    type: input.type || "single_choice",
    rankedOptions: Array.isArray(input.rankedOptions) ? [...input.rankedOptions] : undefined,
    meta: input.meta ? { ...input.meta } : {},
  };
}

/**
 * Normalizes a list of answers to a unified model.
 */
function normalizeAnswers(rawAnswers) {
  return (rawAnswers || []).map((answer) => createAnswerRecord(answer));
}

module.exports = {
  createAnswerRecord,
  normalizeAnswers,
};

