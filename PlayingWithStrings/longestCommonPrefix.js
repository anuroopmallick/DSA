var longestCommonPrefix = function (strs) {
  let answer = "";
  let minLength = Infinity;

  for (const str of strs) {
    if (str.length < minLength) {
      minLength = str.length;
    }
  }

  for (let i = 0; i < minLength; i++) {
    let isSame = true;
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[j - 1][i]) {
        isSame = false;
      }
    }
    if (isSame) {
      answer += strs[0][i];
    } else {
      break;
    }
  }

  return answer;
};
