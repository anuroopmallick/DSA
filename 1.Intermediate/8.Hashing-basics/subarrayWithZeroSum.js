// Do not write code to include libraries, main() function or accept any input from the console.
// Initialization code is already written and hidden from you. Do not write code for it again.
module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    // Just write your code below to complete the function. Required input is available to you as the function arguments.
    // Do not print the result or any output. Just return the result via this function.
    let map = {};
    let PFa = [];
    PFa.push(A[0]);

    for (let i = 1; i < A.length; ++i) {
      PFa[i] = A[i] + PFa[i - 1];
    }

    for (let j = 0; j < A.length; ++j) {
      if (PFa[j] == 0) {
        return 1;
      }
      map[PFa[j]] = (map[PFa[j]] || 0) + 1;
    }

    for (let key in map) {
      if (map[key] > 1) {
        return 1;
      }
    }
    return 0;
  },
};
