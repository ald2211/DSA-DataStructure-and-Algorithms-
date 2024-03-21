//find the square root or nearest integer of a number with binary search

const sqrt = (num) => {
  if (num < 0) {
    console.error("not possible");
    return;
  }
  if (num == 0 || num == 1) {
    return num;
  }

  let left = 0;
  let right = num;
  let closest;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let square = middle * middle;
    if (square === num) {
      return middle;
    }

    if (square < num) {
      left = middle + 1;
      closest = left;
    } else {
      right = middle - 1;
    }
  }
  return closest;
};
console.log(sqrt(16));

function recursive(num, left = 0, right = num, closest) {
  if (num < 0) return console.error("not possible");
  if (left > right) {
    return closest;
  }
  let middle = Math.floor((left + right) / 2);
  let square = middle * middle;
  if (square === num) {
    return middle;
  }
  if (square < num) {
    return recursive(num, middle + 1, right, middle);
  } else {
    return recursive(num, left, middle - 1, closest);
  }
}

console.log(recursive(0));
