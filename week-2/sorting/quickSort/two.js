// Modify the quick sort algorithm to sort an array of objects based on a specific
//property in ascending order. For example, if the objects in the array have a property
// called "value", the sorting should be based on the "value" property.

function quickSortObjects(arr, property) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][property] > pivot[property]) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return [
    ...quickSortObjects(left, property),
    pivot,
    ...quickSortObjects(right, property),
  ];
}
const arrayOfObjects = [
  { name: "John", age: 25 },
  { name: "Alice", age: 20 },
  { name: "Bob", age: 30 },
];
console.log("Unsorted array of objects:", arrayOfObjects);
const sortedArray = quickSortObjects(arrayOfObjects, "age");
console.log("Sorted array of objects based on age:", sortedArray);
