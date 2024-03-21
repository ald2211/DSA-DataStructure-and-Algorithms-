//implment the linear search
//write a function to search "target" in numbs.if target exists,then return its index.otherwise,return -1,

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([1, 2, 3, 4, 8, 5, 6], 4));
console.log(linearSearch([1, 2, 3, 4, 8, 5, 6], 9));
