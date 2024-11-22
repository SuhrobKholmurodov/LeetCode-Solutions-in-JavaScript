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
