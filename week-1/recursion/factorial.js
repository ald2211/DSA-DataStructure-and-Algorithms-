//find the factorial of a number using recursion

function factorial(num) {
  if (num < 0) return "not possible";
  if (num === 0) {
    return 1;
  }

  return num * factorial(num - 1);
}

console.log(factorial(5));
console.log(factorial(-1));
console.log(factorial(0));
console.log(factorial(1));
