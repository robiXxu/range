const range = require('../index');

describe('Test range functionality', () => {
  test('calling range(1) should return [0]', () => {
    expect(range(1)).toEqual([0])
  });

  test('calling range(5) should return [0,1,2,3,4]', () => {
    expect(range(5)).toEqual([0,1,2,3,4])
  });

  test('calling range(1,5) should return [1,2,3,4]', () => {
    expect(range(1,5)).toEqual([1,2,3,4])
  });

  test('calling range(1,5,2) should return [1,3]', () => {
    expect(range(1,5,2)).toEqual([1,3])
  });

  test('calling range(0) should return []', () => {
    expect(range(0)).toEqual([])
  });

  test('calling range(22,0) should return []', () => {
    expect(range(22,0)).toEqual([])
  });

  test('calling range(-5,0) should return [-5, -4, -3, -2, -1]', () => {
    expect(range(-5,0)).toEqual([-5, -4, -3, -2, -1])
  });

  test('calling range(-5,5) should return [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4]', () => {
    expect(range(-5,5)).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4])
  });

  test('calling range(0,3000,250) should return [0, 250, 500, 750, 1000, 1250, 1500, 1750, 2000, 2250, 2500, 2750]', () => {
    expect(range(0,3000,250)).toEqual([0, 250, 500, 750, 1000, 1250, 1500, 1750, 2000, 2250, 2500, 2750])
  });
});


describe('Test range calls with wrong params', () => {
  test('calling range() (with 0 arguments) should throw "Wrong number of arguments, expected 1..3 arguments got 0."', () => {
    expect(() => range()).toThrow('[rangejs]: Wrong number of arguments, expected 1..3 arguments got 0.')
  });

  test('calling range("2") should throw "One or more arguments are not of type number."',() => {
    expect(() => range("2")).toThrowError("[rangejs]: One or more arguments are not of type number.");
  });
});