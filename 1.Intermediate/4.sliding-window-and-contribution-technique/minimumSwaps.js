// Q. Given an array of integers A and an integer B, find and return the minimum number of swaps required to
// bring all the numbers less than or equal to B together. Note: It is possible to swap any two elements,
// not necessarily consecutive.

function solve(A, B) {
  let n = A.length;
  let windowSize = 0;

  for (let i = 0; i < n; i++) {
    if (A[i] <= B) {
      windowSize += 1;
    }
  }

  let count = 0;

  for (let i = 0; i < windowSize; i++) {
    if (A[i] > B) {
      count += 1;
    }
  }

  let ans = count;

  for (let i = 1; i < n - windowSize + 1; i++) {
    if (A[i - 1] > B) {
      count -= 1;
    }

    if (A[i + windowSize - 1] > B) {
      count += 1;
    }

    ans = Math.min(ans, count);
  }

  return ans;
}
