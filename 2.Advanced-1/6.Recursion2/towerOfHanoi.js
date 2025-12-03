module.exports = {
  //param A : integer
  //return a array of array of integers
  towerOfHanoi: function (A) {
    let ans = [];

    function towerOfHanoi(disk, start, middle, end) {
      if (disk == 0) return;

      towerOfHanoi(disk - 1, start, end, middle);

      ans.push([disk, start, end]);

      towerOfHanoi(disk - 1, middle, start, end);
    }

    towerOfHanoi(A, 1, 2, 3);

    return ans;
  },
};
