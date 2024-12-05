// Function to perform linear search
function linearSearch(array, target) {
  // Loop through the entire array
  for (let i = 0; i < array.length; i++) {
    // If the current element is equal to the target, return its index
    if (array[i] === target) {
      return i; // Return the index of the found element
    }
  }
  // If the element is not found, return -1
  return -1;
}
// console.log(linearSearch([2, 3, 4, 10, 40], 10));

// 1) Find the Last Occurrence of a Target
// Input: findLastOccurrence([2, 3, 4, 10, 10, 40], 10)
// Output: 4
function findLastOccurrence(array, target) {
  let lastIndex = -1;
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === target) {
      lastIndex = i;
      break;
    }
  }
  return lastIndex;
}
// console.log(findLastOccurrence([2, 3, 4, 10, 10, 40], 10));

// 2)  Check if a Value Exists in an Array
// input: containsValue([2, 3, 4, 10, 40], 5)
// output: false
function get(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return true;
    }
  }
  return false;
}
// console.log(get([2, 3, 4, 10, 40], 5));

// 3) Count the Occurrences of a Target
// Input: countOccurrences([2, 3, 4, 10, 10, 40, 10], 10)
// Output: 3

function countOccurrences(array, target) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      count++;
    }
  }
  return count;
}
// console.log(countOccurrences([2, 3, 4, 10, 10, 40, 10], 10));

// 4) Find Index of Multiple Occurrences
// Input: findIndices([2, 3, 4, 10, 10, 40], 10)
// Output: [3, 4]

function findIndices(array, target) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      res.push(i);
    }
  }
  return res;
}
// console.log(findIndices([2, 3, 4, 10, 10, 40], 10));

// 5) Find the first element that is greater than the target.
// Problem: Write a function findFirstGreater(array, target) that takes an array and a target value as arguments, 
// and returns the first element in the array that is greater than the target. If no such element exists, return -1.
// Example:
// Input: array = [1, 3, 7, 2, 5], target = 4
// Output: 5
// Input: array = [1, 3, 7, 2, 5], target = 8
// Output: -1

function findNextGreater(array, target) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > target) {
      res.push(array[i]);
    }
  }
  return res.length > 0 ? Math.min(...res) : -1;
}
// console.log(findNextGreater([1, 3, 7, 2, 5], 9));
