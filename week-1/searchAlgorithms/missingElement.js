//Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
//Return the kth positive integer that is missing from this array.

function missingInteger(arr, k) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= k + count) {
      count++;
    }
  }
  return k + count;
}
console.log(missingInteger([2, 3, 4, 7, 11], 5));
console.log(missingInteger([2, 3, 4, 7, 12], 4));
