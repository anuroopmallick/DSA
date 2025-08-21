// You are given three positive integers, A, B, and C.
// Any positive integer is magical if divisible by either B or C.
// Return the Ath smallest magical number. Since the answer may be very large, return modulo 109 + 7.
// Note: Ensure to prevent integer overflow while calculating.

module.exports = {
  //param A : integer
  //param B : integer
  //param C : integer
  //return an integer
  solve: function (A, B, C) {
    let ans = 0;

    function gcd(a, b) {
      if (b == 0) {
        return a;
      }
      return gcd(b, a % b);
    }

    function lcm(x, y) {
      return Math.abs(x * y) / gcd(x, y);
    }

    let l = 1;
    r = Math.min(A * B, A * C);

    while (l <= r) {
      let mid = Math.floor((l + r) / 2);

      let count =
        Math.floor(mid / B) + Math.floor(mid / C) - Math.floor(mid / lcm(B, C));

      if (count == A) {
        ans = mid;
        r = mid - 1;
      } else if (count < A) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }

    return ans % (10 ** 9 + 7);
  },
};
