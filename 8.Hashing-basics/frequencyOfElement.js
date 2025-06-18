// First argument A is an array of integers.
// Second argument B is an array of integers denoting the queries.

// Output Format
// Return an array of integers containing the frequency of each learner in B as found in array A.
//
// Example Input

// Input 1:
// A = [1, 2, 1, 1]
// B = [1, 2]
// Input 2:
// A = [2, 5, 9, 2, 8]
// B = [3, 2]

function solve(A, B) {
  let freq = {};
  let ans = [];

  for (let i = 0; i < A.length; ++i) {
    freq[A[i]] = (freq[A[i]] || 0) + 1;
  }

  for (let j = 0; j < B.length; ++j) {
    if (freq[B[j]]) {
      ans.push(freq[B[j]]);
    } else {
      ans.push(0);
    }
  }

  return ans;
}
