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
    console.log("key", key);
    let j = i - 1;
    console.log("j", j);
    while (j >= 0 && array[j] < key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
}
// console.log(sortDescending([5, 3, 8, 1, 2]));
