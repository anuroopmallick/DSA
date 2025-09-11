// Q . Given an array A and an integer B.
//     A pair(i, j) in the array is a good pair if i != j and (A[i] + A[j] == B).
//     Check if any good pair exist or not.
//     Return 1 if it exists else return 0

function goodPair() {
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (A[i] + A[j] == B && i != j) {
        return 1;
      }
    }
  }

  return 0;
}

// Optimise using binary search
// Hint -> Sort the array A in increasing order.
// For each i from 0 to n-1 find the first element in the array having a value greater than or equal to B-A[i] using binary search.
// Time complexity : O(nlogn)

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    A = A.sort((a, b) => a - b);

    for (let i = 0; i < A.length; ++i) {
      let toFind = B - A[i];

      let l = i + 1;
      let r = A.length - 1;

      while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (A[mid] == toFind) {
          return 1;
        } else if (A[mid] < toFind) {
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      }
    }

    return 0;
  },
};
