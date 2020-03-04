import trump from '../../../src';

describe('数组降维测试', () => {
  test('二维数组测试', () => {
    expect(trump.flattenDeep([1, [4, 5, 6], 7])).toEqual([1, 4, 5, 6, 7]);
  });
  test('空数组测试', () => {
    expect(trump.flattenDeep([])).toEqual([]);
  });
  test('嵌套空数组测试', () => {
    expect(trump.flattenDeep([[]])).toEqual([]);
  });
  test('高阶数组测试', () => {
    expect(trump.flattenDeep([[[1, 8]], 3])).toEqual([1, 8, 3]);
  });
  test('复合类型测试', () => {
    expect(trump.flattenDeep([[{ value: 1 }], {}])).toEqual([{ value: 1 }, {}]);
  });
});
