// Problem Description
// Given a sorted array of integers A where every element appears twice except for one element which appears once, find
//  and return this single element that appears only once. Elements which are appearing twice are adjacent to each other.
// NOTE: Users are expected to solve this in O(log(N)) time.

module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let l = 0;
    let r = A.length - 1;

    while (l <= r) {
      let mid = Math.floor((l + r) / 2);

      if (A[mid] == A[mid + 1]) {
        if (mid % 2 == 0) {
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      } else if (A[mid] == A[mid - 1]) {
        if (mid % 2 !== 0) {
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      } else {
        return A[mid];
      }
    }
  },
};
