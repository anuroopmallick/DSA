// Problem Description

// Given a M x N grid A of integers, find a path from top left to bottom right which 
// minimizes the sum of all numbers along its path.

// Return the minimum sum of the path.
// NOTE: You can only move either down or right at any point in time.

// Problem Constraints
// 1 <= M, N <= 2000
// -1000 <= A[i][j] <= 1000

// Input Format
// First and only argument is a 2-D grid A.

// Output Format
// Return an integer denoting the minimum sum of the path.

// Example Input
// Input 1:
//  A = [
//        [1, 3, 2]
//        [4, 3, 1]
//        [5, 6, 1]
//      ]

// Input 2:
//  A = [
//        [1, -3, 2]
//        [2, 5, 10]
//        [5, -5, 1]
//      ]

// Example Output
// Output 1:
//  8
// Output 2:
//  -1

// Example Explanation
// Explanation 1:
//  The path will be: 1 -> 3 -> 2 -> 1 -> 1.

// Input 2:
//  The path will be: 1 -> -3 -> 5 -> -5 -> 1.

module.exports = {
    //param A : array of array of integers
    //return an integer
    minPathSum: function (grid) {
        if (grid.length === 0 || grid[0].length === 0) {
            return Infinity;
        }
        let height = grid.length,
            width = grid[0].length;
        for (let row = height - 1; row >= 0; row--) {
            for (let col = width - 1; col >= 0; col--) {
                if (row === height - 1 && col === width - 1) {
                    continue;
                }
                let right = col < width - 1 ? grid[row][col + 1] : Infinity;
                let bottom = row < height - 1 ? grid[row + 1][col] : Infinity;
                grid[row][col] = grid[row][col] + Math.min(right, bottom);
            }
        }
        return grid[0][0];
    }
};
