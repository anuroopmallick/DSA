module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let distinctElement = new Set();

    A.map((e) => distinctElement.add(e));

    return distinctElement.size;
  },
};
