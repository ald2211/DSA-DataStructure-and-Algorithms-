//merge sort

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
}

var arr = [1, 6, 5, 4, 3, 2];
console.log(mergeSort(arr));

// The original array is divided into sub-arrays until they each have one element (base case).
// These single-element sub-arrays are inherently sorted.
// During the merging phase, the merge function efficiently combines sorted sub-arrays by repeatedly
// picking the smaller element from the beginnings of the sub-arrays and adding it to the final sorted array.
