// recursive solution for finding the Nth element from the fibonanchi series

function fib(n) {
  if (n < 0) return "not possible";
  if (n >= 0 && n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
