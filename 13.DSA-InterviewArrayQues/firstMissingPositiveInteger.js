// Problem Description
// Given an unsorted integer array, A of size N. Find the first missing positive integer.
// Note: Your algorithm should run in O(n) time and use constant space.

// Problem Constraints
// 1 <= N <= 1000000
// -109 <= A[i] <= 109

// Input Format
// First argument is an integer array A.

// Output Format
// Return an integer denoting the first missing positive integer.

// Example Input
// Input 1:
// [1, 2, 0]
// Input 2:
// [3, 4, -1, 1]
// Input 3:
// [-8, -7, -6]

// Example Output
// Output 1:
// 3
// Output 2:
// 2
// Output 3:
// 1

// Example Explanation
// Explanation 1:
// A = [1, 2, 0]
// First positive integer missing from the array is 3.

// Explanation 2:
// A = [3, 4, -1, 1]
// First positive integer missing from the array is 2.

// Explanation 3:
// A = [-8, -7, -6]
// First positive integer missing from the array is 1.

function nLogN(A) {
  let ans = 1;

  A = A.sort((a, b) => a - b);

  for (let i = 0; i < A.length; ++i) {
    if (A[i] == ans) {
      ans += 1;
    }
  }

  return ans;
}

function N(A) {
  let n = A.length;

  for (let i = 0; i < A.length; ++i) {
    while (A[i] >= 1 && A[i] <= n && A[i] != i + 1) {
      let pos = A[i] - 1;

      if (A[pos] == A[i]) {
        break;
      }

      swap(A, pos, i);
    }
  }

  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  for (let i = 0; i < n; ++i) {
    if (A[i] != i + 1) {
      return i + 1;
    }
  }

  return n + 1;
}
