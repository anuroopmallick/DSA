//Given an integer array A of size N. You can remove any element from the array in one operation.
//The cost of this operation is the sum of all elements in the array present before this operation.
//Find the minimum cost to remove all elements from the array.

function solve(A) {
  let sortedArray = A.sort((a, b) => b - a);
  let ans = 0;

  for (let i = 0; i < A.length; i++) {
    ans += (i + 1) * sortedArray[i];
  }

  return ans;
}
