// Problem Description

// Given two integer arrays A and B of size N each which represent values and weights 
// associated with N items respectively.
// Also given an integer C which represents knapsack capacity.
// Find out the maximum value subset of A such that sum of the weights of this subset is smaller than or equal to C.
// NOTE:
//     You cannot break an item, either pick the complete item, or don’t pick it (0-1 property).

// Problem Constraints
// 1 <= N <= 103
// 1 <= C <= 103
// 1 <= A[i], B[i] <= 103

// Input Format
// First argument is an integer array A of size N denoting the values on N items.
// Second argument is an integer array B of size N denoting the weights on N items.
// Third argument is an integer C denoting the knapsack capacity.

// Output Format
// Return a single integer denoting the maximum value subset of A such that sum of the weights of this subset is smaller than or equal to C.

// Example Input
// Input 1:
//  A = [60, 100, 120]
//  B = [10, 20, 30]
//  C = 50

// Input 2:
//  A = [10, 20, 30, 40]
//  B = [12, 13, 15, 19]
//  C = 10

// Example Output
// Output 1:
//  220
// Output 2:
//  0

// Example Explanation
// Explanation 1:
//  Taking items with weight 20 and 30 will give us the maximum value i.e 100 + 120 = 220
// Explanation 2:
//  Knapsack capacity is 10 but each item has weight greater than 10 so no items can be considered in the knapsack therefore answer is 0.




function knapSack(W, wt, val, n) {
    let i, w;
    let K = new Array(n + 1);

    // Build table K[][] in bottom up manner
    for (i = 0; i <= n; i++) {
        K[i] = new Array(W + 1);
        for (w = 0; w <= W; w++) {
            if (i == 0 || w == 0)
                K[i][w] = 0;
            else if (wt[i - 1] <= w)
                K[i][w] = Math.max(val[i - 1] +
                    K[i - 1][w - wt[i - 1]],
                    K[i - 1][w]);
            else
                K[i][w] = K[i - 1][w];
        }
    }

    return K[n][W];
}
module.exports = {
    //param A : array of integers
    //param B : array of integers
    //param C : integer
    //return an integer
    solve: function (A, B, C) {
        return knapSack(C, B, A, A.length);
    }
};