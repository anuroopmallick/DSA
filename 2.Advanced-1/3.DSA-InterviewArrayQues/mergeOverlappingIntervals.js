// Problem Description
// Given a collection of intervals, merge all overlapping intervals.

// Problem Constraints
// 1 <= Total number of intervals <= 100000.

// Input Format
// First argument is a list of intervals.

// Output Format
// Return the sorted list of intervals after merging all the overlapping intervals.

// Example Input
// Input 1:
// [1,3],[2,6],[8,10],[15,18]

// Example Output
// Output 1:
// [1,6],[8,10],[15,18]

// Example Explanation
// Explanation 1:
// Merge intervals [1,3] and [2,6] -> [1,6].
// so, the required answer after merging is [1,6],[8,10],[15,18].
// No more overlapping intervals present.

function solve(A) {
  let n = A.length;

  let array = A.sort((a, b) => a[0] - b[0]);

  let currS = A[0][0];
  let currE = A[0][1];
  let ans = [];

  for (let i = 1; i < n; ++i) {
    if (array[i][0] <= currE) {
      currE = Math.max(currE, A[i][1]);
    } else {
      ans.push([currS, currE]);
      currS = array[i][0];
      currE = array[i][1];
    }
  }

  ans.push([currS, currE]);

  return ans;
}
