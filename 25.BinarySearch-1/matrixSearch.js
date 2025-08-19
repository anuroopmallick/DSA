// Problem Description
// Given a matrix of integers A of size N x M and an integer B. Write an efficient algorithm that searches for integer B in matrix A.
// This matrix A has the following properties:
// Integers in each row are sorted from left to right.
// The first integer of each row is greater than or equal to the last integer of the previous row.
// Return 1 if B is present in A, else return 0.

// NOTE: Rows are numbered from top to bottom, and columns are from left to right.

module.exports = {
  //param A : array of array of integers
  //param B : integer
  //return an integer
  searchMatrix: function (A, B) {
    let m = A[0].length - 1;
    let l = 0;
    let r = A.length - 1;

    let setArr = null;

    if (A.length == 1 && A[0].length == 1 && A[0][0] == B) {
      return 1;
    }

    while (l <= r) {
      let mid = Math.floor((l + r) / 2);

      if (A[mid][0] <= B && A[mid][m] >= B) {
        setArr = A[mid];
        break;
      } else if (A[mid][0] > B) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }

    if (Array.isArray(setArr)) {
      l = 0;
      r = A[0].length - 1;

      while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (setArr[mid] == B) {
          return 1;
        } else if (setArr[mid] > B) {
          r = mid - 1;
        } else {
          l = mid + 1;
        }
      }

      return 0;
    }

    return 0;
  },
};
