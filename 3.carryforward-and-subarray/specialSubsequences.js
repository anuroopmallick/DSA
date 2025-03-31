// Q. You have given a string A having Uppercase English letters. You have to find how many times
// subsequence "AG" is there in the given string. NOTE: Return the answer modulo 10^9 + 7 as the answer can be very large.

//brute force, TC - o(n^2) , SC - o(1)
function solve(A) {
  let n = A.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (A[i] == "A") {
      for (let j = i + 1; j < n; j++) {
        if (A[j] == "G") {
          count += 1;
        }
      }
    }
  }

  return count;
}

// optimised using carryforward
function optimised(A) {
  let n = A.length;
  let ans = 0;
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (A[i] == "A") {
      count += 1;
    }

    if (A[i] == "G") {
      ans += count;
    }
  }

  return ans % (10 ** 9 + 7);
}
