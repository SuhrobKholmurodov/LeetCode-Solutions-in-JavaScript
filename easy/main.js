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
// console.log(capitalizeTitle("First leTTeR of EACH Word"));

// 50) A string s can be partitioned into groups of size k using the following procedure:
// The first group consists of the first k characters of the string, the second group
// consists of the next k characters of the string, and so on. Each character can be a part of exactly one group.
// For the last group, if the string does not have k characters remaining, a character fill is used to complete the group.
// Note that the partition is done so that after removing the fill character from the last group (if it exists)
// and concatenating all the groups in order, the resultant string should be s.
// Given the string s, the size of each group k and the character fill, return a string array denoting the
// composition of every group s has been divided into, using the above procedure.
// Input: s = "abcdefghi", k = 3, fill = "x"
// Output: ["abc","def","ghi"]
// Explanation:
// The first 3 characters "abc" form the first group.
// The next 3 characters "def" form the second group.
// The last 3 characters "ghi" form the third group.
// Since all groups can be completely filled by characters from the string, we do not need to use fill.
// Thus, the groups formed are "abc", "def", and "ghi".

function divideString(str, k, fill) {
  let res = [];
  let strSplit = str.split("");
  for (let i = 0; i < strSplit.length; i += k) {
    res.push(strSplit.slice(i, k + i).join(""));
  }
  if (res[res.length - 1].length < k) {
    while (res[res.length - 1].length < k) {
      res[res.length - 1] += fill;
    }
  }
  return res;
}
// console.log(divideString("abcdefghi", 3, "x"));

// 51) Given an integer array nums, return the number of elements that have both a strictly
// smaller and a strictly greater element appear in nums.
// Input: nums = [11,7,2,15]
// Output: 2
// Explanation: The element 7 has the element 2 strictly smaller than it and the element 11 strictly greater than it.
// Element 11 has element 7 strictly smaller than it and element 15 strictly greater than it.
// In total there are 2 elements having both a strictly smaller and a strictly greater element appear in nums.

function countElements(array) {
  let cnt = 0;
  let maxElem = Math.max(...array);
  let minElem = Math.min(...array);
  for (let i = 0; i < array.length; i++) {
    if (array[i] < maxElem && array[i] > minElem) {
      cnt++;
    }
  }
  return cnt;
}
// console.log(countElements([11, 7, 2, 15]));

// 52) Given a positive integer num, return the number of positive integers less than or equal to num whose digit sums are even.
// The digit sum of a positive integer is the sum of all its digits.
// Input: num = 4
// Output: 2
// Explanation:
// The only integers less than or equal to 4 whose digit sums are even are 2 and 4.

function countEven(num) {
  let cnt = 0;
  for (let i = 1; i <= num; i++) {
    let digitSum = 0;
    let curNum = i;
    while (curNum > 0) {
      digitSum += curNum % 10;
      curNum = Math.floor(curNum / 10);
    }
    if (digitSum % 2 === 0) {
      cnt++;
    }
  }
  return cnt;
}
// console.log(countEven(30));

// 53) You are given an array of strings words and a string pref.
// Return the number of strings in words that contain pref as a prefix.
// A prefix of a string s is any leading contiguous substring of s.
// Input: words = ["pay","attention","practice","attend"], pref = "at"
// Output: 2
// Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".

function prefixCount(array, pref) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].slice(0, pref.length) == pref) {
      res.push(array[i]);
    }
  }
  return res.length;
}
// console.log(prefixCount(["pay", "attention", "practice", "attend"], "at"));

// 54) Given two integers num1 and num2, return the sum of the two integers.
// Input: num1 = 12, num2 = 5
// Output: 17
// Explanation: num1 is 12, num2 is 5, and their sum is 12 + 5 = 17, so 17 is returned.

function sum(num1, num2) {
  return num1 + num2;
}
// console.log(sum(12, 5));

// 55) Given an integer array nums of size n, return the number with the value closest to 0 in nums.
// If there are multiple answers, return the number with the largest value.
// Input: nums = [-4,-2,1,4,8]
// Output: 1
// Explanation:
// The distance from -4 to 0 is |-4| = 4.
// The distance from -2 to 0 is |-2| = 2.
// The distance from 1 to 0 is |1| = 1.
// The distance from 4 to 0 is |4| = 4.
// The distance from 8 to 0 is |8| = 8.
// Thus, the closest number to 0 in the array is 1.

function findClosestNumber(array) {
  let minElem = array[0];
  for (let i = 0; i < array.length; i++) {
    let moduleElem = Math.abs(array[i]);
    let moduleClosest = Math.abs(minElem);
    if (
      moduleElem < moduleClosest ||
      (moduleElem === moduleClosest && array[i] > minElem)
    ) {
      minElem = array[i];
    }
  }
  return minElem;
}
// console.log(findClosestNumber([-4, -2, 1, 4, 8]));

// 56) You are given a string s consisting of digits and an integer k.
// A round can be completed if the length of s is greater than k. In one round, do the following:
// Divide s into consecutive groups of size k such that the first k characters are in the first group,
// the next k characters are in the second group, and so on. Note that the size of the last group can be smaller than k.
// Replace each group of s with a string representing the sum of all its digits. For example,
// "346" is replaced with "13" because 3 + 4 + 6 = 13. Merge consecutive groups together to form a new string.
// If the length of the string is greater than k, repeat from step 1. Return s after all rounds have been completed.
// Input: s = "11111222223", k = 3
// Output: "135"
// Explanation:
// - For the first round, we divide s into groups of size 3: "111", "112", "222", and "23".
// ​​​​​Then we calculate the digit sum of each group: 1 + 1 + 1 = 3, 1 + 1 + 2 = 4, 2 + 2 + 2 = 6, and 2 + 3 = 5.
// So, s becomes "3" + "4" + "6" + "5" = "3465" after the first round.
// - For the second round, we divide s into "346" and "5".
// Then we calculate the digit sum of each group: 3 + 4 + 6 = 13, 5 = 5.
// So, s becomes "13" + "5" = "135" after second round.
// Now, s.length <= k, so we return "135" as the answer.

