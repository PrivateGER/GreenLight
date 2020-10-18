const { stdin, stdout } = process;

const { exec } = require('child_process');
const greenlight_internal_http = require("http");
const greenlight_internal_https = require("https");
const greenlight_internal_crypto = require("crypto");


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

function greenlight_internal_log_with_color(text, color) {
	console.log("\x1b[0m" + color + text + "\x1b[0m");
}

function greenlight_internal_log_error(text) {
	greenlight_internal_log_with_color(text, "\x1b[31m");
}

function greenlight_internal_run(cmd) {
	return new Promise((resolve, reject) => {
		if (cmd == null) reject("No command to run.");
		exec(cmd, (error, out, err) => {
			if (error) {
				reject(error)
			} else {
				resolve(out);
				reject(err);
			}
		});
	});
}

function greenlight_internal_sha256(data) {
	return greenlight_internal_crypto.createHash("sha256").update(data).digest("hex");
}

function greenlight_internal_sha3(data) {
	return greenlight_internal_crypto.createHash("SHA3-256").update(data).digest("hex");
}

function greenlight_internal_array_min(arr) {
	return Math.min(...arr);
}

function greenlight_internal_array_max(arr) {
	return Math.max(...arr);
}

function greenlight_internal_array_sum(arr) {
	return arr.reduce((a,b) => a + b, 0);
}

function greenlight_internal_array_average(arr) {
	return arr.reduce((a,b) => a + b, 0) / arr.length;
}

function greenlight_internal_true_type_of(input) {
	return Object.prototype.toString.call(input).slice(8, -1).toLowerCase();
}

function greenlight_internal_random_number_between(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}