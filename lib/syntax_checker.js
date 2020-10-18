let colors = require(__dirname + "/colors");

function checkSyntax(compiledCode) {
	let checkPassed = true;
	let splitCode = compiledCode.split(";");

	if(!checkAsyncFunctionCalls(splitCode)) checkPassed = false;

	return checkPassed;
}

function checkAsyncFunctionCalls(code) {
	let passed = true;
	let withinString = false;
	for(let i = 0; i < code.length; i++) {
		if(code[i].includes("(")){
			let flag = true;
			code[i].split("").forEach(char => {
				if(flag && char ==="(") flag= false;
				if(!flag && char === ")") flag = true;
			});
			if(!flag){
				console.log(colors.yellow + "[WARN] '(' is not closed. This could cause syntax errors: " + code[i] + colors.reset);
				passed = false;
			}
		}

		if(code[i].endsWith("(") && code[i-1] !== "await") {
			console.log(colors.yellow + "[WARN] Function call made without call statement. This could cause serious logic errors: " + code[i] + colors.reset);
			passed = false;
		}
	}
	return passed;
}

exports.checkSyntax = checkSyntax;
