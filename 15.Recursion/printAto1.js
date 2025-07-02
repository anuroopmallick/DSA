module.exports = {
  //param A : integer
  solve: function (A) {
    function printAll(number) {
      if (number > A) {
        return;
      }

      printAll(number + 1);

      process.stdout.write(number + " ");
    }

    printAll(1);
    process.stdout.write("\n");
  },
};
