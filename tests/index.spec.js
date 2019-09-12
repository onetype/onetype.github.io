import { expect } from 'chai';
import author from '../src/index';

describe('One Type', () => {
  it('Art-Directed Blog, by Kyo Euler', () => {
    const actual = author.username;
    const expected = '@kyoeuler';

    expect(actual).to.equal(expected);
  });
});
