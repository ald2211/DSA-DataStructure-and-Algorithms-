// palindrome or not

function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Initialize a stack
    const stack = [];

    // Push half of the characters onto the stack
    const halfLength = Math.floor(str.length / 2);
    for (let i = 0; i < halfLength; i++) {
        stack.push(str[i]);
    }

    // Check palindrome condition
    let startIndex = halfLength;
    if (str.length % 2 !== 0) {
        startIndex++; // Skip the middle character if the string length is odd
    }

    for (let i = startIndex; i < str.length; i++) {
        if (str[i] !== stack.pop()) {
            return false; // If characters don't match, it's not a palindrome
        }
    }

    return true; // If all characters match, it's a palindrome
}


console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
