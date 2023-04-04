#!/usr/bin/node
const OldSqaure = require('./5-square');
module.exports = class Square extends OldSqaure {
  charPrint (c) {
    if (c === undefined) c = 'X';
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        process.stdout.write(c);
      }
      process.stdout.write('\n');
    }
  }
};
