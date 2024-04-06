//Write a JavaScript function to implement insertion sort to sort an array of strings
//in alphabetical order.

function insertionSortStrings(arr) {
  for (let i = 1; i < arr.length; i++) {
    let elementToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > elementToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = elementToInsert;
  }
  return arr;
}

const unsortedArray = ["banana", "apple", "orange", "grape"];
console.log("Unsorted array:", unsortedArray);
const sortedArray = insertionSortStrings(unsortedArray);
console.log("Sorted array:", sortedArray);
