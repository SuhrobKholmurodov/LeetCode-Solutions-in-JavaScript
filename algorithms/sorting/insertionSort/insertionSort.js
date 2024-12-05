// Function to perform insertion sort
function insertionSort(arr) {
  // Loop through the entire array, starting from the second element
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]; // Store the current element as the key
    let j = i - 1; // Start comparing with the previous element
    // Shift elements of arr[0..i-1] that are greater than key to one position ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]; // Move the larger element one position ahead
      j--; // Move to the previous element
    }
    arr[j + 1] = key; // Insert the key at its correct position
  }
  return arr;
}
// console.log(insertionSort([234, 43, 55, 63, 5, 6, 235, 547]));

// The example of the task by bubble sort

// 1) Sort an Array of Strings
// Implement Insertion Sort to sort an array of strings alphabetically.
// Input: ["apple", "banana", "grape", "kiwi", "orange"]
// Output: ["apple", "banana", "grape", "kiwi", "orange"]

function sortString(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
}
// console.log(sortString(["apple", "banana", "grape", "kiwi", "orange"]));

// 2) Sort an Array in Descending Order
// Modify the Insertion Sort algorithm to sort an array in descending order instead of ascending.
// Input: [5, 3, 8, 1, 2]
// Output: [8, 5, 3, 2, 1]

function sortDescending(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] < key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
}
// console.log(sortDescending([5, 3, 8, 1, 2]));

// 3) Implement a version of Insertion Sort that checks if the array is already sorted before starting the sorting process.
// If the array is already sorted, the algorithm should immediately return the array without making any changes.
// Input: [1, 2, 3, 4, 5]
// Output: [1, 2, 3, 4, 5] (no changes made)

function checkAndSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return insertionSort(array);
    }
  }
  return array;
}
// console.log(checkAndSort([1, 2, 3, 4, 5]));

// 4) Sort an Array of Strings by Length
// Sort an array of strings based on their lengths using Insertion Sort. The shorter strings should come first.
// Input: ["banana", "apple", "kiwi", "cherry", "grape"]
// Output: ["kiwi", "apple", "grape", "banana", "cherry"]

function sortByStringLength(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j].length > key.length) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
}
// console.log(sortByStringLength(["banana", "apple", "kiwi", "cherry", "grape"]));
