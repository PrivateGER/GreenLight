let functionMap = {
    "print": "console.log",
    "log": "Math.log",
    "sqrt": "Math.sqrt",
    "pow": "Math.pow",
    "exp": "Math.exp",
    "max": "Math.max",
    "min": "Math.min",
    "random": "Math.random",
    "sin": "Math.sin",
    "cos": "Math.cos",
    "tan": "Math.tan",
    "input": "await greenlight_internal_prompt",
    "strToArray": "greenlight_internal_string_to_char_array",
    "httpGet": "await greenlight_internal_http_get",
    "exit": "greenlight_internal_exit",
    "isNumber": "greenlight_internal_is_number",
    "logError": "greenlight_internal_log_error",
    "run": "await greenlight_internal_run",
    "sha256": "greenlight_internal_sha256",
    "sha3": "greenlight_internal_sha3",
    "getObjectKeys": "greenlight_internal_get_object_keys",
    "getObjectValues": "greenlight_internal_get_object_values",
    "objToArray": "greenlight_internal_object_to_array",
    "objToJsonString": "greenlight_internal_object_to_json_string",
    "arrMin": "greenlight_internal_array_min",
    "arrMax": "greenlight_internal_array_max",
    "arrAvg": "greenlight_internal_array_average",
    "arrSum": "greenlight_internal_array_sum",
    "trueTypeOf": "greenlight_internal_true_type_of",
    "randomNumberBetween": "greenlight_internal_random_number_between",
};

exports.functionMap = functionMap;

exports.implementation = (rawToken) => {
    if(functionMap[rawToken.slice(0, -1)] === undefined) {
        return;
    }

    return functionMap[rawToken.slice(0, -1)] + "("; // Cut the paranthesis, get matching function translation and add (
}
