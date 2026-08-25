// Problem Description

// Given an array of non-negative integers A where each element represents your maximum jump length at that position.
// The initial position is the first index of the array, and the goal is to reach the last index of the array with the minimum number of jumps.





// Note: If it is not possible to reach the last index, return -1 instead.







// Problem Constraints

// 1 <= length of the array <= 100000
// 0 <= A[i] <= 109



// Input Format

// The only argument given is the integer array A.



// Output Format

// Return the minimum number of jumps to reach the last index or -1 if it is not possible.



// Example Input

// Input 1:

// A = [1, 2, 3, 4, 5]
// Input 2:

// A = [5, 17, 100, 11]


// Example Output

// Output 1:

// 3
// Output 2:

// 1


// Example Explanation

// Explanation 1:

// Initial position is the first index.
// From index 0 we can only jump to index 1 as first element is 0.
// From index 1 we can jump to index 2 or index 3.
// From index 2 we can reach the last index i.e. 4 in 1 jump.
// so, the minimum number of jumps required is 3.

module.exports = {
    solve: function (A) {
        let curStep = 0, maxPos = 0, curMax = 0;
        // maxPos indicates the farthest reachable position using curStep steps
        // curMax indicates the current farthest reachable position.
        for (let i = 0; i < A.length; i++) {
            if (i > maxPos) 
                return -1;
            if (curMax < i + A[i])
                curMax = i + A[i];
            if (maxPos >= A.length - 1) 
                return curStep;
            if (i == maxPos) {
                curStep += 1;
                maxPos = curMax;
            }
        }
    },
};
