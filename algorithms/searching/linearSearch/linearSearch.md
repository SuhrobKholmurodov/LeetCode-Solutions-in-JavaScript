# 🔍 Linear Search Algorithm

## 📚 Introduction

Linear Search is one of the simplest searching algorithms. It is a sequential search technique where each element in the list is checked one by one until the desired element is found or the list ends. This algorithm is particularly useful when dealing with small or unsorted datasets.

## 🔄 How Linear Search Works

Linear Search iterates through the array or list, comparing each element to the target value. If the target value is found, the algorithm returns its index. Otherwise, it returns a failure result (e.g., -1).

### 🧑‍🏫 Step-by-step Explanation:

1. **Start at the beginning of the list.**
2. **Compare the current element with the target value.**
   - If the current element matches the target value, return its index.
   - If not, move to the next element.
3. **Repeat until you reach the end of the list.**
4. If the target value is not found, return -1.

### 🔍 Example:

Let's search for the value `7` in the array `[4, 2, 7, 1, 5]` using Linear Search:

- Start with the first element:
  - Compare 4 with 7 → No match.
  - Compare 2 with 7 → No match.
  - Compare 7 with 7 → Match found at index 2.
- The algorithm stops as soon as the target is found.

## 👨‍💻 Linear Search Code (JavaScript)

```javascript
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i; // Return the index if target is found
    }
  }
  return -1; // Return -1 if target is not found
}

console.log(linearSearch([4, 2, 7, 1, 5], 7)); // Output: 2
console.log(linearSearch([4, 2, 7, 1, 5], 9)); // Output: -1

## 🧠 Complexity Analysis

- **Time Complexity**:
  - **Best Case**: O(1) — when the target is the first element in the array.
  - **Average Case**: O(n) — when the target is somewhere in the middle of the array.
  - **Worst Case**: O(n) — when the target is not in the array or is the last element.

- **Space Complexity**: O(1) — Linear Search is an **in-place algorithm** that doesn't require additional memory.

## ⚖️ Advantages of Linear Search
1. **Simplicity**: Easy to understand and implement.
2. **No Preprocessing Needed**: Works well on unsorted datasets.
3. **Versatility**: Can be used on any data structure that supports sequential access.

## 👎 Disadvantages of Linear Search
1. **Inefficiency**: Linear Search is slow for large datasets.
2. **Ineffective on Sorted Data**: Other algorithms like Binary Search are faster for sorted data.

## 💡 When to Use Linear Search
Linear Search is suitable in the following cases:
- When the dataset is small.
- When the data is unsorted, and preprocessing is not an option.
- For simple problems where implementation time is critical.

## 🎯 Conclusion
Linear Search is a basic and intuitive searching algorithm, perfect for small datasets or as a learning tool. However, for larger and sorted datasets, more efficient algorithms like Binary Search are typically preferred.
```
