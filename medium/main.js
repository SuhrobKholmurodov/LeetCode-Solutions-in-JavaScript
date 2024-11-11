// 1) Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
// Input: x = 2.00000, n = 10
// Output: 1024.00000

function myPow(x, num) {
  if (num === 0) return 1;
  let res = 1;
  if (num < 0) {
    x = 1 / x;
    num = -num;
  }
  for (let i = num; i > 0; i = Math.floor(i / 2)) {
    if (i % 2 === 1) {
      res *= x;
    }
    x *= x;
  }
  return res;
}
// console.log(myPow(2, 10));

// 2) Given an integer array nums where every element appears three times except for one,
// which appears exactly once. Find the single element and return it.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
// Input: nums = [2,2,3,2]
// Output: 3

function singleNumber(array) {
  let res = {};
  for (let i = 0; i < array.length; i++) {
    if (res[array[i]]) {
      res[array[i]]++;
    } else {
      res[array[i]] = 1;
    }
  }
  return parseInt(
    Object.keys(res)
      .filter((key) => res[key] === 1)
      .pop()
  );
}
// console.log(singleNumber([2, 2, 3, 2]));

// 3) Given an integer array nums, return the maximum difference between two successive elements in its sorted form.
// If the array contains less than two elements, return 0.
// You must write an algorithm that runs in linear time and uses linear extra space.
// Input: nums = [3,6,9,1]
// Output: 3
// Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.

function maximumGap(arr) {
  if (arr.length < 2) {
    return 0;
  }
  let sortedArr = [...arr].sort((a, b) => {
    return a - b;
  });
  let maxElem = 0;
  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i + 1] - sortedArr[i] > maxElem) {
      maxElem = sortedArr[i + 1] - sortedArr[i];
    }
  }
  return maxElem;
}
// console.log(maximumGap([1, 3, 100]));

// 4) Given an integer array nums, in which exactly two elements appear only once and all the other
// elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.
// You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.
// Input: nums = [1,2,1,3,2,5]
// Output: [3,5]
// Explanation:  [5, 3] is also a valid answer.

function singleNumber(array) {
  let res = {};
  for (let i = 0; i < array.length; i++) {
    if (res[array[i]]) {
      res[array[i]]++;
    } else {
      res[array[i]] = 1;
    }
  }
  return Object.keys(res)
    .filter((el) => {
      return res[el] === 1;
    })
    .map(Number);
}
// console.log(singleNumber([1, 2, 1, 3, 2, 5]));

// 5) Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and using only constant extra space
// Input: nums = [1,3,4,2,2]
// Output: 2

function findDuplicate(array) {
  let isElem = {};
  for (let i = 0; i < array.length; i++) {
    if (isElem[array[i]]) {
      return array[i];
    }
    isElem[array[i]] = true;
  }
  return -1;
}
console.log(findDuplicate([1, 3, 4, 2, 2]));
