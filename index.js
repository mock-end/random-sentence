'use strict';

var clamp         = require('clamp');
var randomNatural = require('random-natural');
var randomLorem   = require('random-lorem');

var MIN_LEN = 2;
var MAX_LEN = 20;

module.exports = function (min, max) {

  var length = arguments.length;

  if (length === 0) {
    min = MIN_LEN;
    max = MAX_LEN;
  } else if (length === 1) {
    max = min;
    min = MIN_LEN;
  }

  length = randomNatural(min, max);
  length = clamp(length, MIN_LEN, MAX_LEN);


  var words = [];

  while (length--) {
    words.push(randomLorem());
  }

  var firstWorld = words[0];

  words[0] = firstWorld[0].toUpperCase() + firstWorld.substr(1);

  return words.join(' ') + '.';
};