function digitSum(str, k) {
  let currentStr = str;
  while (currentStr.length > k) {
    let resArray = [];
    for (let i = 0; i < currentStr.length; i += k) {
      let group = currentStr.slice(i, i + k);
      let sum = group
        .split("")
        .reduce((acc, digit) => acc + parseInt(digit), 0);
      resArray.push(sum.toString());
    }
    currentStr = resArray.join("");
  }
  return currentStr;
}
// console.log(digitSum("11111222223", 3));

// 57) You are given a string array words and a string s, where words[i] and s comprise only of lowercase English letters.
// Return the number of strings in words that are a prefix of s. A prefix of a string is a substring
// that occurs at the beginning of the string. A substring is a contiguous sequence of characters within a string.
// Input: words = ["a","b","c","ab","bc","abc"], s = "abc"
// Output: 3
// Explanation:
// The strings in words which are a prefix of s = "abc" are:
// "a", "ab", and "abc".
// Thus the number of strings in words which are a prefix of s is 3.

function countPrefixes(array, str) {
  let cnt = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == str.slice(0, array[i].length)) {
      cnt++;
    }
  }
  return cnt;
}
// console.log(countPrefixes(["a", "b", "c", "ab", "bc", "abc"], "abc"));

// 58) Given a string s and a character letter, return the percentage of characters in s that
// equal letter rounded down to the nearest whole percent.
// Input: s = "foobar", letter = "o"
// Output: 33
// Explanation:
// The percentage of characters in s that equal the letter 'o' is 2 / 6 * 100% = 33% when rounded down, so we return 33.

function percentageLetter(str, letter) {
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      cnt++;
    }
  }
  let rounded = (cnt / str.length) * 100;
  return Math.floor(rounded);
}
// console.log(percentageLetter("foobar", "o"));

// 59) A password is said to be strong if it satisfies all the following criteria:
// It has at least 8 characters.
// It contains at least one lowercase letter.
// It contains at least one uppercase letter.
// It contains at least one digit.
// It contains at least one special character. The special characters are the characters in the following string: "!@#$%^&*()-+".
// It does not contain 2 of the same character in adjacent positions (i.e., "aab" violates this condition, but "aba" does not).
// Given a string password, return true if it is a strong password. Otherwise, return false.
// Input: password = "IloveLe3tcode!"
// Output: true
// Explanation: The password meets all the requirements. Therefore, we return true.

function strongPasswordCheckerII(str) {
  if (str.length < 8) {
    return false;
  }
  let hasLowercase = false;
  let hasUppercase = false;
  let hasDigit = false;
  let hasSpecialChar = false;
  const specialChars = "!@#$%^&*()-+";
  for (let i = 0; i < str.length; i++) {
    const currElem = str[i];
    if (currElem >= "a" && currElem <= "z") {
      hasLowercase = true;
    }
    if (currElem >= "A" && currElem <= "Z") {
      hasUppercase = true;
    }
    if (currElem >= "0" && currElem <= "9") {
      hasDigit = true;
    }
    if (specialChars.includes(currElem)) {
      hasSpecialChar = true;
    }
    if (i > 0 && currElem === str[i - 1]) {
      return false;
    }
  }
  return hasLowercase && hasUppercase && hasDigit && hasSpecialChar;
}
// console.log(strongPasswordCheckerII("IloveLe3tcode!"));

// 60) Given a string s consisting of lowercase English letters, return the first letter to appear twice.
// Note:
// A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
// s will contain at least one letter that appears twice.
// Input: s = "abccbaacz"
// Output: "c"
// Explanation:
// The letter 'a' appears on the indexes 0, 5 and 6.
// The letter 'b' appears on the indexes 1 and 4.
// The letter 'c' appears on the indexes 2, 3 and 7.
// The letter 'z' appears on the index 8.
// The letter 'c' is the first letter to appear twice, because out of all the letters the index of its second occurrence is the smallest.

function repeatedCharacter(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      return str[i];
    }
    obj[str[i]] = true;
  }
  return -1;
}
// console.log(repeatedCharacter("abccbaacz"));

// 61) Given an integer array nums, return the most frequent even element.
// If there is a tie, return the smallest one. If there is no such element, return -1.
// Input: nums = [0,1,2,2,4,4,1]
// Output: 2
// Explanation:
// The even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.
// We return the smallest one, which is 2.

function mostFrequentEven(nums) {
  let maxCount = 0;
  let result = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      let cnt = 0;
      for (let j = 0; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
          cnt++;
        }
      }
      if (cnt > maxCount || (cnt === maxCount && nums[i] < result)) {
        maxCount = cnt;
        result = nums[i];
      }
    }
  }
  return result;
}
// console.log(mostFrequentEven([0, 1, 2, 2, 4, 4, 1]));

// 62) Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.
// Input: n = 5
// Output: 10
// Explanation: The smallest multiple of both 5 and 2 is 10.

function smallestEvenMultiple(num) {
  return num % 2 === 0 ? num : num * 2;
}
// console.log(smallestEvenMultiple(6));

// 63) You are given an array of strings names, and an array heights that consists of
// distinct positive integers. Both arrays are of length n.
// For each index i, names[i] and heights[i] denote the name and height of the ith person.
// Return names sorted in descending order by the people's heights.
// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.

function sortPeople(names, heights) {
  const people = names.map((name, i) => ({
    name: name,
    height: heights[i],
  }));
  people.sort((a, b) => b.height - a.height);
  return people.map((person) => person.name);
}
// console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));

