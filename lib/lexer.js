const { regexTerms, resolveRegex } = require("./lexerToken");

function parseLine(line) {
  const mainRegex = regexTerms();
  let lexerResults = line.match(mainRegex); // The Regex result is quickly translated into an array
  lexerResults = lexerResults.map((lexerResult) =>
    resolveLexerItemMetadata(lexerResult)
  );
  return lexerResults;
}

function resolveLexerItemMetadata(lexerItem) {
  let data = {};
  const resolverRegexes = resolveRegex(lexerItem);
  for (let i = 0; i < resolverRegexes.length; i++) {
    if (lexerItem.match(resolverRegexes[i].match) != null) {
      data["identifier"] = resolverRegexes[i].data.identifier;
      data["token"] = lexerItem;

      break;
    }
  }
  return data;
}

exports.execute = parseLine;
