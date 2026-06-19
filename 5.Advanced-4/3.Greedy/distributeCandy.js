// Problem Description

// N children are standing in a line. Each child is assigned a rating value.

// You are giving candies to these children subjected to the following requirements:

// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.

// What is the minimum number of candies you must give?

// Problem Constraints

// 1 <= N <= 105
// -109 <= A[i] <= 109

// Input Format

// The first and only argument is an integer array A representing the rating of children.

// Output Format
// Return an integer representing the minimum candies to be given.

// Example Input
// Input 1:
//  A = [1, 2]

// Input 2:
//  A = [1, 5, 2, 1]

// Example Output
// Output 1:
//  3
// Output 2:
//  7

// Example Explanation

// Explanation 1:
//  The candidate with 1 rating gets 1 candy and candidate with rating 2 cannot get 1 candy as 1 is its neighbor. 
//  So rating 2 candidate gets 2 candies. In total, 2 + 1 = 3 candies need to be given out.

// Explanation 2:
//  Candies given = [1, 3, 2, 1]

module.exports = { 
 //param A : array of integers
 //return an integer
	candy : function(A){

        let prefix = new Array(A.length).fill(0)
        let suffix = new Array(A.length).fill(0)

        prefix[0] = 1
        for(let i = 1 ; i < A.length; i++) {
            if(A[i] > A[i-1]) {
                prefix[i] = prefix[i-1] + 1
            } else {
                prefix[i] = 1
            }
        }

        suffix[A.length - 1] = 1 
        for(let i = A.length - 2 ; i >= 0 ; i--) {
            if(A[i] > A[i+1]) {
                suffix[i] = suffix[i+1] + 1
            } else {
                suffix[i] = 1 
            }
        }


        let ans = 0

        for ( let i = 0 ; i < A.length ; i++) {
            ans += Math.max(prefix[i], suffix[i])
        }

        return ans 
	}
};
