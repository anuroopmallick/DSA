module.exports = {
  //param A : integer
  //return a array of strings
  generateParenthesis: function (A) {
    let ans = [];

    function generateParanthesis(string, A, opening, closing) {
      if (string.length == 2 * A) {
        ans.push(string);
        return;
      }

      if (opening < A)
        generateParanthesis(string + "(", A, opening + 1, closing);
      if (closing < opening)
        generateParanthesis(string + ")", A, opening, closing + 1);
    }

    generateParanthesis("", A, 0, 0);

    return ans;
  },
};
