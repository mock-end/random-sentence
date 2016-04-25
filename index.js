'use strict';

var clamp         = require('clamp');
var randomLorem   = require('random-lorem');
var randomNatural = require('random-natural');

var MIN_LEN = 2;
var MAX_LEN = 18;

module.exports = function (options) {

  options = options || {
      words: randomNatural({
        min: 12,
        max: 18,
        inspected: true
      })
    };

  var length = options.words;

  if (!length && (options.min || options.max)) {
    length = randomNatural({
      min: options.min || MIN_LEN,
      max: options.max || MAX_LEN
    });
  }

  length = length || randomNatural({
      min: MIN_LEN,
      max: MAX_LEN,
      inspected: true
    });

  length = clamp(length, MIN_LEN, MAX_LEN);

  var words = [];

  while (length--) {
    words.push(randomLorem());
  }

  var firstWorld = words[0];

  words[0] = firstWorld[0].toUpperCase() + firstWorld.substr(1);

  return words.join(' ') + '.';
};
