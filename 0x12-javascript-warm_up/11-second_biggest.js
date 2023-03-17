#!/usr/bin/node
const args = process.argv.slice(2, process.argv.length);
if (args.length === 0 || args.length === 1) {
  console.log(0);
} else {
  let first = 0;
  let second = 0;
  if (args[0] > args[1]) {
    first = args[0];
    second = args[1];
  } else {
    first = args[1];
    second = args[0];
  }

  for (let i = 2; i < args.length; i++) {
    if (args[i] > first) {
      second = first;
      first = args[i];
    } else if (args[i] > second) {
      second = args[i];
    }
  }

  console.log(second);
}
