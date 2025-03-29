// Q . Given an array A and an integer B, find the number of occurrences of B in A.

function solve(A, B) {
  let count = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] == B) {
      count += 1;
    }
  }

  return count;
}
