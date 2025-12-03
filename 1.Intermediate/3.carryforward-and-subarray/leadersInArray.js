// Q. Given an integer array A containin s, you have to find all the leaders in array A.
// An element is a leader if it is strictly greater than all the elements to its right side.

function solve(A) {
  n = A.length;
  let ans = [];
  let currMax = 0;

  for (let i = n - 1; i >= 0; i--) {
    if (A[i] > currMax) {
      ans.push(A[i]);
      currMax = A[i];
    }
  }

  return ans;
}
