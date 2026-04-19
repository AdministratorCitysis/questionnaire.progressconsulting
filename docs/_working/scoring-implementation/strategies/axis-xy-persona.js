const { getNumericValue, toKey } = require("../types");

function axisPosition(value, middle) {
  return value > middle ? 0 : value === middle ? 1 : 2;
}

/**
 * Reproduces the improved persona logic currently used in PersonaFR / PersonaFRhautencouleur.
 */
function computeImprovedPersonaIndex(scoreX, scoreY, middle) {
  const POSX_I = axisPosition(scoreX, middle);
  const POSY_I = axisPosition(scoreY, middle);
  let xIndex;
  const yIndex = POSY_I;

  if (POSY_I === 0) {
    if (POSX_I === 0) {
      if (scoreY < scoreX) xIndex = 0;
      else if (scoreY === scoreX) xIndex = 1;
      else xIndex = 2;
    } else if (POSX_I === 1) {
      xIndex = 3;
    } else if (scoreY > 32 - scoreX) {
      xIndex = 4;
    } else if (scoreY === 32 - scoreX) {
      xIndex = 5;
    } else {
      xIndex = 6;
    }
  } else if (POSY_I === 1) {
    if (POSX_I === 0) xIndex = 0;
    else if (POSX_I === 1) xIndex = 1;
    else xIndex = 2;
  } else if (POSX_I === 0) {
    if (scoreY > 32 - scoreX) xIndex = 0;
    else if (scoreY === 32 - scoreX) xIndex = 1;
    else xIndex = 2;
  } else if (POSX_I === 1) {
    xIndex = 3;
  } else if (scoreY < scoreX) {
    xIndex = 4;
  } else if (scoreY === scoreX) {
    xIndex = 5;
  } else {
    xIndex = 6;
  }

  return { xIndex, yIndex, POSX_I, POSY_I };
}

/**
 * Reproduces legacy persona logic used in PersonaFROLD.
 */
function computeLegacyPersonaIndex(scoreX, scoreY, middle) {
  const xIndex = axisPosition(scoreX, middle);
  const yIndex = axisPosition(scoreY, middle);
  return { xIndex, yIndex };
}

function computeAxesFromAnswers(answers, axisByCategoryId) {
  const axes = { x: 0, y: 0 };
  (answers || []).forEach((answer) => {
    const categoryId = answer?.meta?.categoryId;
    if (categoryId == null) return;
    const axis = axisByCategoryId[toKey(categoryId)];
    if (axis !== "x" && axis !== "y") return;
    axes[axis] += getNumericValue(answer);
  });
  return axes;
}

const axisXYPersonaStrategy = {
  id: "axis_xy_persona",
  calculate({ answers, config, context }) {
    const middle = typeof config?.middle === "number" ? config.middle : 16;
    const mode = config?.mode === "legacy" ? "legacy" : "improved";
    const axisByCategoryId = config?.axisByCategoryId || { "11": "x", "12": "y" };

    const scoreX =
      typeof context?.precomputedAxes?.x === "number"
        ? context.precomputedAxes.x
        : computeAxesFromAnswers(answers, axisByCategoryId).x;
    const scoreY =
      typeof context?.precomputedAxes?.y === "number"
        ? context.precomputedAxes.y
        : computeAxesFromAnswers(answers, axisByCategoryId).y;

    const gridIndex =
      mode === "legacy"
        ? computeLegacyPersonaIndex(scoreX, scoreY, middle)
        : computeImprovedPersonaIndex(scoreX, scoreY, middle);

    const profileGrid = config?.profileGrid || null;
    const profile =
      profileGrid &&
      profileGrid[gridIndex.yIndex] &&
      profileGrid[gridIndex.yIndex][gridIndex.xIndex]
        ? profileGrid[gridIndex.yIndex][gridIndex.xIndex]
        : null;

    return {
      strategy: "axis_xy_persona",
      axes: {
        x: scoreX,
        y: scoreY,
        middle,
        mode,
      },
      profile: profile
        ? {
            gridIndex,
            value: profile,
          }
        : {
            gridIndex,
            value: null,
          },
      warnings: [],
      details: [],
    };
  },
};

module.exports = axisXYPersonaStrategy;
module.exports.computeImprovedPersonaIndex = computeImprovedPersonaIndex;
module.exports.computeLegacyPersonaIndex = computeLegacyPersonaIndex;

