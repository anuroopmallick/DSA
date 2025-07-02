module.exports = {
  //param A : array of integers
  //return a array of array of integers
  permute: function (A) {
    let ans = [];

    function swap(arr, i, j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    function generatePermutation(arr, currIndex) {
      if (currIndex == arr.length) {
        ans.push([...arr]);
        return;
      }

      for (let i = currIndex; i < arr.length; ++i) {
        swap(arr, currIndex, i);
        generatePermutation(arr, currIndex + 1);
        swap(arr, currIndex, i);
      }
    }

    generatePermutation(A, 0);

    return ans;
  },
};
