//Write a JavaScript function to implement quick sort to sort an array of strings
//in alphabetical order.

function quickSortStrings(arr) {
  if (arr.length < 2) return arr;
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
  return [...quickSortStrings(left), pivot, ...quickSortStrings(right)];
}

const unsortedArray = ["banana", "apple", "orange", "grape"];
console.log("Unsorted array:", unsortedArray);
const sortedArray = quickSortStrings(unsortedArray);
console.log("Sorted array:", sortedArray);
