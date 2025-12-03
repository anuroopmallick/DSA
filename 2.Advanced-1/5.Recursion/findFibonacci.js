// TC - o(2^n) -> number of recursive calls - Each call makes two recursive calls, forming a binary tree of calls with ~2ⁿ nodes
// SC = o(n) -> Space taken by call stack

module.exports = {
  //param A : integer
  //return an integer
  findAthFibonacci: function (A) {
    function fibb(value) {
      if (value <= 1) {
        return value;
      }

      return fibb(value - 1) + fibb(value - 2);
    }

    return fibb(A);
  },
};