// 64) Given an integer array nums that does not contain any zeros, find the largest
// positive integer k such that -k also exists in the array.
// Return the positive integer k. If there is no such integer, return -1.
// Input: nums = [-1,2,-3,3]
// Output: 3
// Explanation: 3 is the only valid k we can find in the array.

function findMaxK(array) {
  let res = [];
  let sortedArray = array.sort((a, b) => b - a);
  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = i + 1; j < sortedArray.length; j++) {
      if (sortedArray[i] === sortedArray[j] * -1) {
        res.push(sortedArray[i]);
      }
    }
  }
  if (res.length === 0) {
    return -1;
  }
  return Math.max(...res);
}
// console.log(findMaxK([-1, 2, -3, 3]));

// 65) Given an integer array nums of positive integers, return the average value of all even integers that are divisible by 3.
// Note that the average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.
// Input: nums = [1,3,6,10,12,15]
// Output: 9
// Explanation: 6 and 12 are even numbers that are divisible by 3. (6 + 12) / 2 = 9.

function averageValue(array) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0 && array[i] % 3 === 0) {
      res.push(array[i]);
    }
  }
  if (res.length > 0) {
    let sum = res.reduce((a, b) => a + b, 0);
    return Math.floor(sum / res.length);
  }
  return 0;
}
// console.log(averageValue([1, 3, 6, 10, 12, 15]));

// 66) You are given a non-negative floating point number rounded to two decimal places celsius,
// that denotes the temperature in Celsius. You should convert Celsius into Kelvin and Fahrenheit
// and return it as an array ans = [kelvin, fahrenheit]. Return the array ans. Answers within
// 10-5 of the actual answer will be accepted.
// Kelvin = Celsius + 273.15;
// Fahrenheit = Celsius * 1.8 + 32.0;
// Input: celsius = 36.50
// Output: [309.65000,97.70000]
// Explanation: Temperature at 36.50 Celsius converted in Kelvin is 309.65 and converted in Fahrenheit is 97.70.

function convertTemperature(celsius) {
  const kelvin = celsius + 273.15;
  const fahrenheit = celsius * 1.8 + 32.0;
  return [kelvin, fahrenheit];
}
// console.log(convertTemperature(36.5));

// 67) A valid cut in a circle can be:
// A cut that is represented by a straight line that touches two points on the edge of the circle and passes through its center, or
// A cut that is represented by a straight line that touches one point on the edge of the circle and its center.
// Some valid and invalid cuts are shown in the figures below.
// Given the integer n, return the minimum number of cuts needed to divide a circle into n equal slices.
// Input: n = 4
// Output: 2
// Explanation:
// The above figure shows how cutting the circle twice through the middle divides it into 4 equal slices.

function numberOfCuts(num) {
  return num === 1 ? 0 : num % 2 === 0 ? num / 2 : num;
}
// console.log(numberOfCuts(3));

// 68) A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
// For example, "Hello World", "HELLO", "hello world hello world" are all sentences.
// Words consist of only uppercase and lowercase English letters. Uppercase and lowercase English letters are considered different.
// A sentence is circular if:
// The last character of a word is equal to the first character of the next word.
// The last character of the last word is equal to the first character of the first word.
// For example, "leetcode exercises sound delightful", "eetcode", "leetcode eats soul" are all circular sentences. However, "Leetcode is cool", "happy Leetcode", "Leetcode" and "I like Leetcode" are not circular sentences.
// Given a string sentence, return true if it is circular. Otherwise, return false.
// Input: sentence = "leetcode exercises sound delightful"
// Output: true
// Explanation: The words in sentence are ["leetcode", "exercises", "sound", "delightful"].
// - leetcode's last character is equal to exercises's first character.
// - exercises's last character is equal to sound's first character.
// - sound's last character is equal to delightful's first character.
// - delightful's last character is equal to leetcode's first character.
// The sentence is circular.

function isCircularSentence(str) {
  let strSplit = str.split(" ");
  if (strSplit.length === 1) {
    return strSplit[0].slice(-1) === strSplit[0].slice(0, 1);
  }
  for (let i = 0; i < strSplit.length - 1; i++) {
    if (strSplit[i].slice(-1) !== strSplit[i + 1].slice(0, 1)) {
      return false;
    }
  }
  if (strSplit[strSplit.length - 1].slice(-1) !== strSplit[0].slice(0, 1)) {
    return false;
  }
  return true;
}
// console.log(isCircularSentence("Leetcode eisc cool"));

// 69) The value of an alphanumeric string can be defined as:
// The numeric representation of the string in base 10, if it comprises of digits only. The length of the string, otherwise.
// Given an array strs of alphanumeric strings, return the maximum value of any string in strs.
// Input: strs = ["alic3","bob","3","4","00000"]
// Output: 5
// Explanation:
// - "alic3" consists of both letters and digits, so its value is its length, i.e. 5.
// - "bob" consists only of letters, so its value is also its length, i.e. 3.
// - "3" consists only of digits, so its value is its numeric equivalent, i.e. 3.
// - "4" also consists only of digits, so its value is 4.
// - "00000" consists only of digits, so its value is 0.
// Hence, the maximum value is 5, of "alic3".

function maximumValue(str) {
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    let value = isNaN(str[i]) ? str[i].length : parseInt(str[i]);
    max = Math.max(max, value);
  }
  return max;
}
// console.log(maximumValue(["alic3", "bob", "3", "4", "00000"]));

// 70) Given an integer num, return the number of digits in num that divide num.
// An integer val divides nums if nums % val == 0.
// Input: num = 1248
// Output: 4
// Explanation: 1248 is divisible by all of its digits, hence the answer is 4.

