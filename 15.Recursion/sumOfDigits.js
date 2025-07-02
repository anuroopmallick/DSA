// time - o(log A)
// space - o(log A)

module.exports = {
  //param A : integer
  //return an integer
  solve: function (A) {
    function sumAll(number) {
      let value = number % 10;
      let nextValue = Math.floor(number / 10);

      if (nextValue < 10) {
        return nextValue + value;
      }

      return sumAll(nextValue) + value;
    }

    return sumAll(A);
  },
};
