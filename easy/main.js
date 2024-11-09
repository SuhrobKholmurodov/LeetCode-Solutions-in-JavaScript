// 1) Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return []; // Return empty array if there is no solution
}

let array = [2, 7, 11, 15];
let target = 9;
// console.log(twoSum(array, target));

// 2) Given an integer x, return true if x is a palindrome, and false otherwise.
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

function isPalindrome(num) {
  let reversed = 0;
  let temp = num;
  while (temp > 0) {
    reversed = reversed * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  return reversed === num;
}
// console.log(isPalindrome(121));

// 3) Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

function longestCommonPrefix(strs) {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix.length === 0) return "";
    }
  }
  return prefix;
}
let strings = ["flower", "flow", "flight"];
// console.log(longestCommonPrefix(strings));

// 4) Given two strings needle and haystack, return the index of the first occurrence of
// needle in haystack, or -1 if needle is not part of haystack.
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.

function strStr(word, str) {
  let res = "";
  for (let i = 0; i < word.length; i++) {
    res += word[i];

    if (res.length > str.length) {
      res = res.slice(1);
    }

    if (res === str) {
      return i - str.length + 1;
    }
  }
  return -1;
}
// console.log(strStr("mississippi", "issi"));

// 5) Given a sorted array of distinct integers and a target value, return the index if the target
// is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
// Input: nums = [1,3,5,6], target = 5
// Output: 2

function searchInsert(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] == target) {
      return middle;
    }
    if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return left;
}
let array1 = [1, 3, 5, 6];
let target1 = 5;
// console.log(searchInsert(array1, target1));

// 6) Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

function lengthOfLastWord(str) {
  let strSplit = str.trim().split(" ");
  return strSplit[strSplit.length - 1].length;
}
// console.log(lengthOfLastWord("   fly me   to   the moon  "));

// 7) You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

function climbStairs(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let first = 1;
  let second = 2;
  let total;

  for (let i = 3; i <= n; i++) {
    total = first + second;
    first = second;
    second = total;
  }

  return total;
}
// console.log(climbStairs(2));

// 8) Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
// Input: nums = [4,1,2,1,2]
// Output: 4

function singleNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isUnique = true;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      return arr[i];
    }
  }
  return -1;
}
// console.log(singleNumber([1, 2, 3, 2, 1]));

// 9) Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.
// Input: nums = [3,2,3]
// Output: 3

function majorityElement(array) {
  let cur = null;
  let cnt = 0;

  for (let i = 0; i < array.length; i++) {
    if (cnt === 0) {
      cur = array[i];
    }
    cnt += array[i] === cur ? 1 : -1;
  }

  return cur;
}
// console.log(majorityElement([3, 2, 3]));

// 10) Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.

function addDigits(num) {
  if (num < 10) {
    return num;
  }
  let a = (num % 10) + addDigits(Math.floor(num / 10));
  if (a >= 10) {
    return addDigits(a);
  }
  return a;
}
// console.log(addDigits(38));

// 11) Given an array nums containing n distinct numbers in the range [0, n], return the only number in the
// range that is missing from the array.
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing
// number in the range since it does not appear in nums.

function missingNumber(array) {
  array.sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== i) {
      return i;
    }
  }

  return array.length;
}
// console.log(missingNumber([1, 2]));

// 12) Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n == 3x.
// Input: n = 27
// Output: true
// Explanation: 27 = 33

function isPowerOfThree(num) {
  if (num <= 0) return false;
  while (num % 3 === 0) {
    num /= 3;
  }
  return num === 1;
}
// console.log(isPowerOfThree(81));
