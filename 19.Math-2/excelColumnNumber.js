module.exports = {
  //param A : string
  //return an integer
  titleToNumber: function (A) {
    let n = A.length;

    A = A.split("").reverse().join("");

    let num = 0;

    for (let i = 0; i < n; ++i) {
      let char = A.charCodeAt(i) - 64;

      num += char * 26 ** i;
    }

    return num;
  },
};