function countDigits(num) {
  let cnt = 0;
  let originalNum = num;
  while (num > 0) {
    let digit = num % 10;
    if (digit !== 0 && originalNum % digit === 0) {
      cnt++;
    }
    num = Math.floor(num / 10);
  }
  return cnt;
}
// console.log(countDigits(1248));

// 71) Given an array nums sorted in non-decreasing order, return the maximum between the number
// of positive integers and the number of negative integers. In other words, if the number of positive
// integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
// Note that 0 is neither positive nor negative.
// Input: nums = [-2,-1,-1,1,2,3]
// Output: 3
// Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.

function maximumCount(array) {
  let positiveCnt = 0;
  let negativeCnt = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) positiveCnt++;
    if (array[i] < 0) negativeCnt++;
  }
  return Math.max(positiveCnt, negativeCnt);
}
// console.log(maximumCount([-2, -1, -1, 1, 2, 3]));

// 72) You are given a positive integer array nums.
// The element sum is the sum of all the elements in nums.
// The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
// Return the absolute difference between the element sum and digit sum of nums.
// Note that the absolute difference between two integers x and y is defined as |x - y|.
// Input: nums = [1,15,6,3]
// Output: 9
// Explanation:
// The element sum of nums is 1 + 15 + 6 + 3 = 25.
// The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
// The absolute difference between the element sum and digit sum is |25 - 16| = 9.

function differenceOfSum(nums) {
  let elementSum = nums.reduce((a, b) => a + b, 0);
  let digitSum = nums
    .join("")
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);
  return Math.abs(elementSum - digitSum);
}
// console.log(differenceOfSum([1, 15, 6, 3]));

// 73) Given two integer arrays nums1 and nums2, sorted in non-decreasing order,
// return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.
// Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.
// Input: nums1 = [1,2,3], nums2 = [2,4]
// Output: 2
// Explanation: The smallest element common to both arrays is 2, so we return 2.

function getCommon(array1, array2) {
  let res = [];
  let obj = {};
  for (let i = 0; i < array2.length; i++) {
    obj[array2[i]] = true;
  }
  for (let i = 0; i < array1.length; i++) {
    if (obj[array1[i]]) {
      res.push(array1[i]);
    }
  }
  return res.length > 0 ? Math.min(...res) : -1;
}
// console.log(getCommon([1, 2, 3], [2, 4]));

// 74) You are given a positive integer n. Each digit of n has a sign according to the following rules:
// The most significant digit is assigned a positive sign.
// Each other digit has an opposite sign to its adjacent digits.
// Return the sum of all digits with their corresponding sign.
// Input: n = 521
// Output: 4
// Explanation: (+5) + (-2) + (+1) = 4.

function alternateDigitSum(num) {
  let sum = 0;
  let numSplit = num.toString().split("");
  for (let i = 0; i < numSplit.length; i++) {
    if (i % 2 == 0) {
      sum += numSplit[i] * 1;
    } else {
      sum -= numSplit[i] * 1;
    }
  }
  return sum;
}
// console.log(alternateDigitSum(521));

// 75) Given an array of positive integers nums, return an array answer that consists of
// the digits of each integer in nums after separating them in the same order they appear in nums.
// To separate the digits of an integer is to get all the digits it has in the same order.
// For example, for the integer 10921, the separation of its digits is [1,0,9,2,1]
// Input: nums = [13,25,83,77]
// Output: [1,3,2,5,8,3,7,7]
// Explanation:
// - The separation of 13 is [1,3].
// - The separation of 25 is [2,5].
// - The separation of 83 is [8,3].
// - The separation of 77 is [7,7].
// answer = [1,3,2,5,8,3,7,7]. Note that answer contains the separations in the same order.

function separateDigits(array) {
  let res = "";
  for (let i = 0; i < array.length; i++) {
    res += array[i];
  }
  return res.split("").map(Number);
}
// console.log(separateDigits([13, 25, 83, 77]));

// 76) You are given a 0-indexed integer array nums.
// The concatenation of two numbers is the number formed by concatenating their numerals.
// For example, the concatenation of 15, 49 is 1549.
// The concatenation value of nums is initially equal to 0. Perform this operation until nums becomes empty:
// If there exists more than one number in nums, pick the first element and last element in nums respectively and
// add the value of their concatenation to the concatenation value of nums, then delete the first and last element from nums.
// If one element exists, add its value to the concatenation value of nums, then delete it.
// Return the concatenation value of the nums.
// Input: nums = [7,52,2,4]
// Output: 596
// Explanation: Before performing any operation, nums is [7,52,2,4] and concatenation value is 0.
//  - In the first operation:
// We pick the first element, 7, and the last element, 4.
// Their concatenation is 74, and we add it to the concatenation value, so it becomes equal to 74.
// Then we delete them from nums, so nums becomes equal to [52,2].
//  - In the second operation:
// We pick the first element, 52, and the last element, 2.
// Their concatenation is 522, and we add it to the concatenation value, so it becomes equal to 596.
// Then we delete them from the nums, so nums becomes empty.
// Since the concatenation value is 596 so the answer is 596.

function findTheArrayConcVal(array) {
  let res = [];
  let length = Math.floor(array.length / 2);
  for (let i = 0; i < length; i++) {
    res.push(String(array[i]) + String(array[array.length - 1 - i]));
  }
  if (array.length % 2 !== 0) {
    res.push(String(array[length]));
  }
  return res.map(Number).reduce((a, b) => a + b, 0);
}
// console.log(findTheArrayConcVal([7, 52, 2, 4]));

// 77) You are given a 0-indexed array of string words and two integers left and right.
// A string is called a vowel string if it starts with a vowel character and ends with a
//  vowel character where vowel characters are 'a', 'e', 'i', 'o', and 'u'.
// Return the number of vowel strings words[i] where i belongs to the inclusive range [left, right].
// Input: words = ["are","amy","u"], left = 0, right = 2
// Output: 2
// Explanation:
// - "are" is a vowel string because it starts with 'a' and ends with 'e'.
// - "amy" is not a vowel string because it does not end with a vowel.
// - "u" is a vowel string because it starts with 'u' and ends with 'u'.
// The number of vowel strings in the mentioned range is 2.

