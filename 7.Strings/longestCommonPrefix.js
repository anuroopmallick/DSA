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
// TC - > o(n * m)
// optimisations ->
// early exit o (n * m)

// Binary search
// o (m log n)

// ['flower', 'flow', 'fly']

// Early exit
function longestCommonPrefix(strs) {
  let string = "";
  let stringLength = strs[0].length;

  for (let i = 1; i < strs.length; ++i) {
    stringLength = Math.min(strs[i].length, stringLength);
  }

  for (let i = 0; i < stringLength; ++i) {
    let char = strs[0][i];

    for (let j = 1; j < strs.length; ++j) {
      if (strs[j][i] !== char) {
        return string;
      }
    }

    string += char;
  }

  return string;
}

// Binary search
module.exports = {
  //param A : array of strings
  //return a strings
  longestCommonPrefix: function (A) {
    let stringLength = A[0].length;

    for (let i = 1; i < A.length; ++i) {
      stringLength = Math.min(A[i].length, stringLength);
    }

    let l = 0;
    let r = stringLength;

    while (l <= r) {
      let mid = Math.floor((l + r) / 2);

      if (ifComminPrefix(A, mid)) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }

    return A[0].substring(0, Math.floor((l + r) / 2));

    function ifComminPrefix(A, length) {
      let substring = A[0].substring(0, length);

      for (let i = 0; i < A.length; ++i) {
        if (!A[i].startsWith(substring)) return false;
      }

      return true;
    }
  },
};
