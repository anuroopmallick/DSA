// 1. Brute force - > TC n^3  3 loops
// 2. prefix sum - > TC o(n^2) , SC o(n) 2 loops
// 3. carry forward  - > TC o(n^2) , SC o(1) 2 loops

// 4. contribution technique
function solve(A) {
  let n = A.lengthee;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    let count = (i + 1) * (n - i);
    let totalSum = count * Number(A[i]);
    sum += totalSum;
  }

  return sum;
}
