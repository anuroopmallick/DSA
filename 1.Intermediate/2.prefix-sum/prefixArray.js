// Q . Given an array A of N integers. Construct prefix sum of the array in the given array itself.

function solve(A) {
  let n = A.length;

  let PF = new Array(n).fill(0);
  PF[0] = A[0];
  for (let i = 1; i < n; i++) {
    PF[i] = PF[i - 1] + A[i];
  }

  return PF;
}