function vowelStrings(words, left, right) {
  let cnt = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = left; i <= right; i++) {
    if (
      vowels.includes(words[i][0]) &&
      vowels.includes(
        words[i][words[i].length - 1] ||
          (words[i].length === 1 && vowels.includes(words[i][0]))
      )
    ) {
      cnt++;
    }
  }
  return cnt;
}
// console.log(vowelStrings(["are", "amy", "u"], 0, 2));

// 78) Given two arrays of unique digits nums1 and nums2, return the smallest number that contains at least one digit from each array.
// Input: nums1 = [4,1,3], nums2 = [5,7]
// Output: 15
// Explanation: The number 15 contains the digit 1 from nums1 and the digit 5 from nums2.
// It can be proven that 15 is the smallest number we can have.
function minNumber(array1, array2) {
  let commonDig = array1.filter((el) => array2.includes(el));
  if (commonDig.length > 0) {
    return Math.min(...commonDig);
  }
  let minFromArray1 = Math.min(...array1);
  let minFromArray2 = Math.min(...array2);
  return Math.min(
    minFromArray1 * 10 + minFromArray2,
    minFromArray2 * 10 + minFromArray1
  );
}
// console.log(minNumber([4, 1, 3], [5, 7]));

// 79) Given a positive integer n, find the sum of all integers in the range [1, n] inclusive that are divisible by 3, 5, or 7.
// Return an integer denoting the sum of all numbers in the given range satisfying the constraint.
// Input: n = 7
// Output: 21
// Explanation: Numbers in the range [1, 7] that are divisible by 3, 5, or 7 are 3, 5, 6, 7. The sum of these numbers is 21.

function sumOfMultiples(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
      sum += i;
    }
  }
  return sum;
}
// console.log(sumOfMultiples(7));

// 80) You are given a positive integer arrivalTime denoting the arrival time of a train in hours,
// and another positive integer delayedTime denoting the amount of delay in hours.
// Return the time when the train will arrive at the station.
// Note that the time in this problem is in 24-hours format.
// Input: arrivalTime = 15, delayedTime = 5
// Output: 20
// Explanation: Arrival time of the train was 15:00 hours. It is delayed by 5 hours. Now it will reach at 15+5 = 20 (20:00 hours).

function findDelayedArrivalTime(arrivalTime, delayedTime) {
  return (arrivalTime + delayedTime) % 24;
}
// console.log(findDelayedArrivalTime(15, 5));

// 81) You are given a 0-indexed array of strings details. Each element of details provides
// information about a given passenger compressed into a string of length 15. The system is such that:
// The first ten characters consist of the phone number of passengers.
// The next character denotes the gender of the person.
// The following two characters are used to indicate the age of the person.
// The last two characters determine the seat allotted to that person.
// Return the number of passengers who are strictly more than 60 years old.
// Input: details = ["7868190130M7522","5303914400F9211","9273338290F4010"]
// Output: 2
// Explanation: The passengers at indices 0, 1, and 2 have ages 75, 92, and 40. Thus, there are 2 people who are over 60 years old.

function countSeniors(array) {
  let res = [];
  let cnt = 0;
  for (let i = 0; i < array.length; i++) {
    let newArray = array[i].slice(11, 13);
    res.push(newArray);
  }
  for (let i = 0; i < res.length; i++) {
    if (res[i] > "60") {
      cnt++;
    }
  }
  return cnt;
}
// console.log(countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010"]));

// 82) You are given an integer array prices representing the prices of various chocolates in a store.
// You are also given a single integer money, which represents your initial amount of money.
// You must buy exactly two chocolates in such a way that you still have some non-negative leftover money.
// You would like to minimize the sum of the prices of the two chocolates you buy.
// Return the amount of money you will have leftover after buying the two chocolates.
// If there is no way for you to buy two chocolates without ending up in debt, return money.
// Note that the leftover must be non-negative.
// Input: prices = [3,2,3], money = 3
// Output: 3
// Explanation: You cannot buy 2 chocolates without going in debt, so we return 3

function buyChoco(array, money) {
  array.sort((a, b) => a - b);
  const minSum = array[0] + array[1];
  if (minSum <= money) {
    return money - minSum;
  }
  return money;
}
// console.log(buyChoco([3, 2, 3], 3));

// 83) Given a positive integer num represented as a string, return the integer num without trailing zeros as a string.
// Input: num = "51230100"
// Output: "512301"
// Explanation: Integer "51230100" has 2 trailing zeros, we remove them and return integer "512301".
function removeTrailingZeros(num) {
  return num.replace(/0+$/, "");
}
// console.log(removeTrailingZeros("51230100"));

// 84) A truck has two fuel tanks. You are given two integers, mainTank representing the fuel
// present in the main tank in liters and additionalTank representing the fuel present in the additional tank in liters.
// The truck has a mileage of 10 km per liter. Whenever 5 liters of fuel get used up in the main tank,
// if the additional tank has at least 1 liters of fuel, 1 liters of fuel will be transferred from the additional tank to the main tank.
// Return the maximum distance which can be traveled.
// Note: Injection from the additional tank is not continuous. It happens suddenly and immediately for every 5 liters consumed
// Input: mainTank = 5, additionalTank = 10
// Output: 60
// Explanation:
// After spending 5 litre of fuel, fuel remaining is (5 - 5 + 1) = 1 litre and distance traveled is 50km.
// After spending another 1 litre of fuel, no fuel gets injected in the main tank and the main tank becomes empty.
// Total distance traveled is 60km.

