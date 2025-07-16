// Problem Description
// Given an array of integers A, calculate the sum of A [ i ] % A [ j ] for all possible i, j pairs.
// Return sum % (109 + 7) as an output.

// Problem Constraints
// 1 <= length of the array A <= 105
// 1 <= A[i] <= 103

// Input Format
// The only argument given is the integer array A.

// Output Format
// Return a single integer denoting sum % (109 + 7).

// Example Input
// Input 1:
//  A = [1, 2, 3]
// Input 2:
//  A = [17, 100, 11]

// Example Output
// Output 1:
//  5
// Output 2:
//  61

// Example Explanation
// Explanation 1:
//  (1 % 1) + (1 % 2) + (1 % 3) + (2 % 1) + (2 % 2) + (2 % 3) + (3 % 1) + (3 % 2) + (3 % 3) = 5

module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let mod = 1e9 + 7;
    let ans = 0;
    let n = A.length;

    let freq = new Array(1001).fill(0);

    for (let i = 0; i < n; ++i) {
      freq[A[i]]++;
    }

    for (let i = 1; i <= 1000; ++i) {
      if (freq[i] == 0) continue;
      else {
        for (let j = 1; j <= 1000; ++j) {
          if (freq[j] == 0) continue;
          else {
            let value = j % i;
            let temp = freq[i] * freq[j] * value;
            ans = ((ans % mod) + (temp % mod)) % mod;
          }
        }
      }
    }

    return ans;
  },
};
