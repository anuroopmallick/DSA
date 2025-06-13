//Given a string A of size N, find and return the longest palindromic substring in A.
//
//Substring of string A is A[i...j] where 0 <= i <= j < len(A)
//
//Palindrome string:
//A string which reads the same backwards. More formally, A is palindrome if reverse(A) = A.
//
//Incase of conflict, return the substring which occurs first ( with the least starting index).

function solve(A) {
  let max = 0;
  let index1 = 0;
  let index2 = 0;
  let string = "";

  function findPalindrome(i, j) {
    while (i >= 0 && j < A.length && A[i] === A[j]) {
      --i;
      ++j;
    }

    if (j - i - 1 > max && j - i - 1 > 0) {
      max = j - i - 1;
      index1 = i + 1;
      index2 = j - 1;
    }
  }

  // for odd length string
  for (let i = 0; i < A.length; ++i) {
    var c1 = i;
    var c2 = i;
    let length = findPalindrome(c1, c2);
  }

  // for even length string
  for (let i = 0; i < A.length - 1; ++i) {
    var c1 = i;
    var c2 = i + 1;
    let length = findPalindrome(c1, c2);
  }

  if (max <= 0) {
    return;
  }

  for (let i = index1; i <= index2; ++i) {
    string += A[i];
  }

  return string;
}
