# 🧮 Insertion Sort Algorithm

## 📚 Introduction
Insertion Sort is a simple comparison-based sorting algorithm that builds the sorted array one element at a time. It works by taking elements from the unsorted portion of the array and inserting them into their correct position in the sorted portion. This algorithm is much like sorting playing cards in your hands by picking one card at a time and inserting it in its correct position.

## 🔄 How Insertion Sort Works
The basic idea behind Insertion Sort is to iterate over the array and compare each element with the previous elements in the sorted portion. If an element is smaller than the element before it, it is shifted to the left until it reaches its correct position.

### 🧑‍🏫 Step-by-step Explanation:
1. **Start at the second element** in the array (since a single element is already sorted).
2. **Compare the current element** with the element before it.
   - If the current element is smaller, **shift the larger element** to the right.
3. **Insert the current element** into the correct position in the sorted portion.
4. **Repeat** for each element until the entire array is sorted.

### 🔍 Example:
Let's take an array `[5, 2, 9, 1, 5, 6]` and sort it using Insertion Sort:

- **First Pass** (i = 1):
  - Compare 2 and 5 → Swap → `[2, 5, 9, 1, 5, 6]`
  
- **Second Pass** (i = 2):
  - Compare 9 and 5 → No swap → `[2, 5, 9, 1, 5, 6]`
  
- **Third Pass** (i = 3):
  - Compare 1 and 9 → Swap → `[2, 5, 1, 9, 5, 6]`
  - Compare 1 and 5 → Swap → `[2, 1, 5, 9, 5, 6]`
  - Compare 1 and 2 → Swap → `[1, 2, 5, 9, 5, 6]`
  - Now, 1 is in its correct position.

- **Fourth Pass** (i = 4):
  - Compare 5 and 9 → Swap → `[1, 2, 5, 5, 9, 6]`
  - Compare 5 and 5 → No swap → `[1, 2, 5, 5, 9, 6]`
  
- **Fifth Pass** (i = 5):
  - Compare 6 and 9 → Swap → `[1, 2, 5, 5, 6, 9]`
  - Now, the array is sorted.

The final sorted array is `[1, 2, 5, 5, 6, 9]`.

## 👨‍💻 Insertion Sort Code (JavaScript)

```javascript
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    // Move elements of array[0..i-1] that are greater than key to one position ahead
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = key;
  }

  return array;
}

console.log(insertionSort([5, 2, 9, 1, 5, 6])); // Output: [1, 2, 5, 5, 6, 9]

## 🧠 Complexity Analysis

- **Time Complexity**:
  - **Best Case**: O(n) — when the array is already sorted, the algorithm only needs to pass through the array once.
  - **Average Case**: O(n²) — when the array elements are in a random order.
  - **Worst Case**: O(n²) — when the array is sorted in reverse order.

- **Space Complexity**: O(1) — Insertion Sort is an **in-place sorting algorithm**, meaning it does not require any additional space beyond the input array.

## ⚖️ Advantages of Insertion Sort
1. **Simplicity**: It is easy to understand and implement.
2. **In-place Sorting**: No extra memory is needed, making it efficient in terms of space.
3. **Stable**: Insertion Sort maintains the relative order of equal elements.
4. **Efficient for Small Data**: It performs well on small datasets or nearly sorted arrays.
5. **Adaptive**: It adapts to the input array and can be faster when the array is already partially sorted.

## 👎 Disadvantages of Insertion Sort
1. **Inefficiency on Large Datasets**: For large datasets, it performs poorly with a time complexity of O(n²).
2. **Redundant Comparisons**: In cases where the array is not sorted, multiple unnecessary comparisons and shifts occur.
3. **Not Suitable for Large Inputs**: Insertion Sort is not ideal for sorting large or highly unsorted datasets due to its quadratic time complexity.

## 💡 When to Use Insertion Sort
Insertion Sort is rarely used in practice for large datasets due to its inefficiency. However, it can be beneficial for:
- Small datasets.
- Arrays that are already partially sorted.
- Educational purposes to understand sorting concepts.
- Situations where memory usage is a concern, as it is an in-place algorithm.

## 🎯 Conclusion
Insertion Sort, although simple and easy to implement, is not ideal for large datasets due to its O(n²) time complexity. It is, however, a good starting point for learning about sorting algorithms and understanding the importance of optimizing code for larger datasets. For more efficient sorting of large arrays, algorithms like Merge Sort or Quick Sort are generally preferred. Despite its inefficiencies, Insertion Sort is an effective algorithm for small and partially sorted arrays.
