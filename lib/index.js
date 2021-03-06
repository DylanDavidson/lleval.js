/**
 * API wrapper for LLEval API for evaluating scripts in many languages
 *
 * @package lleval.js
 * @author Dylan Davidson <ddavidson621@gmail.com>
 */

require('extend-error');
var request = require('request');

exports.NoSourceError = Error.extend('NoSourceError');
exports.NoLanguageError = Error.extend('NoLanguageError');

exports.BASE_URL = "http://api.dan.co.jp/lleval.cgi?";

exports.eval = function(language, code, callback) {
	if(code == null || !code.trim()) {
		callback(this.NoSourceError('No source code provided to evaluate'), null);
	}
	else if(language == null || !language.trim()) {
		callback(this.NoLanguageError('No programming language provided.'), null);
	}
	// TODO: Check if language is valid
	else {
 		// TODO: Implement the API Call
	}
}
