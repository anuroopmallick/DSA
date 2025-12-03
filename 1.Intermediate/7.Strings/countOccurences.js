//Find the number of occurrences of bob in string A consisting of lowercase English alphabets.

function solve(A) {
  let ans = 0;

  for (let i = 1; i < A.length - 1; ++i) {
    if (A[i] == "o" && A[i - 1] == "b" && A[i + 1] == "b") {
      ans += 1;
    }
  }

  return ans;
}
