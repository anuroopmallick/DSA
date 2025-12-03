// Q. Problem Description
//You are given an array A of integers of size N. Your task is to find the equilibrium index of the given array .  The equilibrium index of an array is an index such that the sum of
// elements at lower indexes is equal to the sum of elements at higher indexes. If there are no elements that are at lower indexes or at higher indexes, then the corresponding
// sum of elements is considered as 0.
//Note: Array indexing starts from 0.  If there is no equilibrium index then return -1. If there are more than one equilibrium indexes then return the minimum index.

//Brute force - for each element runanother loop inside to count the sum of the left and on the right and then check the equality

//TC - o(n) , SC - o(n)
function solve(A) {
  let n = A.length;

  let PF = new Array(n).fill(0);
  PF[0] = A[0];
  for (let i = 1; i < n; i++) {
    PF[i] = PF[i - 1] + A[i];
  }

  let sumOfLower = 0;
  let sumOfHigher = 0;

  for (let i = 0; i < n; i++) {
    if (i == 0) {
      sumOfLower = 0;
      sumOfHigher = PF[n - 1] - PF[i];
    } else {
      sumOfLower = PF[i - 1];
      sumOfHigher = PF[n - 1] - PF[i];
    }

    if (sumOfLower == sumOfHigher) {
      return i;
    }
  }

  return -1;
}
