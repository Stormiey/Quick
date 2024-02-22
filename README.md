# QuicksortJs

  A quicksort implementation in JavaScript. 

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Build Status][travis-image]][travis-url]
  [![Test Coverage][coverage-image]][coverage-url]
  [![Code Climate][climate-image]][climate-url]

- ``quicksortjs.sort`` is a functional implementation that chooses the first element as the pivot. 

- ``quicksortjs.sort2`` is an imperative approach that chooses a random pivot. 

## Benchmarks

Firefox (SpiderMonkey):

```
quicksortjs.sort:  1406.68ms
quicksortjs.sort2: 724.75ms
```

NodeJS (V8):

```
$ time cat IntArray.txt | xargs quicksortjs
  
real    0m2.390s
user    0m1.037s
sys	 0m0.087s
```
```
$ time cat IntArray.txt | xargs quicksortjs -v2

real    0m2.329s
user    0m0.727s
sys	 0m0.077s
```
  
[npm-image]: https://img.shields.io/npm/v/quicksortjs.svg?style=flat
[npm-url]: https://npmjs.org/package/quicksortjs
[downloads-image]: https://img.shields.io/npm/dm/quicksortjs.svg?style=flat
[downloads-url]: https://npmjs.org/package/express
[travis-image]: https://img.shields.io/travis/Risto-Stevcev/javascript-quicksort.svg?style=flat
[travis-url]: https://travis-ci.org/Risto-Stevcev/javascript-quicksort
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/Risto-Stevcev/javascript-quicksort.svg?style=flat
[coverage-url]: https://codeclimate.com/github/Risto-Stevcev/javascript-quicksort
[climate-image]: https://img.shields.io/codeclimate/github/Risto-Stevcev/javascript-quicksort.svg?style=flat
[climate-url]: https://codeclimate.com/github/Risto-Stevcev/javascript-quicksort
