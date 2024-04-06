//sort the array in ascending order using insertion sort algorithm

let arr = [1, 3, 5, -3, 6, 0, 9];

function insertionSort(arr) {
  let elementToInsert;
  for (let i = 1; i < arr.length; i++) {
    elementToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > elementToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = elementToInsert;
  }
  return arr;
}

console.log(insertionSort([5, 4, 3, 2, 1]));

// Time Complexity: O(n^2) in the worst and average cases, but can be O(n) for already sorted arrays.
// Space Complexity: O(1), as it sorts in-place without using extra space.
