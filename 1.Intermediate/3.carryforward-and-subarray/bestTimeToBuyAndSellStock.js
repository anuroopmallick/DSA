// Q. Say you have an array, A, for which the ith element is the price of a given stock on day i.
//If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock),
// design an algorithm to find the maximum profit. Return the maximum possible profit.

function solve(A) {
  let ans = 0;
  let min = A[0];

  for (let i = 1; i < A.length; i++) {
    if (A[i] < min) {
      min = A[i];
    }

    if (ans < A[i] - min) {
      ans = A[i] - min;
    }
  }

  return ans;
}
