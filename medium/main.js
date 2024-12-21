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
      .pop(),
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
        .split('')
        .map(Number)
        .reduce((a, b) => a + b, 0),
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
    let temp = '';
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
    let key = array[i].toLowerCase().split('').sort().join('');
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
  let words = str.split(' ').filter((word) => word !== '');
  let reversedWords = words.reverse();
  return reversedWords.join(' ');
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
    let next = Math.min(uglyNumbers[byTwo] * 2, uglyNumbers[byThree] * 3, uglyNumbers[byFive] * 5);
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
    maxDiff = Math.max(maxDiff, Math.abs(maxElem - curMin), Math.abs(curMax - minElem));
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

// 21) You are given a sorted array consisting of only integers where every element appears
// exactly twice, except for one element which appears exactly once.
// Return the single element that appears only once.
// Your solution must run in O(log n) time and O(1) space.
// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2

function singleNonDuplicate(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1] && array[i] !== array[i - 1]) {
      return array[i];
    }
  }
}
// console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));

// 22) Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c
// Input: c = 5
// Output: true
// Explanation: 1 * 1 + 2 * 2 = 5

function judgeSquareSum(n) {
  let left = 0;
  let right = Math.floor(Math.sqrt(n));
  while (left <= right) {
    const sum = left * left + right * right;
    if (sum === n) {
      return true;
    }
    if (sum < n) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}
// console.log(judgeSquareSum(5));

// 23) Given two integers a and b, return any string s such that:
// s has length a + b and contains exactly a 'a' letters, and exactly b 'b' letters,
// The substring 'aaa' does not occur in s, and
// The substring 'bbb' does not occur in s.
// Input: a = 1, b = 2
// Output: "abb"
// Explanation: "abb", "bab" and "bba" are all correct answers.

function strWithout3a3b(a, b) {
  let result = [];
  let length = a + b;
  for (let i = 0; i < length; i++) {
    if (b >= a) {
      if (b > 0 && result.slice(-2).join('') !== 'bb') {
        result.push('b');
        b--;
      } else if (a > 0) {
        result.push('a');
        a--;
      }
    } else {
      if (a > 0 && result.slice(-2).join('') !== 'aa') {
        result.push('a');
        a--;
      } else if (b > 0) {
        result.push('b');
        b--;
      }
    }
  }
  return result.join('');
}
// console.log(strWithout3a3b(1, 2));

// 24) The power of an integer x is defined as the number of steps needed to transform x into 1 using the following steps:
// if x is even then x = x / 2
// if x is odd then x = 3 * x + 1
// For example, the power of x = 3 is 7 because 3 needs 7 steps to become 1 (3 --> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1).
// Given three integers lo, hi and k. The task is to sort all integers in the interval [lo, hi] by the power value in ascending order,
//  if two or more integers have the same power value sort them by ascending order.
// Return the kth integer in the range [lo, hi] sorted by the power value.
// Notice that for any integer x (lo <= x <= hi) it is guaranteed that x will transform into 1 using
// these steps and that the power of x is will fit in a 32-bit signed integer.
// Input: lo = 12, hi = 15, k = 2
// Output: 13
// Explanation: The power of 12 is 9 (12 --> 6 --> 3 --> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1)
// The power of 13 is 9
// The power of 14 is 17
// The power of 15 is 17
// The interval sorted by the power value [12,13,14,15]. For k = 2 answer is the second element which is 13.
// Notice that 12 and 13 have the same power value and we sorted them in ascending order. Same for 14 and 15.

function getKth(lo, hi, k) {
  let res = [];
  for (let i = lo; i <= hi; i++) {
    let currElem = i;
    let povValue = 0;
    while (currElem !== 1) {
      if (currElem % 2 === 0) {
        currElem /= 2;
      } else {
        currElem = currElem * 3 + 1;
      }
      povValue++;
    }
    res.push({ num: i, steps: povValue });
  }
  res.sort((a, b) => {
    if (a.steps !== b.steps) {
      return a.steps - b.steps;
    }
    return a.num - b.num;
  });
  return res[k - 1].num;
}
// console.log(getKth(12, 15, 2));

// 25) Given an integer array nums, return the sum of divisors of the integers in that array that have exactly four divisors.
// If there is no such integer in the array, return 0.
// Input: nums = [21,4,7]
// Output: 32
// Explanation:
// 21 has 4 divisors: 1, 3, 7, 21
// 4 has 3 divisors: 1, 2, 4
// 7 has 2 divisors: 1, 7
// The answer is the sum of divisors of 21 only.

function sumFourDivisors(nums) {
  let res = 0;
  for (let j = 0; j < nums.length; j++) {
    let num = nums[j];
    let count = 0;
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        count++;
        sum += i;
      }
      if (count > 4) break;
    }
    if (count === 4) {
      res += sum;
    }
  }
  return res;
}
// console.log(sumFourDivisors([21, 4, 7]));

