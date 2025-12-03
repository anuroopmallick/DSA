// Q. Given an array A of size N, find the subarray of size B with the least average.
function solve(A, B) {
  let sum = 0;

  for (let i = 0; i < B; ++i) {
    sum += A[i];
  }

  let average = sum / B;

  let ans = average;
  let output = 0;

  for (let i = 1; i < A.length - B + 1; ++i) {
    sum -= A[i - 1];
    sum += A[i + B - 1];

    average = sum / B;

    if (ans > average) {
      ans = average;
      output = i;
    }
  }

  return output;
}
