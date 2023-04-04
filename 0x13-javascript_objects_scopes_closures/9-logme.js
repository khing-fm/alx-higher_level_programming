#!/usr/bin/node
let noArgs = 0;
exports.logMe = function (item) {
  console.log(`${noArgs}: ${item}`);
  noArgs++;
};
