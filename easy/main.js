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

// 13) Given an integer n, return true if it is a power of four. Otherwise, return false.
// An integer n is a power of four, if there exists an integer x such that n == 4x.
// Input: n = 16
// Output: true

function isPowerOfFour(num) {
  if (num <= 0) return false;
  while (num % 4 === 0) {
    num /= 4;
  }
  return num === 1;
}
// console.log(isPowerOfFour(16));

// 14) Given an array of integers nums which is sorted in ascending order, and an integer target,
//  write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

function search(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] === target) return mid;
    if (array[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
// console.log(search([-1, 0, 3, 5, 9, 12], 9));

// 15) Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.
// Input: s = "Hello"
// Output: "hello"

function toLowerCase(str) {
  return str.toLowerCase();
}
// console.log(toLowerCase("Hello"));

// 16) You are given an integer array nums where the largest integer is unique.
// Determine whether the largest element in the array is at least twice as much as every other number in the array.
// If it is, return the index of the largest element, or return -1 otherwise.
// Input: nums = [3,6,1,0]
// Output: 1
// Explanation: 6 is the largest integer.
// For every other number in the array x, 6 is at least twice as big as x.
// The index of value 6 is 1, so we return 1.

function dominantIndex(nums) {
  const maxNum = Math.max(...nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== maxNum && maxNum < nums[i] * 2) {
      return -1;
    }
  }
  return nums.indexOf(maxNum);
}
// console.log(dominantIndex([1, 2, 3, 4]));

// 17) Given an integer array nums, move all the even integers at the beginning of the array
// followed by all the odd integers. Return any array that satisfies this condition.
// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

function sortArrayByParity(array) {
  return array.sort((a, b) => {
    return (a % 2) - (b % 2);
  });
}
// console.log(sortArrayByParity([3, 1, 2, 4]));

// 18) Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".
// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

function defangIPaddr(str) {
  return str.replace(/\./g, "[.]");
}
// console.log(defangIPaddr("1.1.1.1"));

// 19) Given an object or an array, return if it is empty.
// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.
// Input: obj = {"x": 5, "y": 42}
// Output: false
// Explanation: The object has 2 key-value pairs so it is not empty.

function isEmpty(obj) {
  return !Object.keys(obj).length;
}
// console.log(isEmpty({ x: 5, y: 42 }));

// 20) Given a positive integer millis, write an asynchronous function
// that sleeps for millis milliseconds. It can resolve any value.
// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
// console.log(Date.now() - t); // 100
// });

async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

// let t = Date.now();
// sleep(200).then(() => {
//   console.log(Date.now() - t);
// });

// 21) Given an array arr and a chunk size size, return a chunked array.
// A chunked array contains the original elements in arr, but consists of subarrays each of length size.
// The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.
// Please solve it without using lodash's _.chunk function.
// Input: arr = [1,2,3,4,5], size = 1
// Output: [[1],[2],[3],[4],[5]]
// Explanation: The arr has been split into subarrays each with 1 element.

function chunk(array, size) {
  let result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}
// console.log(chunk([1, 2, 3, 4, 5], 1));

// 22) Write a function argumentsLength that returns the count of arguments passed to it.
// Input: args = [{}, null, "3"]
// Output: 3
// Explanation:
// argumentsLength({}, null, "3"); // 3
// Three values were passed to the function so it should return 3.

function argumentsLength(...arg) {
  return arg.length;
}
// console.log(argumentsLength({}, null, "3"));

// 23) Write a function expect that helps developers test their code. It should take in any value val and return an object
// with the following two functions.
// toBe(val) accepts another value and returns true if the two values === each other.
// If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other.
// If they are equal, it should throw an error "Equal".

function expect(val) {
  return {
    toBe: function (expected) {
      if (val === expected) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (expected) {
      if (val !== expected) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
}

// usage ;)
// try {
//   console.log(expect(5).toBe(null));
// } catch (error) {
//   console.log({ error: error.message });
// }
// try {
//   console.log(expect(5).notToBe(5));
// } catch (error) {
//   console.log({ error: error.message });
// }

// 24) Write a function createHelloWorld. It should return a new function that always returns "Hello World"
// Input: args = []
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f(); // "Hello World"
// The function returned by createHelloWorld should always return "Hello World".

function createHelloWorld() {
  return function () {
    return "Hello World";
  };
}
// const f = createHelloWorld();
// console.log(f({}, null, 42));

// 25) You are given a large integer represented as an integer array digits,
// where each digits[i] is the ith digit of the integer. The digits are ordered
// from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

function plusOne(array) {
  let newArray = array.slice();

  for (let i = newArray.length - 1; i >= 0; i--) {
    if (newArray[i] < 9) {
      newArray[i]++;
      return newArray;
    }
    newArray[i] = 0;
  }

  newArray.unshift(1);
  return newArray;
}
// console.log(plusOne([1, 2, 3]));
// console.log(plusOne([9]));

// 26) A self-dividing number is a number that is divisible by every digit it contains.
// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// A self-dividing number is not allowed to contain the digit zero.
// Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right] (both inclusive).
// Input: (left = 1), (right = 22);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22];

function selfDividingNumbers(left, right) {
  let res = [];
  for (let i = left; i <= right; i++) {
    let num = i;
    let isSelfDividing = true;

    while (num > 0) {
      let digit = num % 10;
      if (digit === 0 || i % digit !== 0) {
        isSelfDividing = false;
        break;
      }
      num = Math.floor(num / 10);
    }
    if (isSelfDividing) {
      res.push(i);
    }
  }
  return res;
}

// console.log(selfDividingNumbers(1, 22));

// 27) You are given a positive integer num consisting only of digits 6 and 9.
// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).
// Input: num = 9669
// Output: 9969
// Explanation:
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.

// Changing the fourth digit results in 9666.
// The maximum number is 9969.

function maximum69Number(num) {
  let strNum = num.toString();
  let maxNum = num;
  for (let i = 0; i < strNum.length; i++) {
    if (strNum[i] === "6") {
      let newStr = strNum.slice(0, i) + "9" + strNum.slice(i + 1);
      let newNum = parseInt(newStr);
      maxNum = Math.max(maxNum, newNum);
    }
  }
  return maxNum;
}
// console.log(maximum69Number(6669));

// 28) You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.
// Return the sum of all the unique elements of nums.
// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.

function sumOfUnique(array) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      obj[array[i]]++;
    } else {
      obj[array[i]] = 1;
    }
  }
  let newObj = Object.keys(obj)
    .filter((key) => obj[key] == 1)
    .map(Number);
  return newObj.reduce((a, b) => a + b, 0);
}
// console.log(sumOfUnique([1, 2, 3, 2]));

// 29) Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.
// An alphanumeric string is a string consisting of lowercase English letters and digits.
// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.

function secondHighest(str) {
  let strSplit = str.split("").map(Number);
  let numElem = strSplit.filter((el) => !isNaN(el));

  let uniqueElem = [];
  for (let i = 0; i < numElem.length; i++) {
    if (!uniqueElem.includes(numElem[i])) {
      uniqueElem.push(numElem[i]);
    }
  }

  if (uniqueElem.length < 2) {
    return -1;
  }

  uniqueElem.sort((a, b) => b - a);
  return uniqueElem[1];
}
// console.log(secondHighest("dfa12321afd"));

// 30) There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has,
// and an integer extraCandies, denoting the number of extra candies that you have.
// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid
// all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.
// Note that multiple kids can have the greatest number of candies.
// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true]
// Explanation: If you give all extraCandies to:
// - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
// - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
// - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
// - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.

function kidsWithCandies(array, num) {
  let res = [];
  let maxElem = Math.max(...array);
  for (let i = 0; i < array.length; i++) {
    res.push(array[i] + num >= maxElem);
  }
  return res;
}
// console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));

// 31) The power of the string is the maximum length of a non-empty substring that contains only one unique character.
// Given a string s, return the power of s.
// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.

function maxPower(str) {
  let strSplit = str.split("");
  let cnt = 1;
  let maxElem = 1;
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i] === strSplit[i + 1]) {
      cnt++;
    } else {
      maxElem = Math.max(maxElem, cnt);
      cnt = 1;
    }
  }
  return maxElem;
}
// console.log(maxPower("leetcode"))

