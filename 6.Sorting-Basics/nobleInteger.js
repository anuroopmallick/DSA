//Given an integer array A, find if an integer p exists in the array such that the number of integers greater
// than p in the array equals p.

function solve(A) {
  let sortedArray = A.sort((a, b) => b - a);

  if (sortedArray[0] == 0) {
    return 1;
  }

  for (let i = 1; i < A.length; i++) {
    if (sortedArray[i] == i && sortedArray[i - 1] != sortedArray[i]) {
      return 1;
    }
  }

  return -1;
}
