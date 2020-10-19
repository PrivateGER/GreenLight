const fs = require('fs');
const syntaxChecker = require(__dirname + "/syntax_checker.js");

let available_modules = fs.readdirSync(__dirname + "/implementations/");

// console.log("Available implementations: " + available_modules.join(" "));

let code = "";
let stdlib = fs.readFileSync(__dirname + "/stdlib.js");

function transpile(node) {
	code += require("./implementations/" + node.identifier).implementation(node.token);
}

function getCode() {
	return `
	${stdlib}
	async function greenlight_main() {
		${code}
		process.exit(0);
	}
	greenlight_main();`.replace(/(\r\n|\n|\r)/gm, "").replace(/\s+/g,' ');
}

function runChecks() {
	return syntaxChecker.checkSyntax(code);
}

function clearCode() {
	code = "";
}

exports.transpile = transpile;
exports.getCode = getCode;
exports.clearCode = clearCode;
exports.runChecks = runChecks;

