const { expect } = require('chai');
const parse = require('../index');

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
