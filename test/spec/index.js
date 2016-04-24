'use strict';

var expect = require('chai').expect;

var MIN_LEN = 2;
var MAX_LEN = 20;

describe('random-sentence: ', function () {

  var randomSentence = require('../../');

  it('randomSentence()', function () {
    expect(randomSentence()).to.be.a('string');

    for (var i = 0; i < 100; i++) {
      expect(randomSentence().split(' ')).to.have.length.within(MIN_LEN, MAX_LEN);
    }
  });


  it('randomSentence(8)', function () {
    expect(randomSentence(8).split(' ')).to.have.length.within(MIN_LEN, 8);
  });

  it('randomSentence(8, 8)', function () {
    for (var i = 0; i < 100; i++) {
      expect(randomSentence(8, 8).split(' ').length).to.be.equal(8);
    }
  });
});
