const { regexTerms, resolveRegex } = require("./lexerToken");

function parseLine(line) {
  let mainRegex = regexTerms();
  let lexerResults = [...line.matchAll(mainRegex)]; // The Regex result is quickly translated into an array
  lexerResults = lexerResults.map((lexerResult) =>
    resolveLexerItemMetadata(lexerResult)
  );

  return lexerResults;
}

function resolveLexerItemMetadata(lexerItem) {
  let data = {};
  let resolverRegexes = resolveRegex();
  for (let i = 0; i < resolverRegexes.length; i++) {
    if (lexerItem[0].match(resolverRegexes[i].match) != null) {
      data["identifier"] = resolverRegexes[i].data.identifier;
      data["token"] = lexerItem[0];

      break;
    }
  }
  return data;
}

exports.execute = parseLine;
