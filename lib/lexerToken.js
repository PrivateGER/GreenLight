const tokens = require("./tokens");

const regexTerms = () => {
  let regexTerms = [];
  Object.keys(tokens.tokens).forEach((token) => {
    // Populate main regex
    regexTerms.push(`${tokens.tokens[token].match}`);
  });

  let rawRegex = regexTerms.join("|");
  let mainRegex = new RegExp(rawRegex, "gi");

  return mainRegex;
};

const resolveRegex = () => {
  let resolverRegexes = [];
  
  Object.keys(tokens.tokens).forEach((token) => {
    resolverRegexes.push({
      match: new RegExp(`(${tokens.tokens[token].match})`, "gi"),
      data: {
        identifier: token,
      },
    });
  });

  return resolverRegexes;
};

module.exports = { regexTerms, resolveRegex };
