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

/* Instead of creating an array of objects for Token to be compared with given lexerItm,
*  Find the token with the lexerItm, then return a single object
*  Previous version, let n = the num of tokens, the best case is Ω(n) runtime.
*  This version, let n = the num of tokens, the best case is Ω(1) runtime.
*/
function resolveRegex(lexerItem) {
  const foundToken = Object.keys(tokens.tokens).find((token) => {
    const matchReg = new RegExp(`(${tokens.tokens[token].match})`, "gi");
    return lexerItem.match(matchReg) != null ? true : false;
  });
  return {
    identifier: foundToken,
    token: lexerItem,
  };
}

module.exports = { regexTerms, resolveRegex };
