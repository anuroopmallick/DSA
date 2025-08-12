// Do not write code to include libraries, main() function or accept any input from the console.
// Initialization code is already written and hidden from you. Do not write code for it again.
module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return a array of integers
  solve: function (A, B) {
    // Just write your code below to complete the function. Required input is available to you as the function arguments.
    // Do not print the result or any output. Just return the result via this function.
    let freq = {};

    A.map((element) => {
      if (freq[element]) {
        freq[element]++;
      } else {
        freq[element] = (freq[element] || 0) + 1;
      }
    });

    let ans = [];

    for (let i of B) {
      if (freq[i]) {
        ans.push(i);
        freq[i]--;
      }
    }

    return ans;
  },
};
