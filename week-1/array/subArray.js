//finding the maximum sum of subArray
function maxSubArray(arr) {
  let maxSum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    for (let j = i; j < arr.length; j++) {
      currentSum = currentSum + arr[j];
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }
  return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//max number of sub string from an string
function maxNumOfSubString(str) {
  let max = 0;
  console.log(max);
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      max++;
    }
  }
  return max;
}

console.log("maxSubString:", maxNumOfSubString("hello"));

//kadanes algorithm for maxim sum of subarray
function kadanesMaxSubArray(arr) {
  let maxSum = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
}
console.log(kadanesMaxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//max number of sub string from an string simplified
function kadanesMaxSubString(str) {
  const n = str.length;
  // Formula to find the number of substrings in a string of length n
  // Number of substrings = n * (n + 1) / 2
  return (n * (n + 1)) / 2;
}

console.log("maxSubStringSimplified:", kadanesMaxSubString("hello"));
