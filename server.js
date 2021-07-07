"use strict";
		
const utils = require('utils');

function outer(x) {
	let y = 40;
	function inner(z) {
		return x * y / z;
	}
	return inner;
}

let a = outer(30);
let b = a(10);

console.log(b);
