// Q. Given an integer array A of size N. In one second, you can increase the value of one element by 1.
// Find the minimum time in seconds to make all elements of the array equal.

// Problem Constraints , 1 <= N <= 1000000 , 1 <= A[i] <= 1000

//Since we can only increase the element by 1, we should increase all elements up to the maximum element.

function solve(A) {
  let seconds = 0;
  let max = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] > max) {
      max = A[i];
    }
  }

  for (let i = 0; i < A.length; i++) {
    seconds += max - A[i];
  }

  return seconds;
}
