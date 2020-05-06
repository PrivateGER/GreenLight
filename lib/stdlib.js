const { stdin, stdout } = process;

const greenlight_internal_http = require("http");
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
		if(url.startsWith("https")) {
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
			
		} else if(url.startsWith("http")) {
			greenlight_internal_http.get(url, (resp) => {
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
		} else {
			reject("Invalid protocol.");
		}
	});
}

function greenlight_internal_exit(code) {
	process.exit(code);
}

function greenlight_internal_is_number(input) {
	return typeof input == "number" || !isNaN(input);
}