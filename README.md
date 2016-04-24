# random-sentence

> Return a random sentence populated by semi-pronounceable random (nonsense) words.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-sentence/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-sentence/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-sentence)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-sentence/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-sentence)


## Install

```
$ npm install --save random-sentence
```

## Usage

> For more use-cases see the [tests](https://github.com/mock-end/random-sentence/blob/master/test/spec/index.js)


```js
var randomSentence = require('random-sentence');

// API
// - randomSentence();
// - randomSentence(max);
// - randomSentence(min, max);
```

By default, the worlds count of the sentence would between `2` and `20`:

```js
randomSentence();
// => Morbi leo risus porta ac consectetur ac vestibulum at eros.
```

Can optionally provide max, and the worlds count would be between `2` and `max`:

```js
randomSentence(8);
// => Fusce dapibus tellus ac cursus commodo.
// => asdjlk
```

Can optionally provide both min and max:

```js
randomSentence(4, 9);
// => Lorem ipsum dolor sit amet consectetur adipiscing elit.

randomSentence(5, 5); // should only have 5 worlds.
// => Maecenas faucibus mollis interdum as.
```

**Note**: these min and max are **inclusive**, so they are included in the range. 

## Related

- [random-syllable](https://github.com/mock-end/random-syllable) - Return a semi-speakable syllable, 2 or 3 letters.
- [random-lorem](https://github.com/mock-end/random-lorem) - Return a semi-pronounceable random (nonsense) word.
- [random-title](https://github.com/mock-end/random-title) - Return a random title populated by semi-pronounceable random (nonsense) words.
- [random-paragraph](https://github.com/mock-end/random-paragraph) - Return a random paragraph generated from sentences populated by semi-pronounceable random (nonsense) words.

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-sentence/issues/new).
