// O(n) – Each call reduces n by 1 and performs a constant-time multiplication, resulting in n calls
//
// O(n) – The recursion builds a call stack linear to n. Without tail-call optimization, all n frames are

module.exports = {
  //param A : integer
  //return an integer
  solve: function (A) {
    function fact(value) {
      if (value == 1) {
        return 1;
      }

      return fact(value - 1) * value;
    }

    return fact(A);
  },
};
