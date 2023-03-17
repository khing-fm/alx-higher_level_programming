#!/usr/bin/node
exports.addMeMaybe = function (number, callback) {
  number++;
  callback(number);
};
