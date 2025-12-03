// Q1. Rotated Sorted Array Search
// Solved
// feature icon
// Using hints except Complete Solution is Penalty free now
// Use Hint
// Problem Description
// Given a sorted array of integers A of size N and an integer B,
// where array A is rotated at some pivot unknown beforehand.
// For example, the array [0, 1, 2, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2].
// Your task is to search for the target value B in the array. If found, return its index; otherwise, return -1.
// You can assume that no duplicates exist in the array.
// NOTE: You are expected to solve this problem with a time complexity of O(log(N)).

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  search: function (A, B) {
    let l = 0;
    let r = A.length - 1;

    let starting = A[0];

    while (l <= r) {
      let mid = Math.floor((l + r) / 2);

      if (A[mid] == B) {
        return mid;
      } else if (A[mid] > starting && B > starting) {
        if (A[mid] > B) {
          r = mid - 1;
        } else {
          l = mid + 1;
        }
      } else if (A[mid] < starting && B < starting) {
        if (A[mid] < B) {
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      } else if (A[mid] > starting && B < starting) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }

    return -1;
  },
};
