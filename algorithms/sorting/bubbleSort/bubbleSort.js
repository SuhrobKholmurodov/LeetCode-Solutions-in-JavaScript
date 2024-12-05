// Function to perform bubble sort
function bubbleSort(arr) {
  // Loop through the entire array
  for (let i = 0; i < arr.length; i++) {
    // Compare adjacent elements up to the unsorted portion
    for (let j = 0; j < arr.length - i - 1; j++) {
      // If the current element is greater than the next element, swap them
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]; // Temporarily store the current element
        arr[j] = arr[j + 1]; // Move the next element to the current position
        arr[j + 1] = temp; // Move the current element to the next position
      }
    }
  }
  return arr;
}
// console.log(bubbleSort([234, 43, 55, 63, 5, 6, 235, 547]));



// The example of the task by bubble sort

// 1) Sort in Descending Order
// Modify Bubble Sort to sort an array in descending order.
// Example:
// Input: [4, 2, 7, 1, 5]
// Output: [7, 5, 4, 2, 1]

function sortDescending(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] < array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
// console.log(sortDescending([4, 2, 7, 1, 5]));

// 2) Find the Largest Element
// Use Bubble Sort to find the largest element in the array (the last element after sorting).
// Example:
// Input: [4, 7, 1, 8, 3]
// Output: 8

function findLargestElement(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array[array.length - 1];
}
// console.log(findLargestElement([4, 7, 1, 8, 3]));

// 3) Sort Strings by Length
// Sort an array of strings based on their length in ascending order.
// Example:
// Input: ["apple", "cat", "banana", "dog"]
// Output: ["cat", "dog", "apple", "banana"]

function sortStringsByLength(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j].length > array[j + 1].length) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
// console.log(sortStringsByLength(["apple", "cat", "banana", "dog"]));

// 4) Count Swaps During Sorting
// Modify Bubble Sort to count how many swaps it takes to sort the array.
// Example:
// Input: [4, 3, 1]
// Output: Number of swaps: 3

function countSwaps(array) {
  let swapCnt = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] && array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapCnt++;
      }
    }
  }
  return swapCnt;
}
// console.log(countSwaps([4, 3, 1]));

// 6) Remove Duplicates After Sorting
// Sort an array of integers in ascending order and remove any duplicate elements.
// Example:
// Input: [4, 2, 7, 2, 4, 8]
// Output: [2, 4, 7, 8]

function removeDuplicatesAfterSorting(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
}
// console.log(removeDuplicatesAfterSorting([4, 2, 7, 2, 4, 8]));
