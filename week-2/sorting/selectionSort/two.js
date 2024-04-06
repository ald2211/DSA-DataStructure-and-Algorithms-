// Modify the selection sort algorithm to sort an array of objects based on a specific
//property in ascending order. For example, if the objects in the array have a property
// called "value", the sorting should be based on the "value" property.

function selectionSortObjects(arr, property) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i][property] > arr[j][property]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}
const arrayOfObjects = [
  { name: "John", age: 25 },
  { name: "Alice", age: 20 },
  { name: "Bob", age: 30 },
];
console.log("Unsorted array of objects:", arrayOfObjects);
const sortedArray = selectionSortObjects(arrayOfObjects, "age");
console.log("Sorted array of objects based on age:", sortedArray);
