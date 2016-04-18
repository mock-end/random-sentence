'use strict';

var clamp         = require('clamp');
var randomNatural = require('random-natural');
var randomLorem   = require('random-lorem');


module.exports = function (min, max) {

  var length = arguments.length;

  if (length === 0) {
    min = 1;
    max = 20;
  } else if (length === 1) {
    max = min;
    min = 1;
  }

  length = randomNatural(min, max);
  length = clamp(length, 1, 10);

  var words = [];

  while (length--) {
    words.push(randomLorem());
  }

  return words.join(' ');
};
