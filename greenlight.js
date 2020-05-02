let fs = require("fs");
let lexer = require("./lib/lexer");
let transpiler = require("./lib/transpiler");
let colors = require("./lib/colors");

let code = "";

if(process.argv[2] != null) {
	for(let i = 2; process.argv[i] != null; i++) {
		if(!fs.existsSync(process.argv[i])) {
			console.log(colors.red + "[ERR] " + process.argv[i] + " doesn't exist!" + colors.reset);
			process.exit(1);
		}
		code += new String(fs.readFileSync(process.argv[i])).replace(/(\r\n|\n|\r)/gm, "");
	}
} else {
	console.log(colors.red + "[ERR] No input file supplied. Pass source files as arguments. Exiting..." + colors.reset);
	process.exit(1);
}

console.log(colors.green + "⬤ GreenLight v0.0.1" + colors.reset)

let lexerResults = lexer.execute(code)

//console.log(lexerResults);

lexerResults.forEach(token => {
	transpiler.transpile(token);
})

//console.log(transpiler.getCode());
eval(transpiler.getCode());
