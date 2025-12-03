// There are two sorted arrays A and B of sizes N and M respectively.
// Find the median of the two sorted arrays ( The median of the array formed by merging both the arrays ).
// NOTE:
// The overall run time complexity should be O(log(m+n)).
// IF the number of elements in the merged array is even, then the median is the average of (n/2)th
// and (n/2+1)th element. For example, if the array is [1 2 3 4], the median is (2 + 3) / 2.0 = 2.5.

module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return an integer
  findMedianSortedArrays: function (A, B) {
    if (A.length > B.length) {
      return this.findMedianSortedArrays(B, A);
    }

    let length = A.length + B.length;
    let firstHalfElements = Math.floor((A.length + B.length + 1) / 2);
    let ans = 0;

    let l = 0;
    let r = A.length;

    while (l <= r) {
      let mid = Math.floor((l + r) / 2);

      let c1 = mid;
      let c2 = firstHalfElements - mid;

      let Aleft = c1 > 0 ? A[c1 - 1] : -Infinity;
      let Aright = c1 < A.length ? A[c1] : Infinity;
      let Bleft = c2 > 0 ? B[c2 - 1] : -Infinity;
      let Bright = c2 < B.length ? B[c2] : Infinity;

      if (Aleft > Bright) {
        r = mid - 1;
      } else if (Bleft > Aright) {
        l = mid + 1;
      } else {
        if (length % 2 == 0) {
          let value = (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
          ans = value;
        } else {
          ans = Math.max(Aleft, Bleft);
        }
        break;
      }
    }

    return ans.toFixed(1);
  },
};