function distanceTraveled(mainTank, additionalTank) {
  let distance = 0;
  while (mainTank > 0) {
    if (mainTank >= 5) {
      distance += 50;
      mainTank -= 5;
      if (additionalTank > 0) {
        mainTank += 1;
        additionalTank -= 1;
      }
    } else {
      distance += mainTank * 10;
      mainTank = 0;
    }
  }
  return distance;
}
// console.log(distanceTraveled(5, 10));

// 85) Given two integers, num and t. A number is achievable if it can become equal to num after applying the following operation:
// Increase or decrease the number by 1, and simultaneously increase or decrease num by 1.
// Return the maximum achievable number after applying the operation at most t times.
// Input: num = 4, t = 1
// Output: 6
// Explanation:
// Apply the following operation once to make the maximum achievable number equal to num:
// Decrease the maximum achievable number by 1, and increase num by 1

function theMaximumAchievableX(num, t) {
  return num + t * 2;
}
// console.log(theMaximumAchievableX(4, 1));

// 86) You are given an integer array nums. We consider an array good if it is a permutation of an array base[n].
// base[n] = [1, 2, ..., n - 1, n, n] (in other words, it is an array of length n + 1 which
// contains 1 to n - 1 exactly once, plus two occurrences of n). For example, base[1] = [1, 1] and base[3] = [1, 2, 3, 3].
// Return true if the given array is good, otherwise return false.
// Note: A permutation of integers represents an arrangement of these numbers.
// Input: nums = [2, 1, 3]
// Output: false
// Explanation: Since the maximum element of the array is 3, the only candidate n for which this array could be a
// permutation of base[n], is n = 3. However, base[3] has four elements but array nums has three. Therefore,
// it can not be a permutation of base[3] = [1, 2, 3, 3]. So the answer is false.

function isGood(array) {
  let maxElem = Math.max(...array);
  let goodArray = true;
  if (array.length !== maxElem + 1) {
    return false;
  }
  for (let i = 1; i <= maxElem; i++) {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[j] === i) {
        count++;
      }
    }
    if (i === maxElem) {
      if (count !== 2) {
        goodArray = false;
        break;
      }
    } else {
      if (count !== 1) {
        goodArray = false;
        break;
      }
    }
  }
  return goodArray;
}
// console.log(isGood([1, 3, 3, 2]));

// 87) There are n employees in a company, numbered from 0 to n - 1. Each employee i has worked for hours[i] hours in the company.
// The company requires each employee to work for at least target hours.
// You are given a 0-indexed array of non-negative integers hours of length n and a non-negative integer target.
// Return the integer denoting the number of employees who worked at least target hours.
// Input: hours = [0,1,2,3,4], target = 2
// Output: 3
// Explanation: The company wants each employee to work for at least 2 hours.
// - Employee 0 worked for 0 hours and didn't meet the target.
// - Employee 1 worked for 1 hours and didn't meet the target.
// - Employee 2 worked for 2 hours and met the target.
// - Employee 3 worked for 3 hours and met the target.
// - Employee 4 worked for 4 hours and met the target.
// There are 3 employees who met the target.

function numberOfEmployeesWhoMetTarget(hours, target) {
  let cnt = 0;
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] >= target) {
      cnt++;
    }
  }
  return cnt;
}
// console.log(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2));

// 88) Given a sentence that consists of some words separated by a single space, and a searchWord,
// check if searchWord is a prefix of any word in sentence. Return the index of the word in sentence
// (1-indexed) where searchWord is a prefix of this word. If searchWord is a prefix of more than one word,
// return the index of the first word (minimum index). If there is no such word return -1.
// A prefix of a string s is any leading contiguous substring of s.
// Input: sentence = "i love eating burger", searchWord = "burg"
// Output: 4
// Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.

function isPrefixOfWord(str, pref) {
  let strSplit = str.split(" ");
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].startsWith(pref)) {
      return i + 1;
    }
  }
  return -1;
}
// console.log(isPrefixOfWord("i love eating burger", "burg"));

// 89) Given the array of integers nums, you will choose two different indices i and j of that array.
// Return the maximum value of (nums[i]-1)*(nums[j]-1).
// Input: nums = [3,4,5,2]
// Output: 12
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value,
// that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12.

function maxProduct(array) {
  let sum = 0;
  let maxElem = array[0];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      sum = (array[i] - 1) * (array[j] - 1);
      if (sum > maxElem) {
        maxElem = sum;
      }
      if (array[i] === array[j] && array[j] === maxElem) {
        maxElem = 0;
      }
    }
  }
  return maxElem;
}
// console.log(maxProduct([3, 4, 5, 2]));

// 90) Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4]

function runningSum(array) {
  let sum = 0;
  let res = [];
  let sumArray = [];
  for (let i = 0; i < array.length; i++) {
    let sliced = array.slice(0, i + 1);
    res.push(sliced);
  }
  for (let i = 0; i < res.length; i++) {
    sum = res[i].reduce((a, b) => a + b, 0);
    sumArray.push(sum);
  }
  return sumArray;
}
// console.log(runningSum([1, 2, 3, 4]));

// 91) You are given an array of unique integers salary where salary[i] is the salary of the ith employee.
// Return the average salary of employees excluding the minimum and maximum salary.
// Answers within 10-5 of the actual answer will be accepted.
// Input: salary = [4000,3000,1000,2000]
// Output: 2500.00000
// Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
// Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500

function average(array) {
  const minElem = Math.min(...array);
  const maxElem = Math.max(...array);
  const filtered = array.filter((el) => el !== minElem && el !== maxElem);
  const sum = filtered.reduce((a, b) => a + b, 0);
  return sum / filtered.length;
}
// console.log(average([4000, 3000, 1000, 2000]));

