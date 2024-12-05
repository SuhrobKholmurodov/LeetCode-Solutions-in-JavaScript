# 🌀 Bubble Sort Algorithm

## 📚 Introduction
Bubble Sort is a simple comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The algorithm gets its name from the way smaller elements "bubble" to the top of the list, while larger elements "sink" to the bottom. 

## 🔄 How Bubble Sort Works
The basic idea behind Bubble Sort is to iterate over the entire list multiple times, comparing adjacent elements and swapping them if necessary. After each pass through the list, the largest unsorted element is guaranteed to be placed at its correct position.

### 🧑‍🏫 Step-by-step Explanation:
1. **Start at the beginning of the array.**
2. **Compare two adjacent elements**.
   - If the first element is larger than the second, **swap** them.
3. **Repeat the process** for each pair of adjacent elements.
4. **After the first pass**, the largest element will be placed at the end of the array.
5. **Repeat the process for the remaining unsorted portion of the array**.
6. **Stop when no more swaps are needed**.

### 🔍 Example:
Let's take an array `[4, 2, 7, 1, 5]` and sort it using Bubble Sort:

- **First Pass**:
  - Compare 4 and 2 → Swap → `[2, 4, 7, 1, 5]`
  - Compare 4 and 7 → No swap
  - Compare 7 and 1 → Swap → `[2, 4, 1, 7, 5]`
  - Compare 7 and 5 → Swap → `[2, 4, 1, 5, 7]`
  - Now, 7 is in its final position.

- **Second Pass**:
  - Compare 2 and 4 → No swap
  - Compare 4 and 1 → Swap → `[2, 1, 4, 5, 7]`
  - Compare 4 and 5 → No swap
  - Now, 5 is in its final position.

- **Third Pass**:
  - Compare 2 and 1 → Swap → `[1, 2, 4, 5, 7]`
  - Now, 4, 5, and 7 are in their correct positions.

The array is now fully sorted: `[1, 2, 4, 5, 7]`.

## 👨‍💻 Bubble Sort Code (JavaScript)

```javascript
function bubbleSort(array) {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort([4, 2, 7, 1, 5])); // Output: [1, 2, 4, 5, 7]


## 🧠 Complexity Analysis

- **Time Complexity**:
  - **Best Case**: O(n) — when the array is already sorted, the algorithm only needs one pass.
  - **Average Case**: O(n²) — typical case when the elements are randomly ordered.
  - **Worst Case**: O(n²) — when the array is sorted in reverse order.
  
- **Space Complexity**: O(1) — Bubble Sort is an **in-place sorting algorithm**, meaning it does not require additional memory beyond the input array.

## ⚖️ Advantages of Bubble Sort
1. **Simplicity**: The algorithm is easy to understand and implement.
2. **In-place Sorting**: It doesn't require additional memory, making it space-efficient.
3. **Stable**: Bubble Sort maintains the relative order of equal elements.

## 👎 Disadvantages of Bubble Sort
1. **Inefficiency**: It is one of the slowest sorting algorithms with a time complexity of O(n²) in the average and worst cases.
2. **Unoptimized**: It doesn’t perform well on large datasets, as each element needs to be compared multiple times.
3. **Redundant Passes**: Even if the array is partially sorted, Bubble Sort may continue making redundant comparisons.

## 💡 When to Use Bubble Sort
Bubble Sort is rarely used in practice for large datasets due to its inefficiency. However, it can be useful in educational contexts, where it helps in understanding sorting algorithms and the importance of optimizing code.

## 🎯 Conclusion
While Bubble Sort is a simple and easy-to-understand algorithm, it is not the most efficient choice for large datasets. For larger datasets, algorithms like Merge Sort or Quick Sort are generally preferred. Nonetheless, Bubble Sort is a good starting point for learning about sorting and algorithm optimization.
