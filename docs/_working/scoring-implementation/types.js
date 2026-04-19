/**
 * @typedef {Object} AnswerRecord
 * @property {string|number} questionId
 * @property {string|number|null} [sectionId]
 * @property {string|number|null} [optionId]
 * @property {number|null} [optionIndex]
 * @property {number|null} [rawValue]
 * @property {number|null} [normalizedValue]
 * @property {"single_choice"|"binary_choice"|"numeric_input"|"ranking_item"} [type]
 * @property {Array<{optionId:string|number,groupId?:string|number|null}>} [rankedOptions]
 * @property {Object<string, any>} [meta]
 */

/**
 * @typedef {Object} ScoringResult
 * @property {string} strategy
 * @property {number|null} [total]
 * @property {Record<string, number>} [groupScores]
 * @property {Record<string, number>} [dimensionScores]
 * @property {Object<string, any>} [axes]
 * @property {Object<string, any>} [profile]
 * @property {Array<Object<string, any>>} [details]
 * @property {Array<string>} [warnings]
 */

/**
 * @typedef {Object} ScoringStrategy
 * @property {string} id
 * @property {(input: {
 *  questionnaire?: Object<string, any>,
 *  answers: AnswerRecord[],
 *  config?: Object<string, any>,
 *  context?: Object<string, any>
 * }) => ScoringResult} calculate
 */

/**
 * @typedef {Object} InterpretationResult
 * @property {string} interpreter
 * @property {Object<string, any>|null} match
 * @property {Array<string>} [warnings]
 */

/**
 * Utility helpers for pure scoring functions.
 */
const getNumericValue = (answer) => {
  if (typeof answer?.normalizedValue === "number") return answer.normalizedValue;
  if (typeof answer?.rawValue === "number") return answer.rawValue;
  return 0;
};

const toKey = (value) => String(value);

module.exports = {
  getNumericValue,
  toKey,
};