// 92) Given a string s, return the length of the longest substring between two equal characters, excluding the two characters.
// If there is no such substring return -1. A substring is a contiguous sequence of characters within a string.
// Input: s = "abca"
// Output: 2
// Explanation: The optimal substring here is "bc".

function maxLengthBetweenEqualCharacters(str) {
  let maxLength = -1;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        const subStr = str.slice(i + 1, j);
        maxLength = Math.max(maxLength, subStr.length);
      }
    }
  }
  return maxLength;
}
// console.log(maxLengthBetweenEqualCharacters("abca"));

// 93) A fancy string is a string where no three consecutive characters are equal.
// Given a string s, delete the minimum possible number of characters from s to make it fancy.
// Return the final string after the deletion. It can be shown that the answer will always be unique.
// Input: s = "leeetcode"
// Output: "leetcode"
// Explanation:
// Remove an 'e' from the first group of 'e's to create "leetcode".
// No three consecutive characters are equal, so return "leetcode".

function makeFancyString(str) {
  let cnt = 0;
  let res = "";
  let strSplit = str.split("");
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i] === strSplit[i + 1]) {
      cnt++;
      if (cnt >= 2) {
        continue;
      }
    } else {
      cnt = 0;
    }
    res += strSplit[i];
  }

  return res;
}
// console.log(makeFancyString("leeetcode"));

// 94)Given a string s and an array of strings words, determine whether s is a prefix string of words.
// A string s is a prefix string of words if s can be made by concatenating the first k strings in words
// for some positive k no larger than words.length.
// Return true if s is a prefix string of words, or false otherwise.
// Input: s = "iloveleetcode", words = ["i","love","leetcode","apples"]
// Output: true
// Explanation:
// s can be made by concatenating "i", "love", and "leetcode" together.
function isPrefixString(str, array) {
  let concat = "";
  for (let i = 0; i < array.length; i++) {
    concat += array[i];
    if (concat === str) {
      return true;
    }
    if (concat.length > str.length) {
      return false;
    }
  }
  return false;
}
// console.log(isPrefixString("iloveleetcode", ["i", "love", "leetcode", "apples"]));

// 95) Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.
// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.
// Input: nums = [7,5,6,8,3]
// Output: 1
// Explanation:
// The smallest number in nums is 3.
// The largest number in nums is 8.
// The greatest common divisor of 3 and 8 is 1.

function findGCD(array) {
  let maxElem = Math.max(...array);
  let minElem = Math.min(...array);
  while (minElem !== 0) {
    const temp = minElem;
    minElem = maxElem % minElem;
    maxElem = temp;
  }
  return maxElem;
}
// console.log(findGCD([7, 5, 6, 8, 3]));

// 96) Given an integer array nums and an integer k, return the number of pairs (i, j)
// where i < j such that |nums[i] - nums[j]| == k. The value of |x| is defined as:
// x if x >= 0.
// -x if x < 0.
// Input: nums = [1,2,2,1], k = 1
// Output: 4
// Explanation: The pairs with an absolute difference of 1 are:
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]

function countKDifference(array, k) {
  let cnt = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (Math.abs(array[i] - array[j]) == k) {
        cnt++;
      }
    }
  }
  return cnt;
}
// console.log(countKDifference([1, 2, 2, 1], 1));

// 97) A sentence is a list of tokens separated by a single space with no leading or trailing spaces.
// Every token is either a positive number consisting of digits 0-9 with no leading zeros,
// or a word consisting of lowercase English letters. For example, "a puppy has 2 eyes 4 legs"
//  is a sentence with seven tokens: "2" and "4" are numbers and the other tokens such as "puppy" are words.
// Given a string s representing a sentence, you need to check if all the numbers in s are strictly increasing
//  from left to right (i.e., other than the last number, each number is strictly smaller than the number on its right in s).
// Return true if so, or false otherwise.
// Input: s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles"
// Output: true
// Explanation: The numbers in s are: 1, 3, 4, 6, 12.
// They are strictly increasing from left to right: 1 < 3 < 4 < 6 < 12.

function areNumbersAscending(str) {
  let strSplit = str.split(" ");
  let filterNum = strSplit.filter((el, i) => {
    const num = parseInt(el);
    return !isNaN(num);
  });
  let toNumElem = filterNum.map(Number);
  for (let i = 0; i < toNumElem.length - 1; i++) {
    if (toNumElem[i] >= toNumElem[i + 1]) {
      return false;
    }
  }
  return true;
}
// console.log(areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles"));

// 98) You are given a positive integer num consisting of exactly four digits.
// Split num into two new integers new1 and new2 by using the digits found in num.
// Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.
// For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3.
// Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].
// Return the minimum possible sum of new1 and new2.
// Input: num = 2932
// Output: 52
// Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
// The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.

function minimumSum(num) {
  let numSplit = num
    .toString()
    .split("")
    .map(Number)
    .sort((a, b) => a - b);
  let num1 = "";
  let num2 = "";
  for (let i = 0; i < numSplit.length; i++) {
    if (i % 2 === 0) {
      num1 += numSplit[i];
    } else {
      num2 += numSplit[i];
    }
  }
  return parseInt(num1) + parseInt(num2);
}
// console.log(minimumSum(2932));

// 99)You are given a string num consisting of only digits.
// A string of digits is called balanced if the sum of the digits at even indices is equal to the sum of digits at odd indices.
// Return true if num is balanced, otherwise return false.
// Input: num = "1234"
// Output: false
// Explanation:
// The sum of digits at even indices is 1 + 3 == 4, and the sum of digits at odd indices is 2 + 4 == 6.
// Since 4 is not equal to 6, num is not balanced.

