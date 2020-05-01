const { stdin, stdout } = process;

function greenlight_internal_prompt(question) {
    return new Promise((resolve, reject) => {
        stdin.resume();
        stdout.write(question);

        stdin.on('data', data => resolve(data.toString().trim()));
        stdin.on('error', err => reject(err));
    });
}

function greenlight_internal_string_to_char_array(string) {
    return Array.from(string);
}
