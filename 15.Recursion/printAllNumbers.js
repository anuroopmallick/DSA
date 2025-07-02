// tc - o(n)
// sc - o(n)

module.exports = {
  //param A : integer
  solve: function (A) {
    function printAll(number) {
      if (number == 0) {
        return;
      }

      printAll(number - 1);

      process.stdout.write(number + " ");
    }

    printAll(A);
    process.stdout.write("\n");
  },
};
