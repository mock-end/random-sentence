'use strict';

var expect = require('chai').expect;


describe('random-sentence: ', function () {

  var randomSentence = require('../../');

  it('randomSentence()', function () {
    expect(randomSentence()).to.be.a('string');

    for (var i = 0; i < 100; i++) {
      expect(randomSentence().split(' ')).to.have.length.within(1, 20);
    }
  });


  it('randomSentence(8)', function () {
    expect(randomSentence(8).split(' ')).to.have.length.within(1, 8);
  });

  it('randomSentence(8, 8)', function () {
    for (var i = 0; i < 100; i++) {
      expect(randomSentence(8, 8).split(' ').length).to.be.equal(8);
    }
  });
});
