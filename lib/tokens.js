let tokens = {
	"whitespace": {
		"match": " ",
	},
	"number_literal": {
		"match": "[1-9]{1,32}"
	},
	"addition": {
		"match": "\\+"
	},
	"subtraction": {
		"match": "\\-"
	},
	"multiplication": {
		"match": "\\*"
	},
	"division": {
		"match": "/",
	},
	"parameter_open": {
		"match": "\\("
	},
	"parameter_close": {
		"match": "\\)"
	},
	"line_terminator": {
		"match": ";"
	}
};

exports.tokens = tokens;