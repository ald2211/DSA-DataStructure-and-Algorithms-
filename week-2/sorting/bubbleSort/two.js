// Modify the bubble sort algorithm to sort an array of objects based on a specific
//property in ascending order. For example, if the objects in the array have a property
// called "value", the sorting should be based on the "value" property.

function bubbleSortObjects(arr, property) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i][property] > arr[i + 1][property]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}
const arrayOfObjects = [
  { name: "John", age: 25 },
  { name: "Alice", age: 20 },
  { name: "Bob", age: 30 },
];
console.log("Unsorted array of objects:", arrayOfObjects);
const sortedArray = bubbleSortObjects(arrayOfObjects, "age");
console.log("Sorted array of objects based on age:", sortedArray);
