//Write a JavaScript function to implement bubble sort to sort an array of strings
//in alphabetical order.

function bubbleSortStrings(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

const unsortedArray = ["banana", "apple", "orange", "grape"];
console.log("Unsorted array:", unsortedArray);
const sortedArray = bubbleSortStrings(unsortedArray);
console.log("Sorted array:", sortedArray);
