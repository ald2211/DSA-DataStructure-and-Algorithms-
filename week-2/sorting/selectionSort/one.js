//sort the array in ascending order using insertion sort algorithm

let arr = [1, 3, 5, -3, 6, 0, 9];

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

console.log(selectionSort(arr));

// Time Complexity: O(n^2) in the worst and average cases, but can be O(n) for already sorted arrays.
// Space Complexity: O(1), as it sorts in-place without using extra space.
