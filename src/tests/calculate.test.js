import calculate from '../logic/calculate';

describe('testing the calcultion logic', () => {
  test('testing first input', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const result = calculate(obj, '3');
    expect(result.next).toBe('3');
  });

  test('testing second input', () => {
    const obj = {
      total: null,
      next: '5',
      operation: null,
    };
    const result = calculate(obj, '+');
    expect(result.total).toBe('5');
    expect(result.operation).toBe('+');
  });

  test('testing third input', () => {
    const obj = {
      total: '10',
      next: null,
      operation: '+',
    };
    const result = calculate(obj, '3');
    expect(result.next).toBe('3');
  });

  test('testing total output', () => {
    const obj = {
      total: '10',
      next: '3',
      operation: '+',
    };
    const result = calculate(obj, '=');
    expect(result.total).toBe('13');
  });

  test('testing clear output', () => {
    const obj = {
      total: '10',
      next: '3',
      operation: '+',
    };
    const result = calculate(obj, 'AC');
    expect(result.total).toBe(null);
    expect(result.next).toBe(null);
    expect(result.operation).toBe(null);
  });
});
