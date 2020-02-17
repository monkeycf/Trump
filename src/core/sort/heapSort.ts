import { sortDefault } from './index';

/**
 * 原地交换两数
 * @param arr 数组
 * @param l 第一个下标
 * @param r 第二个下标
 */
function swap<T>(arr: T[], l: number, r: number): void {
  [arr[l], arr[r]] = [arr[r], arr[l]];
}

/**
 * @param arr 排序数组
 * @param index 父节点下标
 * @param len 待排数组长度
 * @param fun 比较方法
 */
const heapHandler: SortHandler = function<T>(
  arr: T[],
  index: number,
  len: number,
  fun: SortComparisonMethods<T>,
): void {
  const li = index * 2 + 1,
    ri = (index + 1) * 2;
  let pi = index;
  if (li < len && fun(arr[li], arr[pi])) pi = li;
  if (ri < len && fun(arr[ri], arr[pi])) pi = ri;
  if (pi != index) {
    swap(arr, index, pi);
    heapHandler(arr, pi, len, fun);
  }
};

/**
 * 堆排序
 * @param arr 排序数组
 * @param fun 比较方法
 */
const heapSort: SortTypes = function<T>(arr: T[], fun: SortComparisonMethods<T> = sortDefault): void {
  const len = arr.length;
  for (let i = Math.floor((len - 1) / 2); i >= 0; i--) {
    heapHandler(arr, i, len, fun);
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    swap(arr, 0, i);
    heapHandler(arr, 0, i, fun);
  }
};

export default heapSort;
