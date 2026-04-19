function interpretByThresholds(total, thresholds) {
  const safeThresholds = Array.isArray(thresholds) ? thresholds : [];
  for (const threshold of safeThresholds) {
    if (typeof threshold?.maxValue !== "number") continue;
    if (total <= threshold.maxValue) {
      return {
        interpreter: "thresholds",
        match: threshold,
        warnings: [],
      };
    }
  }

  return {
    interpreter: "thresholds",
    match: null,
    warnings: ["No threshold matched the computed score."],
  };
}

module.exports = {
  interpretByThresholds,
};

