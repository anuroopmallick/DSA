// Problem Description
// Problem Constraints
// 1 <= N <= 5*105
// 1 <= num[i] <= 109

// Input Format
// Only argument is an integer array.

// Output Format
// Return an integer.

// Example Input
// Input 1:
// [2, 1, 2]
// Input 2:
// [1, 1, 1]

// Example Output
// Input 1:
// 2
// Input 2:
// 1

// Example Explanation
// For Input 1:
// 2 occurs 2 times which is greater than 3/2.
// For Input 2:
//  1 is the only element in the array, so it is majority

function solve(A) {
  let ans = A[0];
  let count = 1;

  for (let i = 1; i < A.length; ++i) {
    if (count == 0) {
      ans = A[i];
      count = 1;
    } else if (A[i] == ans) {
      count++;
    } else if (A[i] != ans) {
      count--;
    }
  }

  return Number(ans);
}