function isBalanced(num) {
  let evenCnt = 0;
  let oddCnt = 0;
  for (let i = 0; i < num.length; i++) {
    if ([i] % 2 === 0) {
      evenCnt += num[i] * 1;
    } else {
      oddCnt += num[i] * 1;
    }
  }
  return evenCnt == oddCnt;
}
// console.log(isBalanced("1234"));

// 100)Your friend is typing his name into a keyboard. Sometimes, when typing a character c,
// the key might get long pressed, and the character will be typed 1 or more times.
// You examine the typed characters of the keyboard. Return True if it is possible that it was
// your friends name, with some characters (possibly none) being long pressed.
// Input: name = "alex", typed = "aaleex"
// Output: true
// Explanation: 'a' and 'e' in 'alex' were long pressed.

function isLongPressedName(name, typed) {
  let i = 0;
  for (let j = 0; j < typed.length; j++) {
    if (i < name.length && name[i] === typed[j]) {
      i++;
    } else if (j === 0 || typed[j] !== typed[j - 1]) {
      return false;
    }
  }
  return i === name.length;
}
// console.log(isLongPressedName("alex", "aaleex"));

// 101) Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

function reverseString(array) {
  const length = array.length;
  for (let i = length - 1; i >= 0; i--) {
    array.push(array[i]);
  }
  array.splice(0, length);
  return array;
}
// console.log(reverseString(["h", "e", "l", "l", "o"]));

// 102) Given a 0-indexed integer array nums, return the smallest index i of nums
// such that i mod 10 == nums[i], or -1 if such index does not exist.
// x mod y denotes the remainder when x is divided by y.
// Input: nums = [0,1,2]
// Output: 0
// Explanation:
// i=0: 0 mod 10 = 0 == nums[0].
// i=1: 1 mod 10 = 1 == nums[1].
// i=2: 2 mod 10 = 2 == nums[2].
// All indices have i mod 10 == nums[i], so we return the smallest index 0.

function smallestEqual(array) {
  for (let i = 0; i < array.length; i++) {
    if (i % 10 === array[i]) {
      return i;
    }
  }
  return -1;
}
// console.log(smallestEqual([0, 1, 2]));

// 103) Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.
// Input: nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]
// Explanation:
// For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3
// are not present in nums2. Therefore, answer[0] = [1,3].
// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6
// are not present in nums2. Therefore, answer[1] = [4,6].

function findDifference(nums1, nums2) {
  let diff1 = [];
  let diff2 = [];
  for (let i = 0; i < nums1.length; i++) {
    if (!nums2.includes(nums1[i]) && !diff1.includes(nums1[i])) {
      diff1.push(nums1[i]);
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (!nums1.includes(nums2[i]) && !diff2.includes(nums2[i])) {
      diff2.push(nums2[i]);
    }
  }
  return [diff1, diff2];
}
// console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));

// 104) Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
function moveZeroes(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === 0) {
      array.push(array[i]);
      array.splice(i, 1);
    }
  }
  return array;
}
// console.log(moveZeroes([0, 1, 0, 3, 12]));

// 105) Given two positive integers a and b, return the number of common factors of a and b.
// An integer x is a common factor of a and b if x divides both a and b.
// Input: a = 12, b = 6
// Output: 4
// Explanation: The common factors of 12 and 6 are 1, 2, 3, 6.

function commonFactors(a, b) {
  let factors = [];
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      factors.push(i);
    }
  }
  return factors.length;
}
// console.log(commonFactors(12, 6));

// 106) An array is considered special if every pair of its adjacent elements contains two numbers with different parity.
// You are given an array of integers nums. Return true if nums is a special array, otherwise, return false.
// Input: nums = [2,1,4]
// Output: true
// Explanation:
// There is only two pairs: (2,1) and (1,4), and both of them contain numbers with different parity. So the answer is true.

function isArraySpecial(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] % 2 === array[i + 1] % 2) {
      return false;
    }
  }
  return true;
}
// console.log(isArraySpecial([2, 1, 4]));

// 107) Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.
// Input: nums = [1,2,3,1]
// Output: true
// Explanation:
// The element 1 occurs at the indices 0 and 3.

function containsDuplicate(array) {
  array.sort();
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) {
      return true;
    }
  }
  return false;
}
// console.log(containsDuplicate([1, 2, 3, 1]));

// 108) Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

function romanToInt(str) {
  let romanToNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    if (romanToNum[str[i]] < romanToNum[str[i + 1]]) {
      res -= romanToNum[str[i]];
    } else {
      res += romanToNum[str[i]];
    }
  }
  return res;
}
// console.log(romanToInt("III"));

// 109) A phrase is a palindrome if, after converting all uppercase letters into lowercase
// letters and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

function isPalindrome(str) {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    let char = str[i].toLowerCase();
    if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
      res += char;
    }
  }
  return res === res.split("").reverse().join("");
}
// console.log(isPalindrome("A man, a plan, a canal: Panama"));

// 110) You are given two strings word1 and word2. Merge the strings by adding letters in alternating order,
// starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.
// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b
// word2:    p   q   r   s
// merged: a p b q   r   s

function mergeAlternately(str1, str2) {
  let res = "";
  let maxLength = Math.max(str1.length, str2.length);
  for (let i = 0; i < maxLength; i++) {
    if (i < str1.length) {
      res += str1[i];
    }
    if (i < str2.length) {
      res += str2[i];
    }
  }
  return res;
}
// console.log(mergeAlternately("ab", "pqrs"));

// 111) Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting
//  some (can be none) of the characters without disturbing the relative positions of the remaining characters.
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
// Input: s = "abc", t = "ahbgdc"
// Output: true

function isSubsequence(str, s) {
  let i = 0;
  let j = 0;
  while (i < str.length && j < s.length) {
    if (str[i] === s[j]) {
      i++;
    }
    j++;
  }
  return i === str.length;
}
// console.log(isSubsequence("abc", "ahbgdc"));
