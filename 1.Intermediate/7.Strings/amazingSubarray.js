//You are given a string S, and you have to find all the amazing substrings of S.
//
//An amazing Substring is one that starts with a vowel (a, e, i, o, u, A, E, I, O, U).

function solve(A) {
  let ans = 0;

  for (let i = 0; i < A.length; ++i) {
    if (
      A[i] == "a" ||
      A[i] == "e" ||
      A[i] == "i" ||
      A[i] == "o" ||
      A[i] == "u" ||
      A[i] == "A" ||
      A[i] == "E" ||
      A[i] == "I" ||
      A[i] == "O" ||
      A[i] == "U"
    ) {
      ans += A.length - i;
    }
  }

  return ans % 10003;
}
