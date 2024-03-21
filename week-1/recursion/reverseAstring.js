//recursive solution for reverse a string

function reverseString(str) {
  if (str === "" || str.length === 1) {
    return str;
  }

  return str.slice(-1) + reverseString(str.slice(0, -1));
}

console.log(reverseString("HELLO"));
console.log(reverseString("MALAYALAM"));
console.log(reverseString("HAH"));
console.log(reverseString("HAI"));
