// Problem Description
// You have a set of non-overlapping intervals. You are given a new interval [start, end], insert this new interval into the set of
// intervals (merge if necessary). You may assume that the intervals were initially sorted according to their start times.

// Problem Constraints
// 0 <= |intervals| <= 105

// Input Format
// First argument is the vector of intervals
// second argument is the new interval to be merged

// Output Format
// Return the vector of intervals after merging

// Example Input
// Input 1:
// Given intervals [1, 3], [6, 9] insert and merge [2, 5] .
// Input 2:
// Given intervals [1, 3], [6, 9] insert and merge [2, 6] .

// Example Output
// Output 1:
//  [ [1, 5], [6, 9] ]
// Output 2:
//  [ [1, 9] ]

// Example Explanation
// Explanation 1:
// (2,5) does not completely merge the given intervals
// Explanation 2:
// (2,6) completely merges the given intervals

function solve(intervals, new_interval) {
  let n = intervals.length;

  let array = intervals.sort((a, b) => a[0] - b[0]);

  new_interval = new_interval.sort((a, b) => a - b);

  let ans = [];

  let mergeS = new_interval[0];
  let mergeE = new_interval[1];
  let printed = true;

  for (let i = 0; i < n; ++i) {
    if (array[i][1] < new_interval[0]) {
      ans.push([array[i][0], array[i][1]]);
    } else if (array[i][0] > mergeE) {
      ans.push([mergeS, mergeE]);
      printed = false;
      for (let k = i; k < n; ++k) {
        ans.push([array[k][0], array[k][1]]);
      }
      break;
    } else {
      mergeS = Math.min(mergeS, array[i][0]);
      mergeE = Math.max(mergeE, array[i][1]);
    }
  }

  if (printed) {
    ans.push([mergeS, mergeE]);
  }

  return ans;
}
