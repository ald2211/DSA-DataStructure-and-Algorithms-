//reverse the array

function reverseArrayInPlace(array) {
  var left = 0;
  var right = array.length - 1;

  while (left < right) {
    // Swap elements at left and right indices
   [array[left],array[right]]=[array[right],array[left]]

    // Move pointers towards the center
    left++;
    right--;
  }
}

var originalArray = [1, 2, 3, 4, 5];
reverseArrayInPlace(originalArray);
console.log("Reversed Array:", originalArray);
