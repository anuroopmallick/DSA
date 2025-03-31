// Q. Given an array of integers A, a subarray of an array is said to be good if it fulfills any one of the criteria:
//1. Length of the subarray is be even, and the sum of all the elements of the subarray must be less than B.
//2. Length of the subarray is be odd, and the sum of all the elements of the subarray must be greater than B.
//Your task is to find the count of good subarrays in A.

//brute force TC - o(n^3) , sc - o(n^2)

function solve(A, B) {
  let n = A.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let subArray = [];
      let totalSum = 0;
      for (let k = i; k <= j; k++) {
        subArray.push(A[k]);
        totalSum += A[k];
      }

      if (subArray.length % 2 == 0 && totalSum < B) {
        count += 1;
      }

      if (subArray.length % 2 != 0 && totalSum > B) {
        count += 1;
      }
    }
  }

  return count;
}

//optimised approach , TC - o(n^2) , SC - o(n)

function optimised(A, B) {
  let n = A.length;
  let count = 0;

  let PF = new Array(n).fill(0);
  PF[0] = A[0];
  for (let i = 1; i < n; i++) {
    PF[i] = PF[i - 1] + A[i];
  }

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = PF[j];
      if (i > 0) {
        sum = PF[j] - PF[i - 1];
      }

      if (sum < B && (j - i + 1) % 2 == 0) {
        count += 1;
      }

      if (sum > B && (j - i + 1) % 2 != 0) {
        count += 1;
      }
    }
  }

  return count;
}

//final approach , TC - o(n^2) , sc - o(1)
function final(A, B) {
  let n = A.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    let totalSum = 0;
    for (let j = i; j < n; j++) {
      totalSum += A[j];

      if ((j - i + 1) % 2 == 0 && totalSum < B) {
        count += 1;
      }

      if ((j - i + 1) % 2 != 0 && totalSum > B) {
        count += 1;
      }
    }
  }

  return count;
}
