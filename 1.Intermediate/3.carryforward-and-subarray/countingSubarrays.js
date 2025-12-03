// Q . Given an array A of N non-negative numbers and a non-negative number B,
//you need to find the number of subarrays in A with a sum less than B.
//We may assume that there is no overflow.

function solve(A, B) {
  let n = A.length;
  let ans = 0;

  let PF = new Array(n).fill(0);
  PF[0] = A[0];
  for (let i = 1; i < n; i++) {
    PF[i] = PF[i - 1] + A[i];
  }

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = PF[j];
      if (i > 0) {
        sum -= PF[i - 1];
      }

      if (sum < B) {
        ans += 1;
      }
    }
  }

  return ans;
}
