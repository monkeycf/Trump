import { sortDefault } from './index';

/**
 * @param arr 排序数组
 * @param left 开始下标
 * @param right 结束下标
 * @param fun 比较方法
 */
const quick: SortHandler = function<T>(arr: T[], left: number, right: number, fun: SortComparisonMethods<T>): void {
  if (right - left < 1) return;

  const temp: T = arr[left];
  const leftFlag: number = left;
  const rightFlag: number = right;

  while (left < right) {
    while (left < right && fun(arr[right], temp)) right--;
    arr[left] = arr[right];
    while (left < right && !fun(arr[left], temp)) left++;
    arr[right] = arr[left];
  }
  arr[left] = temp;

  quick(arr, leftFlag, left - 1, fun);
  quick(arr, left + 1, rightFlag, fun);
};

/**
 * 快速排序
 * @param arr 需要排序的数组
 * @param compareFun 比较方法
 */
const quickSort: SortTypes = function<T>(arr: T[], compareFun: SortComparisonMethods<T> = sortDefault): T[] {
  quick(arr, 0, arr.length - 1, compareFun);
  return arr;
};

export default quickSort;
