module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let maxLength = 0;

    let map = { 0: 1 };

    // let PFa = new Array(A.length).fill(0);
    // PFa[0] = A[0];
    // for (let i = 1; i < A.length; ++i) {
    //   PFa[i] = PFa[i - 1] + A[i];
    // }

    let currValue = BigInt(0);

    for (let i = 0; i < A.length; ++i) {
      currValue += A[i];

      if (currValue == 0 && i + 1 > maxLength) {
        maxLength = i + 1;
      }

      if (map[currValue]) {
        let length = i - map[currValue];

        if (length > maxLength) {
          maxLength = length;
        }
      } else {
        map[currValue] = i;
      }
    }

    return maxLength;
  },
};
