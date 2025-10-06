module.exports = {
  /**
   * param A: list of integers
   * return: an integer
   */
  solve: function (A) {
    let e1 = 0;
    let e2 = 0;

    let counte1 = 0;
    let counte2 = 0;

    for (let i = 0; i < A.length; ++i) {
      if (counte1 == 0 && A[i] != e2) {
        e1 = A[i];
        counte1++;
      } else if (counte2 == 0 && A[i] != e1) {
        e2 = A[i];
        counte2++;
      } else if (A[i] == e1) {
        counte1++;
      } else if (A[i] == e2) {
        counte2++;
      } else {
        counte1--;
        counte2--;
      }
    }

    let c1 = 0,
      c2 = 0;

    for (let i = 0; i < A.length; i++) {
      if (A[i] === e1) {
        c1++;
      } else if (A[i] === e2) {
        c2++;
      }
    }

    if (c1 > A.length / 3) {
      return e1;
    } else if (c2 > A.length / 3) {
      return e2;
    } else {
      return -1;
    }
  },
};
