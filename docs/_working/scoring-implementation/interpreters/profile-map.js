function interpretByProfileKey(profileKey, profilesByKey) {
  const match = profilesByKey && Object.prototype.hasOwnProperty.call(profilesByKey, profileKey)
    ? profilesByKey[profileKey]
    : null;

  return {
    interpreter: "profile_map",
    match,
    warnings: match ? [] : [`No profile mapping for key: ${profileKey}`],
  };
}

module.exports = {
  interpretByProfileKey,
};

