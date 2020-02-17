import quickSort from './quickSort';
import heapSort from './heapSort';

export const sortDefault: SortComparisonMethods<number | unknown> = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') return a > b;
  return false;
};

export default {
  quickSort,
  heapSort,
};
