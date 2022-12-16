// Inject node globals into React Native global scope.
import { decode, encode } from 'base-64'
global.process = require('process')

if (typeof btoa === 'undefined') {
	global.btoa = function (str) {
		return encode(str)
	}
}

if (typeof atob === 'undefined') {
	global.atob = function (b64Encoded) {
		return decode(b64Encoded)
	}
}
