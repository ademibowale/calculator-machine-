import operate from '../logic/operate';

describe('testing the operations', () => {
  test('testing addition operation', () => {
    const result = operate(1, 2, '+');
    expect(result).toBe('3');
  });
  test('testing subtract operation', () => {
    const result = operate(3, 1, '-');
    expect(result).toBe('2');
  });
  test('testing multiplication operation', () => {
    const result = operate(6, 5, 'x');
    expect(result).toBe('30');
  });
  test('testing division operation', () => {
    const result = operate(30, 5, '÷');
    expect(result).toBe('6');
  });
});
