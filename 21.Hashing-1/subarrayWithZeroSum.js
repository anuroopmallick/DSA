// Do not write code to include libraries, main() function or accept any input from the console.
// Initialization code is already written and hidden from you. Do not write code for it again.
module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    // Just write your code below to complete the function. Required input is available to you as the function arguments.
    // Do not print the result or any output. Just return the result via this function.

    let PFa = new Array(A.length).fill(0);
    PFa[0] = A[0];
    for (let i = 1; i < A.length; ++i) {
      PFa[i] = A[i] + PFa[i - 1];
    }

    let freq = { 0: 1 };

    for (let i = 0; i < A.length; ++i) {
      if (freq[PFa[i]]) freq[PFa[i]]++;
      else freq[PFa[i]] = (freq[PFa[i]] || 0) + 1;
    }

    for (let key in freq) {
      if (freq[key] > 1) return 1;
    }

    return 0;
  },
};
