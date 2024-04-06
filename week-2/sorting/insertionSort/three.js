// Modify the insertion sort algorithm to sort an array of objects based on a specific
//property in ascending order. For example, if the objects in the array have a property
// called "value", the sorting should be based on the "value" property.

function insertionSortObjects(arr, property) {
  for (let i = 1; i < arr.length - 1; i++) {
    let elementToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j][property] > elementToInsert[property]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = elementToInsert;
  }
  return arr;
}
const arrayOfObjects = [
  { name: "John", age: 25 },
  { name: "Alice", age: 20 },
  { name: "Bob", age: 30 },
];
console.log("Unsorted array of objects:", arrayOfObjects);
const sortedArray = insertionSortObjects(arrayOfObjects, "age");
console.log("Sorted array of objects based on age:", sortedArray);
