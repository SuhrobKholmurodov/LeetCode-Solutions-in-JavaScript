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
// console.log(findDuplicate([1, 3, 4, 2, 2]));

// 6) Given two integers a and b, return the sum of the two integers without using the operators + and -.
// Input: a = 2, b = 3
// Output: 5

function getSum(a, b) {
  return (a += b);
}
// console.log(getSum(2, 3));

// 7) Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
// Input: x = 123
// Output: 321

function reverse(num) {
  let reversedNum = 0;
  const negNum = num < 0;
  num = Math.abs(num);

  while (num !== 0) {
    const digit = num % 10;

    if (reversedNum > (2147483647 - digit) / 10) {
      return 0;
    }

    reversedNum = reversedNum * 10 + digit;
    num = Math.floor(num / 10);
  }

  return negNum ? -reversedNum : reversedNum;
}
// console.log(reverse(-2147483648));

// 8) You are given an array of strings nums and an integer k. Each string in nums represents an integer without leading zeros.
// Return the string that represents the kth largest integer in nums.
// Note: Duplicate numbers should be counted distinctly. For example, if nums is ["1","2","2"], "2" is the first largest integer,
// "2" is the second-largest integer, and "1" is the third-largest integer.
// Input: nums = ["3","6","7","10"], k = 4
// Output: "3"
// Explanation:
// The numbers in nums sorted in non-decreasing order are ["3","6","7","10"].
// The 4th largest integer in nums is "3".

function kthLargestNumber(array, k) {
  let sortedArray = array.sort((a, b) => {
    if (a.length !== b.length) {
      return b.length - a.length;
    }
    return b > a ? 1 : -1;
  });

  return sortedArray[k - 1];
}
// console.log(kthLargestNumber(["3", "6", "7", "10"], 4));

// 9) You are given a 0-indexed array nums consisting of positive integers. You can choose two indices i and j,
// such that i != j, and the sum of digits of the number nums[i] is equal to that of nums[j].
// Return the maximum value of nums[i] + nums[j] that you can obtain over all possible indices i and j that satisfy the conditions.
// Input: nums = [18,43,36,13,7]
// Output: 54
// Explanation: The pairs (i, j) that satisfy the conditions are:
// - (0, 2), both numbers have a sum of digits equal to 9, and their sum is 18 + 36 = 54.
// - (1, 4), both numbers have a sum of digits equal to 7, and their sum is 43 + 7 = 50.
// So the maximum sum that we can obtain is 54.

function maximumSum(array) {
  let res = [];
  let maxSum = -1;
  for (let i = 0; i < array.length; i++) {
    res.push(
      array[i]
        .toString()
        .split("")
        .map(Number)
        .reduce((a, b) => a + b, 0)
    );
  }
  let digitSumMax = [];
  for (let i = 0; i < array.length; i++) {
    let digitSum = res[i];
    if (digitSumMax[digitSum] === undefined) {
      digitSumMax[digitSum] = array[i];
    } else {
      maxSum = Math.max(maxSum, array[i] + digitSumMax[digitSum]);
      digitSumMax[digitSum] = Math.max(digitSumMax[digitSum], array[i]);
    }
  }
  return maxSum;
}
// console.log(maximumSum([18, 43, 36, 13, 7]));

// 10) Given a string s, find the length of the longest substring without repeating characters.
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
function lengthOfLongestSubstring(str) {
  let maxLen = 0;
  for (let i = 0; i < str.length; i++) {
    let temp = "";
    for (let j = i; j < str.length; j++) {
      if (temp.includes(str[j])) {
        maxLen = Math.max(maxLen, temp.length);
        break;
      }
      temp += str[j];
    }
    maxLen = Math.max(maxLen, temp.length);
  }
  return maxLen;
}
// console.log(lengthOfLongestSubstring("abcabcbb"));

// 11) Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Explanation:
// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

function groupAnagrams(array) {
  let res = {};
  for (let i = 0; i < array.length; i++) {
    let key = array[i].toLowerCase().split("").sort().join("");
    if (!res[key]) {
      res[key] = [];
    }
    res[key].push(array[i]);
  }
  return Object.values(res);
}
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// 12) Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

function searchRange(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      let leftMatch = mid - 1;
      while (leftMatch >= 0 && array[leftMatch] === target) {
        leftMatch--;
      }
      let rightMatch = mid + 1;
      while (rightMatch < array.length && array[rightMatch] === target) {
        rightMatch++;
      }
      return [leftMatch + 1, rightMatch - 1];
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return [-1, -1];
}
// console.log(searchRange([5, 7, 7, 8, 8, 10], 8));

// 13) Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.
// Note that s may contain leading or trailing spaces or multiple spaces between two words.
// The returned string should only have a single space separating the words. Do not include any extra spaces.
// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

function reverseWords(str) {
  let words = str.split(" ").filter((word) => word !== "");
  let reversedWords = words.reverse();
  return reversedWords.join(" ");
}
// console.log(reverseWords("a good   example"));
