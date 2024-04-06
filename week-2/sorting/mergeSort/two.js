// Modify the merge sort algorithm to sort an array of objects based on a specific
//property in ascending order. For example, if the objects in the array have a property
// called "value", the sorting should be based on the "value" property.

function mergeSortObjects(arr, property) {
  if (arr.length < 2) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  return merge(
    mergeSortObjects(left, property),
    mergeSortObjects(right, property),
    property
  );
}

function merge(left, right, property) {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0][property] <= right[0][property]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}
const arrayOfObjects = [
  { name: "John", age: 25 },
  { name: "Alice", age: 20 },
  { name: "Bob", age: 30 },
];
console.log("Unsorted array of objects:", arrayOfObjects);
const sortedArray = mergeSortObjects(arrayOfObjects, "age");
console.log("Sorted array of objects based on age:", sortedArray);
