// Problem Description
// Given an array of positive integers A and an integer B, find and return first continuous subarray which adds to B.
// If the answer does not exist return an array with a single integer "-1".
// First sub-array means the sub-array for which starting index in minimum.

// Problem Constraints
// 1 <= length of the array <= 100000
// 1 <= A[i] <= 109
// 1 <= B <= 109

// Input Format
// The first argument given is the integer array A.
// The second argument given is integer B.

// Output Format
// Return the first continuous sub-array which adds to B and if the answer does not exist return an array with a single integer "-1".

// Example Input
// Input 1:
//  A = [1, 2, 3, 4, 5]
//  B = 5
// Input 2:
//  A = [5, 10, 20, 100, 105]
//  B = 110

// Example Output
// Output 1:
//  [2, 3]
// Output 2:
//  [-1]

// Example Explanation
// Explanation 1:
//  [2, 3] sums up to 5.
// Explanation 2:

//  No subarray sums up to required number.
function solve(A, B) {
  const s = { 0: -1 }; // Map of prefix sum to index
  const PFa = Array(A.length).fill(0);

  PFa[0] = A[0];

  // Build prefix sum array
  for (let i = 1; i < A.length; i++) {
    PFa[i] = PFa[i - 1] + A[i];
  }

  for (let i = 0; i < A.length; i++) {
    const target = PFa[i] - B;

    if (s.hasOwnProperty(target)) {
      const startIndex = s[target] + 1;
      const endIndex = i + 1; // slice is non-inclusive at the end
      return A.slice(startIndex, endIndex);
    }

    // Store current prefix sum and index
    if (!s.hasOwnProperty(PFa[i])) {
      s[PFa[i]] = i;
    }
  }

  return [-1];
}
