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

describe('When an expected input is received', () => {
  
  it('should return an invalid number when the input has only one number', () => {
    expect(add("1")).toBe(1);
    expect(add("1000")).toBe(1000);
    expect(add("1000,")).toBe(1000);
    expect(add("0")).toBe(0);
    expect(add("0,")).toBe(0);
  });

  it('should return the sum when the input has two numbers', () => {
    expect(add("1,2")).toBe(3);
    expect(add("1,1")).toBe(2);
    expect(add("0,1")).toBe(1);
    expect(add("0,0")).toBe(0);
  });
});
