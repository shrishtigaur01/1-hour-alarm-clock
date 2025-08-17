// This script finds and logs the second largest number in an array
// without sorting, filtering, or using Math.max multiple times

let numbers = [23, 45, 67, 89, 12, 90, 44];

// Initialize two variables to keep track of the largest and second largest numbers
let largest = -Infinity;
let secondLargest = -Infinity;

// Loop through each number in the array
for (let num of numbers) {

  // If current number is greater than the largest found so far
  if (num > largest) {
    // Update secondLargest to the previous largest
    secondLargest = largest;
    // Update largest to current number
    largest = num;

  // If current number is smaller than largest but greater than secondLargest
  } else if (num > secondLargest && num < largest) {
    // Update secondLargest
    secondLargest = num;
  }
}

// Print the second largest number found
console.log(secondLargest);
