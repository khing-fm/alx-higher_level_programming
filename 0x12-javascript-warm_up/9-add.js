#!/usr/bin/node
function addNumbs (a, b) {
	const c = a + b;
	console.log(c);
}
addNumbs(Number(process.argv[2]), Number(process.argv[3]));
