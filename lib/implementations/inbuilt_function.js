exports.implementation = (rawToken) => {
    switch (rawToken) {
        case "print(":
            return "console.log("
        case "log(":
            return "Math.log("
        case "sqrt(":
            return "Math.sqrt("
        case "input(":
            return "await greenlight_internal_prompt("
        case "strToArray(":
            return "greenlight_internal_string_to_char_array("
        case "httpGet(":
            return "await greenlight_internal_http_get("
        case "exit(":
            return "greenlight_internal_exit("
        case "isNumber(":
            return "greenlight_internal_is_number("
    }
}