// PROBLEM STATEMENT
// Implement pow(A, B) % C.
// In other words, given A, B and C, Find (AB % C).
// Note: The remainders on division cannot be negative. In other words, make sure the answer you return is non-negative.

// Do not write code to include libraries, main() function or accept any input from the console.
// Initialization code is already written and hidden from you. Do not write code for it again.
module.exports = {
  //param A : integer
  //param B : integer
  //param C : integer
  //return an integer
  pow: function (A, B, C) {
    // Just write your code below to complete the function. Required input is available to you as the function arguments.
    // Do not print the result or any output. Just return the result via this function.

    if (B == 0) return 1 % C;
    let ans = 1n,
      base = BigInt(A),
      c1 = BigInt(C);

    while (B > 0) {
      if (B % 2 == 1) {
        ans = (ans * base) % c1;
        B--;
      } else {
        base = (base * base) % c1;
        B /= 2;
      }
    }
    if (ans < 0) ans = (ans + c1) % c1;
    return Number(ans);
  },
};

// 2^10
// B = 10 , base = 2 * 2 = 4
// B = 5  , ans = 1 * 4 = 4
// B = 4  , base = 4 * 4 = 16
// B = 2  , base = 16 * 16 = 256
// B = 1  , ans = 4 * 256 = 1024
