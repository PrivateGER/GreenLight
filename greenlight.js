let lexer = require("./lib/lexer");
let transpiler = require("./lib/transpiler");

let lexerResults = lexer.execute("1 + 535 - ( 52 / 2553)");
console.log(lexerResults);

lexerResults.forEach(token => {
	transpiler.transpile(token);
})


console.log(transpiler.getCode());

console.log(eval(transpiler.getCode()))
