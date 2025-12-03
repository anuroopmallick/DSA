module.exports = {
  //param A : integer
  //return a array of array of integers
  solve: function (A) {
    let array = [];

    for (let i = 0; i < A; ++i) {
      let arr = new Array(A).fill(0);
      array.push(arr);
    }

    for (let i = 0; i < A; ++i) {
      array[i][0] = 1;
      array[i][i] = 1;
    }

    for (let i = 0; i < A; ++i) {
      for (let j = 1; j < i; ++j) {
        array[i][j] = array[i - 1][j - 1] + array[i - 1][j];
      }
    }

    return array;
  },
};
