const fs = require('fs');

let available_modules = fs.readdirSync(__dirname + "/implementations/");

console.log("Available implementations: " + available_modules.join(" "));

let code = "";

function transpile(node) {
	code += require("./implementations/" + node.identifier).implementation(node.token);
}

function getCode() {
	return code;
}

function clearCode() {
	code = "";
}

exports.transpile = transpile;
exports.getCode = getCode;
exports.clearCode = clearCode;
