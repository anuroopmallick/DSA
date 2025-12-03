var romanToInt = function (s) {
  const valuemap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  const romanNum = s;
  var answer = 0;

  for (let i = 0; i < romanNum.length; i++) {
    let symbol = romanNum[i];
    let nextSymbol = romanNum[i + 1];

    let temp = valuemap[symbol];

    if (nextSymbol) {
      if (symbol === "I" && nextSymbol === "V") {
        temp = valuemap[symbol + nextSymbol];
        i++;
      } else if (symbol === "I" && nextSymbol === "X") {
        temp = valuemap[symbol + nextSymbol];
        i++;
      }

      if (symbol === "X" && nextSymbol === "L") {
        temp = valuemap[symbol + nextSymbol];
        i++;
      } else if (symbol === "X" && nextSymbol === "C") {
        temp = valuemap[symbol + nextSymbol];
        i++;
      }

      if (symbol === "C" && nextSymbol === "D") {
        temp = valuemap[symbol + nextSymbol];
        i++;
      } else if (symbol === "C" && nextSymbol === "M") {
        temp = valuemap[symbol + nextSymbol];
        i++;
      }
    }

    answer += temp;
  }

  return answer;
};