// 32) Given two integer arrays startTime and endTime and given an integer queryTime.
// The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].
// Return the number of students doing their homework at time queryTime. More formally,
// return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.
// Input: startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
// Output: 1
// Explanation: We have 3 students where:
// The first student started doing homework at time 1 and finished at time 3 and wasn't doing anything at time 4.
// The second student started doing homework at time 2 and finished at time 2 and also wasn't doing anything at time 4.
// The third student started doing homework at time 3 and finished at time 7 and was the only student doing homework at time 4.

function busyStudent(startTime, endTime, queryTime) {
  let cnt = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
      cnt++;
    }
  }
  return cnt;
}
// console.log(busyStudent([1, 2, 3], [3, 2, 7], 4));

// 33) Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.
// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

function numIdenticalPairs(array) {
  let cnt = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j] && i < j) {
        cnt++;
      }
    }
  }
  return cnt;
}
// console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));

// 34) Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).
// Input: low = 3, high = 7
// Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].

function countOdds(low, high) {
  let cnt = 0;
  for (let i = low; i <= high; i++) {
    if (i % 2 === 1) {
      cnt++;
    }
  }
  return cnt;
}
// console.log(countOdds(3, 7));

// 35) You are given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
// Return the shuffled string.
// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

function restoreString(str, ind) {
  let strSplit = str.split("");
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res += strSplit[ind.indexOf(i)];
  }
  return res;
}
// console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));

