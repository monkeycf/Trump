import trump from '../../../src';

describe('测试快速排序', () => {
  test('空数组测试', () => {
    expect(trump.quickSort([])).toEqual([]);
  });

  test('递增数组测试', () => {
    expect(trump.quickSort<number>([6, 2, 5], (a: number, b: number) => a > b))
      .toEqual([2, 5, 6]);
  });

  test('递减数组测试', () => {
    expect(trump.quickSort<number>([1, 2], (a: number, b: number) => a < b))
      .toEqual([2, 1]);
  });

  test('默认比较函数测试', () => {
    expect(trump.quickSort<number>([3, 2, 1])).toEqual([1, 2, 3]);
  });

  test('浮点数测试', () => {
    expect(trump.quickSort<number>([1.1, 2.2, 3.3], (a: number, b: number) => a < b))
      .toEqual([3.3, 2.2, 1.1]);
  });

  test('对象测试', () => {
    expect(
      trump.quickSort<JSONValue>(
        [{ id: 1 }, { id: 2 }],
        (a: JSONValue, b: JSONValue) => a < b,
      ),
    ).toEqual([{ id: 2 }, { id: 1 }]);
  });
});
