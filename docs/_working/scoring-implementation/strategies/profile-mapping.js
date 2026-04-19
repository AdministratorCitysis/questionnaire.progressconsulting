const { getNumericValue } = require("../types");

function matchProfile(total, profiles) {
  if (!Array.isArray(profiles)) return null;
  for (const profile of profiles) {
    const min = typeof profile.min === "number" ? profile.min : Number.NEGATIVE_INFINITY;
    const max = typeof profile.max === "number" ? profile.max : Number.POSITIVE_INFINITY;
    if (total >= min && total <= max) return profile;
  }
  return null;
}

const profileMappingStrategy = {
  id: "profile_mapping",
  calculate({ answers, config }) {
    const total = (answers || []).reduce((acc, answer) => acc + getNumericValue(answer), 0);
    const profile = matchProfile(total, config?.profiles);

    return {
      strategy: "profile_mapping",
      total,
      profile,
      details: [],
      warnings: profile ? [] : ["No profile matched the computed total."],
    };
  },
};

module.exports = profileMappingStrategy;

