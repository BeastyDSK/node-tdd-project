const { add } = require('../../src/index');

describe('When an unexpected input is received', () => {
  it('should return zero when the input is empty', () => {
    expect(add("")).toBe(0);
  });

  it('should return zero when the input is undefined or null', () => {
    expect(add(null)).toBe(0);
    expect(add(undefined)).toBe(0);
  });

  it('should return zero when the input not a string', () => {
    expect(add(100)).toBe(0);
    expect(add(true)).toBe(0);
    expect(add({})).toBe(0);
  });
});

// To be handled
describe('When an expected input is received', () => {});
