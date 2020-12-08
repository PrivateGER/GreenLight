const { regexTerms, resolveRegex } = require("./lexerToken");

function parseLine(line) {
  const mainRegex = regexTerms();
  const lexerResults = line.match(mainRegex); // The Regex result is quickly translated into an array
  let lexeredLine = [];

  lexerResults.map((lexerResult) => {
    lexeredLine.push(resolveRegex(lexerResult));
  });

  return lexeredLine;
}
exports.execute = parseLine;