// 36) Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
// Return the kth positive integer that is missing from this array.
// Input: arr = [2,3,4,7,11], k = 5
// Output: 9
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.

function findKthPositive(array, k) {
  let res = [];
  for (let i = 1; i < array[0]; i++) {
    res.push(i);
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] - array[i] !== 1) {
      for (let j = array[i] + 1; j < array[i + 1]; j++) {
        res.push(j);
      }
    }
  }

  let last = array[array.length - 1];
  while (res.length < k) {
    res.push(last + 1);
    last++;
  }
  return res[k - 1];
}
// console.log(findKthPositive([2, 3, 4, 7, 11], 5));

// 37) Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.
// Input: arr = [2,6,4,1]
// Output: false
// Explanation: There are no three consecutive odds.

function threeConsecutiveOdds(array) {
  for (let i = 0; i < array.length - 2; i++) {
    if (array[i] % 2 == 1 && array[i + 1] % 2 == 1 && array[i + 2] % 2 == 1) {
      return true;
    }
  }
  return false;
}
// console.log(threeConsecutiveOdds([2, 6, 4, 1]));

// 38) Given an integer n, add a dot (".") as the thousands separator and return it in string format.
// Input: n = 1234
// Output: "1.234"

function thousandSeparator(num) {
  let str = num.toString();
  let strSplit = str.split("");
  let res = [];
  let cnt = 0;
  for (let i = strSplit.length - 1; i >= 0; i--) {
    res.push(strSplit[i]);
    cnt++;
    if (cnt === 3 && i !== 0) {
      res.push(".");
      cnt = 0;
    }
  }
  return res.reverse().join("");
}
// console.log(thousandSeparator(1234));

// 39) You are given a string s of even length. Split this string into two halves of equal lengths,
// and let a be the first half and b be the second half.
// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U').
// Notice that s contains uppercase and lowercase letters. Return true if a and b are alike. Otherwise, return false.
// Input: s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

function halvesAreAlike(str) {
  let devide = str.substring(str.length / 2);
  let left = str.substring(0, str.length / 2);
  let cnt1 = 0;
  let cnt2 = 0;
  const vowels = "aeiouAEIOU";
  for (let i = 0; i < left.length; i++) {
    if (vowels.includes(left[i])) {
      cnt1++;
    }
  }
  for (let i = 0; i < devide.length; i++) {
    if (vowels.includes(devide[i])) {
      cnt2++;
    }
  }

  return cnt1 === cnt2;
}
// console.log(halvesAreAlike("textbook"));

// 40) A sentence is a list of words that are separated by a single space with no leading
//  or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).
// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it
// contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.
// Input: s = "Hello how are you Contestant", k = 4
// Output: "Hello how are you"
// Explanation:
// The words in s are ["Hello", "how" "are", "you", "Contestant"].
// The first 4 words are ["Hello", "how", "are", "you"].
// Hence, you should return "Hello how are you".

function truncateSentence(str, k) {
  let res = [];
  let strSplit = str.split(" ");
  for (let i = 0; i < k; i++) {
    res.push(strSplit[i]);
  }
  return res.join(" ");
}
// console.log(truncateSentence("Hello how are you Contestant", 4));

// 41) A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
// Each word consists of lowercase and uppercase English letters.
// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.
// For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.
// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.

function sortSentence(str) {
  let strSplit = str.split(" ");
  let res = [];
  for (let i = 0; i < strSplit.length; i++) {
    let indStr = strSplit[i]
      .split("")
      .filter((el) => !isNaN(el))
      .join("");
    let index = Number(indStr);
    res.push({ word: strSplit[i], index: index });
  }
  res.sort((a, b) => a.index - b.index);
  return res
    .map((el) => {
      return el.word.slice(0, el.word.length - 1);
    })
    .join(" ");
}
// console.log(sortSentence("is2 sentence4 This1 a3"));

// 42) You are given a string num, representing a large integer. Return the largest-valued odd integer
// (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.
// A substring is a contiguous sequence of characters within a string.
// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.

function largestOddNumber(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    if (parseInt(str[i]) % 2 === 1) {
      return str.slice(0, i + 1);
    }
  }
  return "";
}
// console.log(largestOddNumber("10133890"));

// 43) Given an integer array nums of length n, you want to create an array ans of length
// 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
// Specifically, ans is the concatenation of two nums arrays. Return the array ans.
// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]

function getConcatenation(array) {
  let newArray = [];
  let secondArray = array;
  newArray = secondArray.concat(array);
  return newArray;
}
// console.log(getConcatenation([1, 2, 1]));

