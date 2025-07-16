// Problem Description
// Given an integer array A of size N. You have to delete one element such that the GCD(Greatest common divisor)
// of the remaining array is maximum.Find the maximum value of GCD.

// Problem Constraints
// 2 <= N <= 105
// 1 <= A[i] <= 109

// Input Format
// First argument is an integer array A.

// Output Format
// Return an integer denoting the maximum value of GCD.

// Example Input
// Input 1:
//  A = [12, 15, 18]
// Input 2:
//  A = [5, 15, 30]

// Example Output
// Output 1:
//  6
// Output 2:
//  15

// Example Explanation
// Explanation 1:
//  If you delete 12, gcd will be 3.
//  If you delete 15, gcd will be 6.
//  If you delete 18, gcd will 3.
//  Maximum value of gcd is 6.
// Explanation 2:

//  If you delete 5, gcd will be 15.
//  If you delete 15, gcd will be 5.
//  If you delete 30, gcd will be 5.
//  Maximum value of gcd is 15.

module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    const n = A.length;

    function gcd(A, B) {
      if (B == 0) return A;

      return gcd(B, A % B);
    }

    let PFa = new Array(A.length).fill(0);
    let SFa = new Array(A.length).fill(0);

    PFa[0] = A[0];
    for (let i = 1; i < A.length; ++i) {
      PFa[i] = gcd(A[i], PFa[i - 1]);
    }

    SFa[n - 1] = A[n - 1];
    for (let i = n - 2; i >= 0; --i) {
      SFa[i] = gcd(A[i], SFa[i + 1]);
    }

    let ans = Math.max(SFa[1], PFa[n - 2]);

    for (let i = 1; i < n - 1; ++i) {
      ans = Math.max(ans, gcd(PFa[i - 1], SFa[i + 1]));
    }

    return ans;
  },
};
