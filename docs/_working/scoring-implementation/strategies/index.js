const simpleSum = require("./simple-sum");
const categorySum = require("./category-sum");
const multiDimensional = require("./multi-dimensional");
const conditionalScore = require("./conditional-score");
const axisXYPersona = require("./axis-xy-persona");
const composedSct = require("./composed-sct");
const profileMapping = require("./profile-mapping");

const strategyList = [
  simpleSum,
  categorySum,
  multiDimensional,
  conditionalScore,
  axisXYPersona,
  composedSct,
  profileMapping,
];

const strategyRegistry = strategyList.reduce((acc, strategy) => {
  acc[strategy.id] = strategy;
  return acc;
}, {});

module.exports = {
  strategyList,
  strategyRegistry,
};