// 44) Given a 0-indexed string word and a character ch, reverse the segment of word that
// starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word,
// do nothing. For example, if word = "abcdefd" and ch = "d", then you should reverse the segment
// that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd". Return the resulting string.
// Input: word = "abcdefd", ch = "d"
// Output: "dcbaefd"
// Explanation: The first occurrence of "d" is at index 3.
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".

function reversePrefix(word, ch) {
  let index = word.indexOf(ch);
  if (index === -1) return word;
  let part1 = word.slice(0, index + 1);
  let part2 = word.slice(index + 1);
  let reversedPart1 = part1.split("").reverse().join("");
  return reversedPart1 + part2;
}
// console.log(reversePrefix("abcdefd", "d"));

// 45) Given a 0-indexed integer array nums of size n, find the maximum difference between nums[i]
// and nums[j] (i.e., nums[j] - nums[i]), such that 0 <= i < j < n and nums[i] < nums[j].
// Return the maximum difference. If no such i and j exists, return -1.
// Input: nums = [7,1,5,4]
// Output: 4
// Explanation:
// The maximum difference occurs with i = 1 and j = 2, nums[j] - nums[i] = 5 - 1 = 4.
// Note that with i = 1 and j = 0, the difference nums[j] - nums[i] = 7 - 1 = 6, but i > j, so it is not valid.

function maximumDifference(nums) {
  let res = [];
  let minElem = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > minElem) {
      res.push(nums[i] - minElem);
    }
    minElem = Math.min(minElem, nums[i]);
  }
  return res.length > 0 ? Math.max(...res) : -1;
}
// console.log(maximumDifference([7, 1, 5, 4]));

// 46) A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
// You are given an array of strings sentences, where each sentences[i] represents a single sentence.
// Return the maximum number of words that appear in a single sentence.
// Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// Output: 6
// Explanation:
// - The first sentence, "alice and bob love leetcode", has 5 words in total.
// - The second sentence, "i think so too", has 4 words in total.
// - The third sentence, "this is great thanks very much", has 6 words in total.
// Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.

function mostWordsFound(array) {
  let maxLength = 0;
  for (let i = 0; i < array.length; i++) {
    const wordCnt = array[i].split(" ").length;
    maxLength = Math.max(maxLength, wordCnt);
  }
  return maxLength;
}
// console.log(
//   mostWordsFound([
//     "alice and bob love leetcode",
//     "i think so too",
//     "this is great thanks very much",
//   ])
// );

// 47) Reversing an integer means to reverse all its digits.
// For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.
// Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2.
// Return true if reversed2 equals num. Otherwise return false.
// Input: num = 526
// Output: true
// Explanation: Reverse num to get 625, then reverse 625 to get 526, which equals num.

function isSameAfterReversals(num) {
  function reverseNum(n) {
    let reversed = 0;
    while (n > 0) {
      reversed = reversed * 10 + (n % 10);
      n = Math.floor(n / 10);
    }
    return reversed;
  }
  const reversed1 = reverseNum(num);
  const reversed2 = reverseNum(reversed1);
  return reversed2 === num;
}
// console.log(isSameAfterReversals(526));

// 48) Given a string s consisting of only the characters 'a' and 'b', return true if every 'a'
// appears before every 'b' in the string. Otherwise, return false.
// Input: s = "aaabbb"
// Output: true
// Explanation:
// The 'a's are at indices 0, 1, and 2, while the 'b's are at indices 3, 4, and 5.
// Hence, every 'a' appears before every 'b' and we return true.

function checkString(str) {
  let strSplit = str.split("");
  let firstB = strSplit.indexOf("b");
  if (firstB == -1) {
    return true;
  }
  for (let i = firstB; i < strSplit.length; i++) {
    if (strSplit[i] === "a") {
      return false;
    }
  }
  return true;
}
// console.log(checkString("abab"));

// 49) You are given a string title consisting of one or more words separated by a single space,
//  where each word consists of English letters. Capitalize the string by changing the capitalization of each word such that:
// If the length of the word is 1 or 2 letters, change all letters to lowercase.
// Otherwise, change the first letter to uppercase and the remaining letters to lowercase.
// Return the capitalized title.
// Input: title = "First leTTeR of EACH Word"
// Output: "First Letter of Each Word"
// Explanation:
// The word "of" has length 2, so it is all lowercase.
// The remaining words have a length of at least 3, so the first letter of each 
// remaining word is uppercase, and the remaining letters are lowercase

function capitalizeTitle(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((el) => {
      if (el.length > 2) {
        return el.charAt(0).toUpperCase() + el.slice(1);
      }
      return el;
    })
    .join(" ");
}
console.log(capitalizeTitle("First leTTeR of EACH Word"));
