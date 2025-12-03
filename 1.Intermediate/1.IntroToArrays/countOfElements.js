// Q. Given an array A of N integers.  Count the number of elements that have at least 1 elements greater than itself.

function solve(A) {
  let max = 0;
  let count = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] > max) {
      max = A[i];
    }
  }

  for (let i = 0; i < A.length; i++) {
    if (A[i] < max) {
      count += 1;
    }
  }

  return count;
}
