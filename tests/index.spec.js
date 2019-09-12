const expect = require('chai').expect;
const author = require('../src/index');

describe('One Type', function() {
  it('Art-Directed Blog, by Kyo Euler', function() {
    const actual = author.username;
    const expected = '@kyoeuler';

    expect(actual).to.equal(expected);
  });
});
