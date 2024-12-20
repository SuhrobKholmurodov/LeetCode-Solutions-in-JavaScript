// 1) Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.
// You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.
// Input: nums = [1,2,0]
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.

function firstMissingPositive(array) {
  if (!array.includes(1)) return 1;
  let filtered = array.filter((el) => el > 0).sort((a, b) => a - b);
  for (let i = 0; i < filtered.length - 1; i++) {
    if (filtered[i + 1] - filtered[i] > 1) {
      return filtered[i] + 1;
    }
  }
  return filtered[filtered.length - 1] + 1;
}
// console.log(firstMissingPositive([3, 4, -1, 1]));

// 2) Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5

function findMedianSortedArrays(array1, array2) {
  let concats = array1.concat(array2).sort((a, b) => a - b);
  let length = concats.length;
  if (length % 2 === 0) {
    return concats.slice(length / 2 - 1, length / 2 + 1).reduce((a, b) => a + b) / 2;
  } else {
    return concats[Math.floor(length / 2)];
  }
}
// console.log(findMedianSortedArrays([1, 2], [3, 4]));

// 3) Given a string s, return the longest palindromic substring in s.
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
