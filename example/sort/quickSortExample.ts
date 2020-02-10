import trump from 'src';

function quickExample(): void {
  const arr = [1, 2, 5, 6, 7, 5, 8];
  trump.quickSort(arr, (a, b) => {
    return a < b;
  });
  console.log(arr);
}

export default quickExample;
