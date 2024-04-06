//sort the array in ascending order using quick sort algorithm

let arr = [1, 3, 5, -3, 6, 0, 9];

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(arr));
// The function checks if the array is already sorted (base case).
// It chooses a pivot element.
// It partitions the array into two sub-arrays based on the pivot.
// It recursively sorts the left and right sub-arrays.
// It combines the sorted sub-arrays with the pivot in the middle, resulting in the final sorted array.
