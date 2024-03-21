//Given a sorted array of distinct integers and a target value, return the index where the
// target should be inserted into the array if it is not present. You may assume no duplicates
// in the array.

function searchInsert(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) {
      return middle;
    }
    if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return left;
}

console.log(searchInsert([1, 3, 5, 6], 1));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 3));
