//find the second largest number in the array[optimised sloution]
function secondLargestNum(nums) {
  let l = -2222;
  let sl = -2222;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > l) {
      sl = l;
      l = nums[i];
    } else if (nums[i] !== l && nums[i] > sl) {
      sl = nums[i];
    }
  }
  return sl;
}

console.log(secondLargestNum([1, 2, 3, 5, 6]));




//another method to find the second largest number in the array
function sl(arr) {
  let uniqueArr = Array.from(new Set(arr));
  uniqueArr.sort((a, b) => b - a);
  return uniqueArr.length >= 2 ? uniqueArr[1] : -1;
}
console.log(sl([1, 2, 4, 3]));
