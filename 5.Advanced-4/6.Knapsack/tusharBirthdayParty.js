// Problem Description

// As it is Tushar's Birthday on March 1st, he decided to throw a party to all his friends at 
// TGI Fridays in Pune. Given are the eating capacity of each friend, filling capacity of each
//  dish and cost of each dish. A friend is satisfied if the sum of the filling capacity of 
// dishes he ate is equal to his capacity. Find the minimum cost such that all of Tushar's 
// friends are satisfied (reached their eating capacity).

// NOTE:
// Each dish is supposed to be eaten by only one person. Sharing is not allowed.
// Each friend can take any dish unlimited number of times.
// There always exists a dish with filling capacity 1 so that a solution always exists.

// Problem Constraints
// |A| <= 1000
// |B| <= 1000
// |C| <= 1000

// Input Format
// First Argument is vector A, denoting eating capacities
// Second Argument is vector B, denoting filling capacities
// Third Argument is vector C, denoting cost

// Output Format
// Return a single integer, the answer to the problem

// Example Input
// Input 1:
// A = [2, 4, 6]
// B = [2, 1, 3]
// C = [2, 5, 3]

// Input 2:
// A = [2]
// B = [1]
// C = [2]

// Example Output
// Output 1:
// 12
// Output 2:
// 4

// Example Explanation
// Explanation 1
// First friend takes dish 1, Second friend takes dish 1 twice and third friend takes dish 3 twice.
// So 2 + 2*2 + 3*2 = 12.

// Explanation 2:
// Only way is to take 2 dishes of cost 2, hence 4.


module.exports = {
    //param A : array of integers
    //param B : array of integers
    //param C : array of integers
    //return an integer
    solve: function (A, B, C) {
        let dish = [];
        let n = C.length;
        for (let i = 0; i < n; i++)
            dish.push([B[i], C[i]]);
        let m = -1;
        for (let i = 0; i < A.length; i++) {
            m = Math.max(m, A[i]);
        }
        let dp = new Array(m + 1);
        for (let i = 0; i <= m; i++) {
            dp[i] = new Array(n + 1);
        }
        //maximum capacity among friends

        // dp[highest capacity][no. of dishes]
        for (let i = 0; i <= m; i++) {
            for (let j = 0; j <= n; j++) {
                //if capacity of friend is 0
                if (i == 0) dp[i][j] = 0;
                //if no dish is remaining to choose from
                else if (j == 0) dp[i][j] = Infinity;
                else {
                    //if i-th person can eat jth dish
                    if (i >= dish[j - 1][0]) {
                        //As one dish can be taken multiple times, we have used 
                        //dp[ i-dish[j-1].first ][ j ] and not dp[ i-dish[j-1].first ][ j-1 ]. 

                        dp[i][j] = Math.min(dp[i][j - 1], dp[i - dish[j - 1][0]][j] + dish[j - 1][1]);
                    } else dp[i][j] = dp[i][j - 1];
                }
            }
        }

        // Add for each friend independently
        let ans = 0;
        for (let i = 0; i < A.length; i++) {
            ans += dp[A[i]][n];
        }

        return ans;
    }
};