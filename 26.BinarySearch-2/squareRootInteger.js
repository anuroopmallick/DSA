// Given an integer A. Compute and return the square root of A.
// If A is not a perfect square, return floor(sqrt(A)).

// NOTE:
//    The value of A*A can cross the range of Integer.
//    Do not use the sqrt function from the standard library.
//    Users are expected to solve this in O(log(A)) time.

module.exports = {
  //param A : an integer
  //return an integer
  sqrt: function (A) {
    let l = 0;
    let r = A;

    let ans = 0;

    while (l <= r) {
      let mid = Math.floor((l + r) / 2);

      if (mid * mid > A) {
        r = mid - 1;
      } else {
        l = mid + 1;
        ans = mid;
      }
    }

    return ans;
  },
};
