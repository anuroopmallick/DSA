// Q . Problem Description
//You are given an integer array A of length N.
//You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
//For each query, you have to find the sum of all elements from L to R indices in A (0 - indexed).
//More formally, find A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R] for each query.

//Brute force

function solve(A, B) {
  let ans = [];

  for (let i = 0; i < B.length; i++) {
    let l = B[i][0];
    let r = B[i][1];

    let count = 0;
    for (let j = l; j < r + 1; j++) {
      count += Number(A[j]);
    }

    ans.push(count);
  }

  return ans;
}

// optimised

function optimised(A, B) {
  let ans = [];
  let pf = new Array(A.length).fill(0);

  pf[0] = A[0];
  for (let i = 1; i < A.length; i++) {
    pf[i] = pf[i - 1] + A[i];
  }

  for (let i = 0; i < B.length; i++) {
    let l = B[i][0];
    let r = B[i][1];
    var count = 0;

    if (l == 0) {
      count = Number(pf[r]);
    } else {
      count = Number(pf[r]) - Number(pf[l - 1]);
    }

    ans.push(count);
  }

  return ans;
}