// 26) You are given two positive integers n and k. A factor of an integer n is defined as an integer i where n % i == 0.
// Consider a list of all factors of n sorted in ascending order, return the kth factor in this list or
// return -1 if n has less than k factors.
// Input: n = 12, k = 3
// Output: 3
// Explanation: Factors list is [1, 2, 3, 4, 6, 12], the 3rd factor is 3.

function kthFactor(n, k) {
  let array = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      array.push(i);
    }
  }
  return array.length >= k ? array[k - 1] : -1;
}
// console.log(kthFactor(12, 3));

// 27) You are given an integer array nums. A number x is lonely when it appears only once, and no adjacent
//  numbers (i.e. x + 1 and x - 1) appear in the array. Return all lonely numbers in nums. You may return the answer in any order.
// Input: nums = [10,6,5,8]
// Output: [10,8]
// Explanation:
// - 10 is a lonely number since it appears exactly once and 9 and 11 does not appear in nums.
// - 8 is a lonely number since it appears exactly once and 7 and 9 does not appear in nums.
// - 5 is not a lonely number since 6 appears in nums and vice versa.
// Hence, the lonely numbers in nums are [10, 8].
// Note that [8, 10] may also be returned.

function findLonely(array) {
  let res = [];
  let cnt = {};
  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    cnt[el] = (cnt[el] || 0) + 1;
  }
  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    if (cnt[el] === 1 && !cnt[el - 1] && !cnt[el + 1]) {
      res.push(el);
    }
  }
  return res;
}
// console.log(findLonely([10, 6, 5, 8]));

// 28) Given an integer num, return three consecutive integers (as a sorted array) that sum to num.
// If num cannot be expressed as the sum of three consecutive integers, return an empty array.
// Input: num = 33
// Output: [10,11,12]
// Explanation: 33 can be expressed as 10 + 11 + 12 = 33.
// 10, 11, 12 are 3 consecutive integers, so we return [10, 11, 12].

function sumOfThree(num) {
  if (num % 3 != 0) {
    return [];
  }
  let mid = num / 3;
  return [mid - 1, mid, mid + 1];
}
// console.log(sumOfThree(33));

// 29) Given an integer array nums, find the subarray with the largest sum, and return its sum.
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

function maxSubArray(array) {
  let maxSum = array[0];
  let currSum = array[0];
  for (let i = 1; i < array.length; i++) {
    currSum = Math.max(array[i], currSum + array[i]);
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// 30) Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

function topKFrequent(array, k) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (obj[num] === undefined) {
      obj[num] = 1;
    } else {
      obj[num]++;
    }
  }
  let sortedArr = Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k);
  return sortedArr.map((el) => Number(el[0]));
}
// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

// 31) Given a string s, return the longest palindromic substring in s.
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

function longestPalindrome(str) {
  let maxLength = 0;
  let res = '';
  function isPalindrome(substring) {
    for (let i = 0; i < substring.length; i++) {
      if (substring[i] !== substring[substring.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let substring = str.slice(i, j);
      if (substring.length <= maxLength) continue;
      if (isPalindrome(substring)) {
        maxLength = substring.length;
        res = substring;
      }
    }
  }
  return res;
}
// console.log(longestPalindrome('babad'));

// 32) Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
// Return the answer in any order. A mapping of digits to letters (just like on the telephone buttons) is given below.
// Note that 1 does not map to any letters.
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

function letterCombinations(digits) {
  const digitToLetters = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  let res = [''];
  if (digits.length === 0) {
    return [];
  }

  for (let i = 0; i < digits.length; i++) {
    const letters = digitToLetters[digits[i]];
    const temp = [];
    for (let j = 0; j < letters.length; j++) {
      for (let k = 0; k < res.length; k++) {
        temp.push(res[k] + letters[j]);
      }
    }
    res = temp;
  }
  return res;
}
// console.log(letterCombinations('23'));

// 33) Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
// Input: nums = [3,2,3]
// Output: [3]

function majorityElement(array) {
  let arrayLength = array.length;
  let cnt = 0;
  let res = [];
  for (let i = 0; i < arrayLength; i++) {
    cnt = 1;
    for (let j = i + 1; j < arrayLength; j++) {
      if (array[i] === array[j]) {
        cnt++;
      }
    }
    if (cnt > arrayLength / 3 && !res.includes(array[i])) {
      res.push(array[i]);
    }
    cnt = 0;
  }
  return res;
}
// console.log(majorityElement([3, 2, 3]));
