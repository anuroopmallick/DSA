// Q2. Inversion count in an array
// Solved
// feature icon
// Using hints except Complete Solution is Penalty free now
// Use Hint
// Problem Description

// Given an array of integers A. If i < j and A[i] > A[j], then the pair (i, j) is called an inversion of A. Find the total number of inversions of A modulo (109 + 7).

// Problem Constraints
// 1 <= length of the array <= 105
// 1 <= A[i] <= 109

// Input Format
// The only argument given is the integer array A.

// Output Format
// Return the number of inversions of A modulo (109 + 7).

// Example Input
// Input 1:
// A = [1, 3, 2]
// Input 2:
// A = [3, 4, 1, 2]

// Example Output
// Output 1:
// 1
// Output 2:
// 4

// Example Explanation
// Explanation 1:
// The pair (1, 2) is an inversion as 1 < 2 and A[1] > A[2]
// Explanation 2:
// The pair (0, 2) is an inversion as 0 < 2 and A[0] > A[2]
// The pair (0, 3) is an inversion as 0 < 3 and A[0] > A[3]
// The pair (1, 2) is an inversion as 1 < 2 and A[1] > A[2]
// The pair (1, 3) is an inversion as 1 < 3 and A[1] > A[3]

module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let count = 0;
    let mod = 10 ** 9 + 7;

    function merge(array, l, mid, r) {
      let n = r - l + 1;
      let arr1 = new Array(mid - l + 1).fill(0);
      let arr2 = new Array(r - mid).fill(0);

      let index = 0;
      for (let i = l; i <= mid; ++i) {
        arr1[index] = array[i];
        index++;
      }

      index = 0;
      for (let i = mid + 1; i < r + 1; ++i) {
        arr2[index] = array[i];
        index++;
      }

      let index1 = 0;
      let index2 = 0;
      index = l;

      while (index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] <= arr2[index2]) {
          array[index] = arr1[index1];
          index1++;
          index++;
        } else {
          array[index] = arr2[index2];
          index2++;
          index++;
          count += arr1.length - index1;
        }
      }

      while (index1 < arr1.length) {
        array[index] = arr1[index1];
        index1++;
        index++;
      }

      while (index2 < arr2.length) {
        array[index] = arr2[index2];
        index2++;
        index++;
      }
    }

    function mergeSort(a, l, r) {
      if (l == r) return;

      let mid = Math.floor((l + r) / 2);
      mergeSort(a, l, mid);
      mergeSort(a, mid + 1, r);
      merge(a, l, mid, r);
    }

    mergeSort(A, 0, A.length - 1);

    return count % mod;
  },
};
