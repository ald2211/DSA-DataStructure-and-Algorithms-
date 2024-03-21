//implment the linear search
//write a function to search "target" in numbs.if target exists,then return the indexes that target is present.otherwise,return -1,

function linearSearch(arr, target) {
  let indexArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      indexArray.push(i);
    }
  }
  return indexArray.length === 0 ? -1 : indexArray;
}

console.log(linearSearch([1, 2, 3, 4, 4, 4, 8, 5, 6], 4));
console.log(linearSearch([1, 2, 3, 4, 8, 5, 6], 9));
