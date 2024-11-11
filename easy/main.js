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

