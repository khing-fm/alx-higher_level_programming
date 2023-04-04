#!/usr/bin/node
exports.nbOccurences = function (list, searchElement) {
  const repArray = list.filter(item => item === searchElement);
  return repArray.length;
};
