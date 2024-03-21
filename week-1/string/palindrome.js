// find whether the given number is palindrome or not
function pal(num) {
  if (num < 10) return true;
  return num < 0 ? false : num === +num.toString().split("").reverse().join("");
}
console.log(pal(121));

//Time Complexity: O(n)
//Space Complexity: O(n)
