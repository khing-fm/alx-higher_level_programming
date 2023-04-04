#!/usr/bin/node
exports.esrever = function (list) {
  const listLength = list.length;
  const newList = [];
  for (let i = 0; i < listLength; i++) {
    newList[i] = list[listLength - 1 - i];
  }
  return newList;
};
