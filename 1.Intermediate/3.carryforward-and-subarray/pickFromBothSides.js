// Q. You are given an integer array A of size N.
//You have to perform B operations. In one operation, you can remove either the leftmost or the rightmost element of the array A.
//Find and return the maximum possible sum of the B elements that were removed after the B operations.
//NOTE: Suppose B = 3, and array A contains 10 elements, then you can:

//Remove 3 elements from front and 0 elements from the back, OR
//Remove 2 elements from front and 1 element from the back, OR
//Remove 1 element from front and 2 elements from the back, OR
//Remove 0 elements from front and 3 elements from the back.

function solve(A, B) {
  n = A.length;

  var PFa = new Array(n).fill(0);
  var SFa = new Array(n).fill(0);

  PFa[0] = A[0];
  for (let i = 1; i < n; i++) {
    PFa[i] = A[i] + PFa[i - 1];
  }

  SFa[n - 1] = A[n - 1];
  for (let i = n - 2; i > -1; i--) {
    SFa[i] = A[i] + SFa[i + 1];
  }

  var ans = Math.max(PFa[B - 1], SFa[n - B]);

  for (let i = 1; i < B; i++) {
    let sum = PFa[i - 1] + SFa[n - B + i];
    if (sum > ans) {
      ans = sum;
    }
  }

  return ans;
}
