// Problem Description
// Given an array of integers A, find and return the peak element in it.
// An array element is considered a peak if it is not smaller than its neighbors. For corner elements, we need to consider only one neighbor.

// NOTE:
// It is guaranteed that the array contains only a single peak element.
// Users are expected to solve this in O(log(N)) time. The array may contain duplicate elements.

module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let l = 0;
    let r = A.length - 1;

    if (A.length == 1) {
      return A[0];
    }

    while (l <= r) {
      let mid = Math.floor((l + r) / 2);

      if (mid == 0) {
        if (A[mid] >= A[mid + 1]) return A[mid];
      } else if (mid == A.length - 1) {
        if (A[mid] >= A[mid - 1]) return A[mid];
      }

      if (A[mid] > A[mid + 1] && A[mid] > A[mid - 1]) {
        return A[mid];
      } else if (A[mid] <= A[mid + 1]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  },
};
