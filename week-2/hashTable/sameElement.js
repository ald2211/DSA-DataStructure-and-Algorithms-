// given two array return true if any one of the element in the first array matches any element in the
//second array else return false.
//use hashtable

function check(arr1, arr2) {
  let hashTable = new Map();
  for (let i = 0; i < arr1.length; i++) {
    hashTable.set(arr1[i], true);
  }
  for (let j = 0; j < arr2.length; j++) {
    if (hashTable.get(arr2[j])) return true;
  }
  return false;
}

console.log(check([1, 2, 4], [4, 3, 6]));
