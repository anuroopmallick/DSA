//Q. Given an array A of length N, return the subarray from B to C.

function solve(A, B, C) {
  let subArray = A.slice(B, C + 1);
  return subArray;
}
