let tokens = require("./tokens");


let regexTerms = [];
let rawRegex = "";
let mainRegex;
let resolverRegexes = [];

console.log(tokens.tokens);
console.log(Object.keys(tokens.tokens));


Object.keys(tokens.tokens).forEach((token) => { // Populate main regex
	regexTerms.push(`(${tokens.tokens[token].match})`);
});


Object.keys(tokens.tokens).forEach((token) => {
	regexTerms.push(`(${tokens.tokens[token].match})`);

	resolverRegexes.push({
		"match": new RegExp(`(${tokens.tokens[token].match})`, "gi"),
		"data": {
			"identifier": token
		}
	});
});


rawRegex = regexTerms.join("|");

mainRegex = new RegExp(rawRegex, "gi");

function parseLine(line) {
	console.log(regexTerms);
	console.log(mainRegex);

	let lexerResults = [...line.matchAll(mainRegex)]; // The Regex result is quickly translated into an array
	
	lexerResults = lexerResults.map(lexerResult => resolveLexerItemMetadata(lexerResult));

	return lexerResults;
}

function resolveLexerItemMetadata(lexerItem) {
	let data = {};
	for(let i = 0; i < resolverRegexes.length; i++) {
		if(lexerItem[0].match(resolverRegexes[i].match) != null) {
			console.log("FOUND MATCH");
			console.log("Identifier: " + resolverRegexes[i].data.identifier);
		
			data["identifier"] = resolverRegexes[i].data.identifier;
			data["token"] = lexerItem[0];

			break;
		}
	}
	return data;
}

exports.execute = parseLine;
