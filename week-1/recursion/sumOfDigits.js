// recursive solution for sum of digits

function sumOfDigits(digit) {
  if (digit < 10) return digit;

  return (digit % 10) + sumOfDigits(Math.floor(digit / 10));
}

console.log(sumOfDigits(3));
console.log(sumOfDigits(13));
console.log(sumOfDigits(31));
console.log(sumOfDigits(32));
