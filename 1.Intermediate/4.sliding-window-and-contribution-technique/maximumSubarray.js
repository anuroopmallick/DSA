// Q. You are given an integer array C of size A. Now you need to find a subarray (contiguous elements) so that the sum of contiguous elements is maximum.
//
// 1. Brute force - > TC n^3  3 loops
// 2. prefix sum - > TC o(n^2) , SC o(n) 2 loops

// 3. carry forward  - > TC o(n^2) , SC o(1) 2 loops
function solve(A, B, C) {
  let maxSum = 0;

  for (let i = 0; i < A; ++i) {
    let sum = 0;
    for (let j = i; j < A; ++j) {
      sum += Number(C[j]);
      if (sum <= B) {
        maxSum = Math.max(sum, maxSum);
      }
    }
  }

  return maxSum;
}
