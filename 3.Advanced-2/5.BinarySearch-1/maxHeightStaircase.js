// Problem Description
// Given an integer A representing the number of square blocks. The height of each square block is 1. The task is to create a
// staircase of max-height using these blocks. The first stair would require only one block, and the second stair would require
// two blocks, and so on. Find and return the maximum height of the staircase.

module.exports = {
  solve: function (A) {
    let lo = 0;
    let hi = 1e5;
    let mid;
    let ans = 0;

    while (lo <= hi) {
      mid = (lo + hi) >> 1;
      if ((mid * (mid + 1)) / 2 <= A) (ans = mid), (lo = mid + 1);
      else hi = mid - 1;
    }
    return ans;
  },
};
