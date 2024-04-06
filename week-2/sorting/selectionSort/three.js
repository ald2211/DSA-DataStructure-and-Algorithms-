//Write a JavaScript function to implement selection sort to sort an array of strings
//in alphabetical order.

function selectionSortStrings(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

const unsortedArray = ["banana", "apple", "orange", "grape"];
console.log("Unsorted array:", unsortedArray);
const sortedArray = selectionSortStrings(unsortedArray);
console.log("Sorted array:", sortedArray);
