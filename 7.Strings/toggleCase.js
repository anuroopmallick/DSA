//You are given a character string A having length N, consisting of only lowercase and uppercase latin letters.
//You have to toggle case of each character of string A. For e.g 'A' is changed to 'a', 'e' is changed to 'E', etc.

function solve(A) {
  let n = A.length;
  let newString = "";
  let currChar = "";

  for (let i = 0; i < n; ++i) {
    if (A.charCodeAt(i) >= 65 && A.charCodeAt(i) <= 92) {
      currChar = String.fromCharCode(A.charCodeAt(i) + 32);
    } else {
      currChar = String.fromCharCode(A.charCodeAt(i) - 32);
    }
    newString += currChar;
  }

  return newString;
}
