//  for the form submit event.
document.getElementById('searchForm').addEventListener('submit', function (e) {
    // Prevent the default form submission behavior.
    e.preventDefault();

    // Get the values entered by the user for the array and target.
    const arrayInput = document.getElementById('arrayInput').value;
    const targetInput = document.getElementById('targetInput').value;

    // Split the input array by commas and trim spaces from each element in first field.
    const arrayValues = arrayInput.split(',').map(item => item.trim());

    // Extra Check if any element in the array is empty.
    if (arrayValues.some(item => item === "")) {
        // Display an error message if an empty element is found.
        document.getElementById('output').innerHTML = '<div class="alert ">Array elements cannot be empty.</div>';
        return; // Stop  execution.
    }

    // Check if the target input is not empty and is a valid number.
    if (isNaN(targetInput)) {
        // Display an error message if the target input is invalid.
        document.getElementById('output').innerHTML = '<div class="alert ">Please enter a valid target number.</div>';
        return; // Stop further execution.
    }

    // Parse the input array and target number.
    const array = arrayValues.map(item => parseInt(item, 10));
    const target = parseInt(targetInput, 10);

    // Reset the output element to clear any previous messages.
    document.getElementById('output').innerHTML = '';

    // Call the function to find the range of indices.
    const result = findTargetRange(array, target);

    // Display the result or an error message.
    const outputElement = document.getElementById('output');
    if (result[0] === -1) {
        // Display an error message if the target number is not found.
        outputElement.innerHTML = '<div class="alert ">Target number not found in the array [-1,-1].</div>';
    } else {
        // Display the result if the target number is found.
        outputElement.innerHTML = `The target number ${target} is found in the range [${result[0]}, ${result[1]}].`;
    }
});

// This function finds the first and last occurrence indices of a target value in a sorted array.
function findTargetRange(array, target) {
    // Call helper functions to find the first and last indices.
    const firstIndex = findFirstIndex(array, target);
    const lastIndex = findLastIndex(array, target);

    // Return the range as an array [firstIndex, lastIndex].
    return [firstIndex, lastIndex];
}

// Helper function to find the first occurrence index using binary search.
function findFirstIndex(array, target) {
    // Initialize low and high indices to define the search range.
    let low = 0;
    let high = array.length - 1;
    // Initialize firstIndex to -1 (no occurrence found).
    let firstIndex = -1;

    // Perform binary search.
    while (low <= high) {
        // Calculate the middle index.
        const mid = Math.floor((low + high) / 2);
        
        // Check if the element at mid is equal to the target value.
        if (array[mid] === target) {
            // Update firstIndex to mid.
            firstIndex = mid;
            // Narrow the search to the left half.
            high = mid - 1;
        } else if (array[mid] < target) {
            // Narrow the search to the right half.
            low = mid + 1;
        } else {
            // Narrow the search to the left half.
            high = mid - 1;
        }
    }

    // Return the first occurrence index or -1 if not found.
    return firstIndex;
}

// Helper function to find the last occurrence index using binary search.
function findLastIndex(array, target) {
    // Initialize low and high indices to define the search range.
    let low = 0;
    let high = array.length - 1;
    // Initialize lastIndex to -1 (no occurrence found).
    let lastIndex = -1;

    // Perform binary search.
    while (low <= high) {
        // Calculate the middle index.
        const mid = Math.floor((low + high) / 2);
        
        // Check if the element at mid is equal to the target value.
        if (array[mid] === target) {
            // Update lastIndex to mid.
            lastIndex = mid;
            // Narrow the search to the right half.
            low = mid + 1;
        } else if (array[mid] < target) {
            // Narrow the search to the right half.
            low = mid + 1;
        } else {
            // Narrow the search to the left half.
            high = mid - 1;
        }
    }

    // Return the last occurrence index or -1 if not found.
    return lastIndex;
}
