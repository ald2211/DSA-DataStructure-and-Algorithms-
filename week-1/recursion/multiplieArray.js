//recursive method for multiplicatin of array

function multiplieArray(arr) {
  if (arr.length === 0) {
    return 1;
  }

  return arr[0] * multiplieArray(arr.slice(1));
}

console.log(multiplieArray([1, 2]));
