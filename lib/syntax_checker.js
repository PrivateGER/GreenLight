let colors = require(__dirname + "/colors");

function checkSyntax(compiledCode) {
	let checkPassed = true;
	let splitCode = compiledCode.split(";");

	if (!checkParenthesesBracket(splitCode)) checkPassed = false;

	splitCode = compiledCode.split(" ");
	if (!checkAsyncFunctionCalls(splitCode)) checkPassed = false;

	return checkPassed;
}

function checkParenthesesBracket(code) {
	let passed = true;

	for (let i = 0; i < code.length; i++) {
		// Case 1: '(' is not properly closed
		if (code[i].includes("(")) {
			let flag = true; // check '(', ')' is a pair
			code[i].split("").forEach(char => {
				if (flag && char === "(") flag = false; // needs ')'
				if (!flag && char === ")") flag = true; // needs '('
			});
			// '(', ')' is not a pair
			if (!flag) {
				console.log(colors.yellow + "[WARN] '(' is not closed. This could cause syntax errors: " + code[i] + colors.reset);
				passed = false;
			}
		}

		// Case 2: '[' is not properly closed
		if (code[i].includes("[")) {
			let flag = true; // check '[', ']' is a pair
			code[i].split("").forEach(char => {
				if (flag && char === "[") flag = false; // needs ']'
				if (!flag && char === "]") flag = true; // needs '['
			});
			// '[', ']' is not a pair
			if (!flag) {
				console.log(colors.yellow + "[WARN] Array '[' is not closed. This could cause syntax errors: " + code[i] + colors.reset);
				passed = false;
			}
		}
	}
	return passed;
}

function checkAsyncFunctionCalls(code) {
	let passed = true;
	let withinString = false;
	for (let i = 1; i < code.length; i++) {
		if (code[i].endsWith("(") && code[i - 1] !== "await") {
			console.log(colors.yellows + "[WARN] Function call made without call statement. This could cause serious logic errors: " + code[i] + colors.reset);
			passed = false;
		}
	}
	return passed;
}

exports.checkSyntax = checkSyntax;
