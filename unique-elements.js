// Function to return elements that appear only once in total from both arrays
function unique(arr1, arr2) {
  // Step 1: Combine both arrays into one
  let combined = [...arr1, ...arr2];

  // Step 2: Filter the combined array
  // Keep only those elements that appear exactly once
  let uniqueElements = combined.filter((item, index, array) => {
    // indexOf(item) gives the first occurrence
    // lastIndexOf(item) gives the last occurrence
    // If both are the same, the item appears only once in total
    return array.indexOf(item) === array.lastIndexOf(item);
  });

  // Step 3: Return the array of truly unique elements
  return uniqueElements;
}

// Example usage
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

// Output: [1, 2, 5, 6]
// Explanation: 3 and 4 appear in both arrays, so they are excluded
let result = unique(arr1, arr2);
console.log(result);
