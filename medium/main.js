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

// 14) Given an integer array nums and an integer k, return the kth largest element in the array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

function findKthLargest(array, k) {
  return array.sort((a, b) => b - a)[k - 1];
}
// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))

// 15) Given an integer array nums, return an array answer such that answer[i] is equal to the
// product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

function productExceptSelf(array) {
  let product = 1;
  let zeroCnt = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      zeroCnt++;
    } else {
      product *= array[i];
    }
  }
  if (zeroCnt > 1) {
    for (let i = 0; i < array.length; i++) {
      array[i] = 0;
    }
    return array;
  }
  for (let i = 0; i < array.length; i++) {
    if (zeroCnt === 1) {
      if (array[i] === 0) {
        array[i] = product;
      } else {
        array[i] = 0;
      }
    } else {
      array[i] = product / array[i];
    }
  }
  return array;
}
// console.log(productExceptSelf([1, 2, 3, 4]));

// 16) An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
// Given an integer n, return the nth ugly number.
// Input: n = 10
// Output: 12
// Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.

function nthUglyNumber(n) {
  let uglyNumbers = [1];
  let byTwo = 0;
  let byThree = 0;
  let byFive = 0;
  while (uglyNumbers.length < n) {
    let next = Math.min(
      uglyNumbers[byTwo] * 2,
      uglyNumbers[byThree] * 3,
      uglyNumbers[byFive] * 5
    );
    uglyNumbers.push(next);
    if (next === uglyNumbers[byTwo] * 2) {
      byTwo++;
    }
    if (next === uglyNumbers[byThree] * 3) {
      byThree++;
    }
    if (next === uglyNumbers[byFive] * 5) {
      byFive++;
    }
  }
  return uglyNumbers[n - 1];
}
// console.log(nthUglyNumber(1407));

// 17) Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array.
// The result should also be sorted in ascending order. An integer a is closer to x than an integer b if:
// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b
// Input: arr = [1,2,3,4,5], k = 4, x = 3
// Output: [1,2,3,4]

function findClosestElements(array, k, x) {
  const sorted = array.sort((a, b) => Math.abs(a - x) - Math.abs(b - x));
  const res = sorted.slice(0, k);
  return res.sort((a, b) => a - b);
}
// console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));

// 18) Given an integer array nums of length n where all the integers of nums are in the range [1, n]
// and each integer appears at most twice, return an array of all the integers that appears twice.
// You must write an algorithm that runs in O(n) time and uses only constant auxiliary space,
// excluding the space needed to store the output
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]

function findDuplicates(array) {
  let res = [];
  let cnt = {};
  for (let i = 0; i < array.length; i++) {
    if (cnt[array[i]]) {
      if (cnt[array[i]] === 1) {
        res.push(array[i]);
      }
      cnt[array[i]]++;
    } else {
      cnt[array[i]] = 1;
    }
  }
  return res;
}
// console.log(findDuplicates([1, 1, 2, 3, 2, 4, 5]))

// 19) You are given m arrays, where each array is sorted in ascending order.
// You can pick up two integers from two different arrays (each array picks one)
// and calculate the distance. We define the distance between two integers a and b to be their absolute difference |a - b|.
// Return the maximum distance.
// Input: arrays = [[1,2,3],[4,5],[1,2,3]]
// Output: 4
// Explanation: One way to reach the maximum distance 4 is to pick 1 in the first or third array and pick 5 in the second array.

function maxDistance(arrays) {
  let maxElem = arrays[0][arrays[0].length - 1];
  let minElem = arrays[0][0];
  let maxDiff = 0;

  for (let i = 1; i < arrays.length; i++) {
    let curMax = arrays[i][arrays[i].length - 1];
    let curMin = arrays[i][0];
    maxDiff = Math.max(
      maxDiff,
      Math.abs(maxElem - curMin),
      Math.abs(curMax - minElem)
    );
    maxElem = Math.max(maxElem, curMax);
    minElem = Math.min(minElem, curMin);
  }
  return maxDiff;
}
// console.log(maxDistance([[1, 2, 3], [4, 5], [1, 2, 3],]));

// 20) Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.
// A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:
// 0 <= i, j < nums.length
// i != j
// |nums[i] - nums[j]| == k
// Notice that |val| denotes the absolute value of val.
// Input: nums = [3,1,4,1,5], k = 2
// Output: 2
// Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
// Although we have two 1s in the input, we should only return the number of unique pairs.

function findPairs(nums, k) {
  let cnt = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) === k) {
        cnt++;
        break;
      }
    }
  }
  return cnt;
}
// console.log(findPairs([3, 1, 4, 1, 5], 2));
