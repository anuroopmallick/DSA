function solve(A) {
  let currSum = 0;
  let max = A[0];

  for (let i = 0; i < A.length; ++i) {
    currSum += A[i];
    max = Math.max(currSum, max);

    if (currSum < 0) {
      currSum = 0;
    }
  }

  return max;
}
