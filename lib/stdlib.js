const { stdin, stdout } = process;

const greenlight_internal_https = require("https");


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

function greenlight_internal_http_get(url) {
	return new Promise((resolve, reject) => {
		greenlight_internal_https.get(url, (resp) => {
		let data = '';

		resp.on('data', (chunk) => {
			data += chunk;
		});

		resp.on('end', () => {
			resolve(data);
		});

		}).on("error", (err) => {
			reject(err);
		});
	});
}