import trump from 'src';

/**
 * 快速排序例子
 */
function quickExample(): void {
  const arr = [1, 2, 5, 6, 7, 5, 8];
  trump.quickSort(arr, (a: number, b: number) => {
    return a < b;
  });
}

export default quickExample;
