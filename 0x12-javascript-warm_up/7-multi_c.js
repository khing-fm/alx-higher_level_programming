#!/usr/bin/node
let argg = parseInt(process.argv[2]);
if (isNaN(argg) || process.argv[2] === undefined) {
  console.log('Missing number of occurences');
} else {
  while (argg > 0) {
    console.log('C is fun');
    argg--;
  }
}
