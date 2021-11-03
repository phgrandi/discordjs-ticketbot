module.exports = {
  // https://github.com/5antos
  applyTemplates(data, string, delimiters = ["{", "}"]) {
    return string.replace(
      new RegExp(
        Object.keys(data)
          .map((k) => `${delimiters[0]}${k}${delimiters[1]}`)
          .join("|"),
        "g"
      ),
      (match) => data[match.replace(new RegExp(delimiters.join("|"), "g"), "")]
    );
  },
  wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  },
};
