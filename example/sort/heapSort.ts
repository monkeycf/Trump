import trump from 'src';

/**
 * 堆排序例子
 */
function heapExample(): void {
  const arr = [1, 2, 5, 6, 7, 5, 8];
  trump.heapSort(arr, (a: number, b: number) => {
    return a < b;
  });
}

export default heapExample;
