//delete duplicate from the sorted array
function deleteDupe(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
  return nums.length;
}

console.log(deleteDupe([1, 2, 2, 2, 2, 2, 3, 4]));
