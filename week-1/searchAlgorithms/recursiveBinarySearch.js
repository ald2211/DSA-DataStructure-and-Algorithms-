// //recursive binary search

function recursive(arr, target) {
  return binarySearch(arr, target, 0, arr.length - 1);
}

function binarySearch(arr, target, left, right) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((left + right) / 2);
  if (arr[middle] === target) {
    return middle;
  }

  if (arr[middle] > target) {
    return binarySearch(arr, target, left, middle - 1);
  } else {
    return binarySearch(arr, target, middle + 1, right);
  }
}

console.log(recursive([1, 2, 3, 4, 5, 6, 7, 8, 9], 11));
