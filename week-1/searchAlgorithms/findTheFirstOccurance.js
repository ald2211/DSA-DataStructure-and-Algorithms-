/*
  Implement a function binarySearchFirstOccurrence(nums, target) that takes in a sorted array of numbers nums and a target number target.
  The function should return the index of the first occurrence of the target in the array if it exists, otherwise return -1.
*/

function binarySearchFirstOccurrence(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let result = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      result = mid; // Store the index
      right = mid - 1; // Move to the left to find the first occurrence
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

console.log(binarySearchFirstOccurrence([1, 2, 3, 3, 3, 4, 5, 6], 3));
console.log(binarySearchFirstOccurrence([1, 2, 3, 2, 3, 4, 5, 6], 2));
