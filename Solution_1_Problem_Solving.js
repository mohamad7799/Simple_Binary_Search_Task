// finds the first and last occurrence indices of a target value in a  array.
function findTargetRange(array, target) {
  // Extra Check if the input array is empty or contains empty elements
  if (array.length === 0 || array.some(item => item === "")) {
    // Log an error message in the console
    console.error("Array is empty or contains empty elements.");
    // Return [-1, -1] to indicate an error
    return [-1, -1];
  }

  // Call  functions to find the first and last indices
  const firstIndex = findFirstIndex(array, target);
  const lastIndex = findLastIndex(array, target);

  // Check if both first and last indices were found
  if (firstIndex !== -1 && lastIndex !== -1) {
    // Return the range as an array [firstIndex, lastIndex]
    return [firstIndex, lastIndex];
  } else {
    // If either index is -1, return [-1, -1] to indicate an error
    return [-1, -1];
  }
}

//   to find the first occurrence index using (binary search)
function findFirstIndex(array, target) {
  // Initialize low and high indices to define the search range
  let low = 0;
  let high = array.length - 1;
  // Initialize firstIndex to -1 (no occurrence found)
  let firstIndex = -1;

  // Perform binary search
  while (low <= high) {
    // Calculate the middle index
    const mid = Math.floor((low + high) / 2);
    
    // Check if the element at mid is equal to the target value
    if (array[mid] === target) {
      // Update firstIndex to mid
      firstIndex = mid;
      // Narrow the search to the left half
      high = mid - 1;
    } else if (array[mid] < target) {
      // Narrow the search to the right half
      low = mid + 1;
    } else {
      // Narrow the search to the left half
      high = mid - 1;
    }
  }

  // Return the first occurrence index or -1 if not found
  return firstIndex;
}

// Helper function to find the last occurrence index using binary search
function findLastIndex(array, target) {
  // Initialize low and high indices to define the search range
  let low = 0;
  let high = array.length - 1;
  // Initialize lastIndex to -1 (no occurrence found)
  let lastIndex = -1;

  // Perform binary search
  while (low <= high) {
    // Calculate the middle index
    const mid = Math.floor((low + high) / 2);
    
    // Check if the element at mid is equal to the target value
    if (array[mid] === target) {
      // Update lastIndex to mid
      lastIndex = mid;
      // Narrow the search to the right half
      low = mid + 1;
    } else if (array[mid] < target) {
      // Narrow the search to the right half
      low = mid + 1;
    } else {
      // Narrow the search to the left half
      high = mid - 1;
    }
  }

  // Return the last occurrence index or -1 if not found
  return lastIndex;
}

// Sample input_1
    const array = [0,1,21,33,45,45,45,45,45,45,61,71,73];
    const target = 45;

    // Call the function
    const result = findTargetRange(array, target);

    // Display the result
    console.log(result); // Output: [-1, -1]

//------------------------------------------------------------
//------------------------------------------------------------

// Sample input_2
    const array_2 = [1,1,1,1,2,2,1,1,1];
    const target_2 = 1;

    // Call the function
    const result_2 = findTargetRange(array_2, target_2);

    // Display the result
    console.log(result_2); // Output: [0, 3]


//------------------------------------------------------------
//------------------------------------------------------------


// Sample input_3
    const array_3 = [1,1,1,2,2,2];
    const target_3 = 4;

    // Call the function
    const result_3 = findTargetRange(array_3, target_3);

    // Display the result
    console.log(result_3); // Output: [0, 3]




//------------------------------------------------------------
//------------------------------------------------------------

// Sample input_3
const array_4 = [1,1,1,"",2,2,2];
const target_4 = 4;

// Call the function
const result_4 = findTargetRange(array_4, target_4);

// Display the result
console.log(result_4); // Output: Validation +  [-1, -1]