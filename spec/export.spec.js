const parse = require('../index');
/* eslint-env mocha */
/* eslint max-nested-callbacks: [ 'error', 5 ] */
const { expect } = require('chai');

describe('module exports', () => {
  it('should be a function', () => {
    expect(parse).to.be.a('function');
  });

  it('should accept one parameter', () => {
    expect(parse.length).to.equal(1);
  });

  it('should be named parse', () => {
    expect(parse.name).to.equal('parse');
  });
});
