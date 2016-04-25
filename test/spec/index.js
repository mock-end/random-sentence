var expect = require('chai').expect;

var MIN_LEN = 2;
var MAX_LEN = 18;

describe('random-sentence: ', function () {

  var randomSentence = require('../../');

  it('randomSentence()', function () {

    expect(randomSentence()).to.be.a('string');

    for (var i = 0; i < 100; i++) {
      expect(randomSentence().split(' ')).to.have.length.within(12, MAX_LEN);
    }
  });

  it('randomSentence({ words: 8 })', function () {
    expect(randomSentence({ words: 8 }).split(' ')).to.have.length(8);
  });


  it('randomSentence({ min: 8, max: 12 })', function () {
    for (var i = 0; i < 100; i++) {
      expect(randomSentence({
        min: 8,
        max: 12
      }).split(' ')).to.have.length.within(8, 12);
    }
  });

  it('randomSentence({ max: 12 })', function () {
    for (var i = 0; i < 100; i++) {
      expect(randomSentence({
        max: 12
      }).split(' ')).to.have.length.within(MIN_LEN, 12);
    }
  });

  it('randomSentence({ min: 8 })', function () {
    for (var i = 0; i < 100; i++) {
      expect(randomSentence({
        min: 8
      }).split(' ')).to.have.length.within(8, MAX_LEN);
    }
  });

  it('randomSentence({ min: "0", max: "0" })', function () {
    for (var i = 0; i < 100; i++) {
      expect(randomSentence({
        min: '0',
        max: '0'
      }).split(' ')).to.have.length.within(MIN_LEN, MAX_LEN);
    }
  });
});
