function solve(A) {
  let max = A[0];
  let min = A[0];

  for (let i = 1; i < A.length; i++) {
    if (A[i] > max) {
      max = A[i];
    }

    if (A[i] < min) {
      min = A[i];
    }
  }

  let newNumber = Number(max + min);
  return newNumber;
}
