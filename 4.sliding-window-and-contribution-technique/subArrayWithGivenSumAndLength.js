// Q. Given an array A of length N. Also given are integers B and C.Return 1 if there exists a subarray with length B having sum C and 0 otherwise

function solve(A, B, C) {
  let n = A.length;
  let sum = 0;

  for (let i = 0; i < B; i++) {
    sum += Number(A[i]);
  }

  if (sum == C) return 1;

  for (let i = 1; i < n - B + 1; i++) {
    sum = Number(sum) - Number(A[i - 1]) + Number(A[i + B - 1]);
    if (sum == C) return 1;
  }

  return 0;
}
