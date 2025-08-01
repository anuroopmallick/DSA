// Problem Description
// Given a string A. Find the rank of the string amongst its permutations sorted lexicographically.
// Assume that no characters are repeated.

// Note: The answer might not fit in an integer, so return your answer % 1000003

// Problem Constraints
// 1 <= |A| <= 1000

// Input Format
// First argument is a string A.

// Output Format
// Return an integer denoting the rank of the given string.

// Example Input
// Input 1:
// A = "acb"
// Input 2:
// A = "a"

// Example Output
// Output 1:
// 2
// Output 2:
// 1

// Example Explanation
// Explanation 1:
// Given A = "acb".
// The order permutations with letters 'a', 'c', and 'b' :
// abc
// acb
// bac
// bca
// cab
// cba
// So, the rank of A is 2.
// Explanation 2:

// Given A = "a".
// Rank is clearly 1.

module.exports = {
  //param A : string
  //return an integer
  findRank: function (A) {
    let mod = 1000003;
    let n = A.length;
    let ans = 0;

    function findfactorial(num) {
      if (num == 0 || num == 1) return 1;

      return (num * findfactorial(num - 1)) % mod;
    }

    for (let i = 0; i < n - 1; ++i) {
      let count = 0;

      for (let j = i + 1; j < n; ++j) {
        if (A[j] < A[i]) count++;
      }

      ans += (count * findfactorial(n - i - 1)) % mod;
    }

    return (ans + 1) % mod;
  },
};
