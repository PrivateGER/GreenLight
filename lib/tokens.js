let tokens = {
	"constant": {
		"match": "val"
	},
	"variable": {
		"match": "var"
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
	"access_property": {
		"match": ">>"
	},
	"equal": {
		"match": "="
	},
	"line_terminator": {
		"match": ";"
	},
	"string_literal": {
		"match": "([\"'])(?:(?=(\\\\?))\\2.)*?\\1"
	},
	"inbuilt_function": {
		"match": "print\\(|log\\(|sqrt\\(|input\\(|strToArray\\("
	},
	"conditional_statement_if": {
		"match": "if\\("
	},
	"conditional_statement_else": {
		"match": "else"
	},
	"curly_bracket_open": {
		"match": "{"
	},
	"curly_bracket_close": {
		"match": "}"
	},
	"boolean_operation": {
		"match": "==|>=|<=|>|<|&&|\\||!"
	},
	"statement_terminator": {
		"match": ";"
	},
	"parameter_open": {
		"match": "\\("
	},
	"parameter_close": {
		"match": "\\)"
	},
	"index_open": {
		"match": "\\["
	},
	"index_close": {
		"match": "\\]"
	},
	"whitespace": {
		"match": " ",
	},
	"unknown_reference": {
		"match": "\\w+"
	}
};

exports.tokens = tokens;