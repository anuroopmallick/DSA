// Problem Description
// Given two strings A and B, count the number of unique ways in string A to form a subsequence 
// that is identical to string B.

// A subsequence of a string is a new string formed from the original string by deleting some 
// (can be none) of the characters without disturbing the relative positions of the remaining 
// characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).

// Since the answer can be very large, return the result modulo 109 + 7.

// Problem Constraints
// 1 <= |A|, |B| <= 1000

// Input Format
// The first argument is a string A.
// The second argument is a string B.

// Output Format
// Return an integer representing the number of distinct subsequences of A which equal B, modulo 109 + 7.

// Example Input
// Input 1:

// A = "abc"
// B = "abc"

// Input 2:

// A = "rabbbit"
// B = "rabbit"

// Example Output
// Output 1:
// 1

// Output 2:
// 3

// Example Explanation
// Explanation 1:
//     Both strings are equal. There is exactly 1 way to form "abc"
//     as a subsequence of "abc" — take all characters.

//     Result: 1

// Explanation 2:
//     The string A = "rabbbit" has 3 'b' characters.
//     To form B = "rabbit", we need exactly 2 'b' characters.
//     We can remove any one of the 3 'b' characters:

//     1. "ra_bbit" (remove 1st 'b')
//     2. "rab_bit" (remove 2nd 'b')
//     3. "rabb_it" (remove 3rd 'b')

//     "_" marks the removed character.

//     Result: 3


module.exports = {
    //param A : string
    //param B : string
    //return an integer
    numDistinct : function(A, B) {
        let m = A.length, n = B.length;
        let MOD = 1000000007;
        let dp = Array.from({length: m + 1}, () => new Array(n + 1).fill(0));
        for (let i = 0; i <= m; i++) dp[i][0] = 1;

        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                dp[i][j] = dp[i - 1][j];
                if (A[i - 1] === B[j - 1]) {
                    dp[i][j] = (dp[i][j] + dp[i - 1][j - 1]) % MOD;
                }
            }
        }
        return dp[m][n] % MOD;
    }
};