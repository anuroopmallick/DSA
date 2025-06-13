//Given the array of strings A, you need to find the longest string S, which is the prefix of ALL the strings in the array.
//
//The longest common prefix for a pair of strings S1 and S2 is the longest string S which is the prefix of both S1 and S2.
//
//Example: the longest common prefix of "abcdefgh" and "abcefgh" is "abc".

function solve(A) {
  let commonPrefix = "";
  let minLength = A[0].length;
  let currChar = "";

  for (let i = 1; i < A.length; ++i) {
    minLength = Math.min(A[i].length, minLength);
  }

  for (let i = 0; i < minLength; ++i) {
    currChar = A[0][i];
    let isCommon = true;
    for (let j = 0; j < A.length; ++j) {
      if (A[j][i] != currChar) {
        isCommon = false;
      }
    }

    if (isCommon) {
      commonPrefix += A[0][i];
    } else {
      break;
    }
  }

  return commonPrefix;
}
