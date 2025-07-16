module.exports = {
  //param A : integer
  //return a strings
  convertToTitle: function (A) {
    let string = "";

    while (A > 0) {
      A = A - 1;

      let charCode = A % 26;

      charCode = "A".charCodeAt(0) + charCode;

      let char = String.fromCharCode(charCode);

      string += char;

      A = Math.floor(A / 26);
    }

    return string.split("").reverse().join("");
  },
};
