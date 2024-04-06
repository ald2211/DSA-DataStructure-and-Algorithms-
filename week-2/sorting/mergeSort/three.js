//Write a JavaScript function to implement merge sort to sort an array of strings
//in alphabetical order.

function mergeSortStrings(arr) {
  if (arr.length < 2) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  return merge(mergeSortStrings(left), mergeSortStrings(right));
}
function merge(left, right) {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left > right) {
      sortedArr.push(right.shift());
    } else {
      sortedArr.push(left.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}
const unsortedArray = ["banana", "apple", "orange", "grape"];
console.log("Unsorted array:", unsortedArray);
const sortedArray = mergeSortStrings(unsortedArray);
console.log("Sorted array:", sortedArray);
