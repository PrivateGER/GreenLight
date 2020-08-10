let colors = require(__dirname + "/colors");

function checkSyntax(compiledCode) {
	let checkPassed = true;
	let splitCode = compiledCode.split(" ");
	
	if(!checkAsyncFunctionCalls(splitCode)) checkPassed = false;

	return checkPassed;
}

function checkAsyncFunctionCalls(code) {
	let passed = true;
	let withinString = false;
	for(let i = 1; i < code.length; i++) {
		if(code[i].endsWith("(") && code[i-1] !== "await") {
			console.log(colors.yellows + "[WARN] Function call made without call statement. This could cause serious logic errors: " + code[i] + colors.reset);
			passed = false;
		}
	}
	return passed;
}

exports.checkSyntax = checkSyntax;
