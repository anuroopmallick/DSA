// Problem Description

// Given a 2-D binary matrix A of size N x M filled with 0's and 1's, find the largest 
// rectangle containing only ones and return its area.

// Problem Constraints
// 1 <= N, M <= 100

// Input Format
// The first argument is a 2-D binary array A.

// Output Format
// Return an integer denoting the area of the largest rectangle containing only ones.

// Example Input
// Input 1:
//  A = [
//        [1, 1, 1]
//        [0, 1, 1]
//        [1, 0, 0] 
//      ]

// Input 2:
//  A = [
//        [0, 1, 0]
//        [1, 1, 1]
//      ] 

// Example Output
// Output 1:
//  4
// Output 2:
//  3

// Example Explanation
// Explanation 1:
//  As the max area rectangle is created by the 2x2 rectangle created by
//  (0, 1), (0, 2), (1, 1) and (1, 2).
// Explanation 2:
//  As the max area rectangle is created by the 1x3 rectangle created by 
// (1, 0), (1, 1) and (1, 2).



module.exports = {
    maximalRectangle: function (matrix) {
        const row = matrix.length;
        if (row === 0)
            return 0;
        const col = matrix[0].length,
            tempSum = new Array(row);

        function findMaxArea(arr) {
            let len = arr.length;
            if (len === 1)
                return arr[0];
            let newArr = [...arr];
            newArr.push(-1);
            len++;
            let stack = [],
                maxCount = Number.MIN_SAFE_INTEGER;
            for (let i = 0; i < len; i++) {
                let j = stack.length - 1;
                while (j >= 0 && newArr[stack[j]] >= newArr[i]) {
                    const h = newArr[stack[j]];
                    stack.pop();
                    j--;
                    const otherIndex = j >= 0 ? stack[j] : -1;
                    maxCount = Math.max(maxCount, h * (i - otherIndex - 1));
                }
                stack.push(i);
            }
            return maxCount;
        }

        for (let i = 0; i < row; i++) {
            tempSum[i] = +matrix[i][0];
        }

        let maxArea = findMaxArea(tempSum);
        for (let i = 1; i < col; i++) {
            for (let j = 0; j < row; j++) {
                if (matrix[j][i] == "0") {
                    tempSum[j] = 0;
                } else {
                    tempSum[j] += parseInt(matrix[j][i]);
                }
            }
            maxArea = Math.max(maxArea, findMaxArea(tempSum));
        }
        return maxArea;
    },
};

