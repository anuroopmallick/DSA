// Given an integer array A of size N. Return 1 if the array can be arranged to form an arithmetic progression,
// otherwise return 0. A sequence of numbers is called an arithmetic progression if the difference between any
// two consecutive elements is the same.

function solve(A) {
  let sortedArray = A.sort((a, b) => a - b);

  let difference = sortedArray[1] - sortedArray[0];

  for (let i = 0; i < A.length - 1; ++i) {
    if (sortedArray[i + 1] - sortedArray[i] != difference) {
      return 0;
    }
  }

  return 1;
}
