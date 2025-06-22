// Given a binary string A. It is allowed to do at most one swap between any 0 and 1. Find and return the length of the longest
// consecutive 1’s that can be achieved.

// Input Format
// The only argument given is string A.
// Output Format

// Return the length of the longest consecutive 1’s that can be achieved.
// Constraints

// 1 <= length of string <= 1000000
// A contains only characters 0 and 1.
// For Example

// Input 1:
//     A = "111000"
// Output 1:
//     3

// Input 2:
//     A = "111011101"
// Output 2:
//     7

function solve(A) {
  let count = 0;
  let ans = 0;

  for (let j of A) {
    if (j == "1") {
      count++;
    }
  }

  if (count == A.length) {
    return count;
  } else if (count == 0) {
    return 0;
  }

  for (let i = 0; i < A.length; ++i) {
    let l = 0;
    let r = 0;
    let length = 0;

    if (A[i] == "0") {
      for (let k = i - 1; k >= 0; --k) {
        if (A[k] == "1") {
          ++l;
        } else {
          break;
        }
      }

      for (let k = i + 1; k < A.length; ++k) {
        if (A[k] == "1") {
          ++r;
        } else {
          break;
        }
      }
    }

    length = l + r + 1;
    if (length > count) {
      length = count;
    }

    ans = Math.max(ans, length);
  }

  return ans;
}
