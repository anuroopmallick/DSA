// Problem Description
// You are given a binary string A(i.e., with characters 0 and 1) consisting of characters A1, A2, ..., AN.
// In a single operation, you can choose two indices, L and R, such that 1 ≤ L ≤ R ≤ N and flip the characters AL, AL+1, ..., AR.
// By flipping, we mean changing character 0 to 1 and vice-versa.
//
//
//
// Your aim is to perform ATMOST one operation such that in the final string number of 1s is maximized.
// If you don't want to perform the operation, return an empty array. Else, return an array consisting of two elements denoting L and R.
// If there are multiple solutions, return the lexicographically smallest pair of L and R.
//
// NOTE: Pair (a, b) is lexicographically smaller than pair (c, d) if a < c or, if a == c and b < d.
//
//
// Problem Constraints
// 1 <= size of string <= 100000
//
// Input Format
// First and only argument is a string A.
//
//
// Output Format
// Return an array of integers denoting the answer.
//
//
//
// Example Input
//
// Input 1:
// A = "010"
//
// Input 2:
// A = "111"
//
//
// Example Output
//
// Output 1:
// [1, 1]
//
// Output 2:
// []
//
//
// Example Explanation
//
// Explanation 1:
// A = "010"
//
// Pair of [L, R] | Final string
// _______________|_____________
// [1 1]          | "110"
// [1 2]          | "100"
// [1 3]          | "101"
// [2 2]          | "000"
// [2 3]          | "001"
//
// We see that two pairs [1, 1] and [1, 3] give same number of 1s in final string. So, we return [1, 1].
// Explanation 2:
//
// No operation can give us more than three 1s in final string. So, we return empty array [].

// in this approach we are using kadence algo to find max subarray sum ,
// where 0 contributes +1 and 1 contributes -1, as that will be the case when we flip

function solve(A) {
  let currSum = 0;
  let max = 0;
  let l = 0;
  let r = 0;
  let templ = 0;

  for (let i = 0; i < A.length; ++i) {
    if (A[i] == "1") {
      currSum -= 1;
    } else {
      currSum += 1;
    }

    if (currSum < 0) {
      currSum = 0;
      templ = i + 1;
    }

    if (currSum > max) {
      r = i + 1;
      l = templ + 1;
    }

    max = Math.max(max, currSum);
  }

  if (l == 0 && r == 0) {
    return [];
  } else {
    return [l, r];
  }
}
