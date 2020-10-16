let functionMap = {
    "print": "console.log",
    "log": "Math.log",
    "sqrt": "Math.sqrt",
    "input": "await greenlight_internal_prompt",
    "strToArray": "greenlight_internal_string_to_char_array",
    "httpGet": "await greenlight_internal_http_get",
    "exit": "greenlight_internal_exit",
    "isNumber": "greenlight_internal_is_number",
    "logError": "greenlight_internal_log_error",
    "run": "await greenlight_internal_run",
    "sha256": "greenlight_internal_sha256",
    "sha3": "greenlight_internal_sha3",
    "randomNumberBetween": "greenlight_internal_random_number_between",
};

exports.functionMap = functionMap;

exports.implementation = (rawToken) => {
    if(functionMap[rawToken.slice(0, -1)] === undefined) {
        return;
    }

    return functionMap[rawToken.slice(0, -1)] + "("; // Cut the paranthesis, get matching function translation and add (
}
