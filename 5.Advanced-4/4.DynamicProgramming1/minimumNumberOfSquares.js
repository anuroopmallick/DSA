// Problem Description
// Given an integer A. Return minimum count of numbers, sum of whose squares is equal to A.

// Problem Constraints
// 1 <= A <= 105

// Input Format
// First and only argument is an integer A.

// Output Format
// Return an integer denoting the minimum count.

// Example Input
// Input 1:
//  A = 6
// Input 2:
//  A = 5

// Example Output
// Output 1:
//  3
// Output 2:
//  2

// Example Explanation
// Explanation 1:
//  Possible combinations are : (12 + 12 + 12 + 12 + 12 + 12) and (12 + 12 + 22).
//  Minimum count of numbers, sum of whose squares is 6 is 3. 

// Explanation 2:
//  We can represent 5 using only 2 numbers i.e. 12 + 22 = 5

// TC : n root(n)
// SC: n

module.exports = { 
 //param A : integer
 //return an integer
	countMinSquares : function(A){

        let dp = new Array(A+1).fill(null)

        function findMinSquareNumbers(num) {

            if(num == 0) return 0

            if(dp[num] !== null) return dp[num]

            let ans = Number.POSITIVE_INFINITY

            for(let i = 1 ; i * i <= num ; i++) {
                ans = Math.min(ans, findMinSquareNumbers(num - (i ** 2)))
            }

            return dp[num] = ans + 1

        }

        findMinSquareNumbers(A)

        return dp[A]

	}
};

// TC : n root(n)
// SC: n

module.exports = { 
 //param A : integer
 //return an integer
	countMinSquares : function(A){

        let dp = new Array(A+1).fill(null)

        dp[0] = 0

        for(let i = 1 ; i <= A; i++) {

            let ans = Number.POSITIVE_INFINITY

            for(let x = 1 ; x * x <= i; x++) {
                ans = Math.min(ans, dp[i - (x ** 2)])
            }

            dp[i] = ans + 1
        }

        return dp[A]

	}
};

// TC : n root(n)
// SC: n
