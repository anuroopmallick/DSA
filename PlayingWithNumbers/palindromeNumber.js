const findpalindrome = (x) => {
  var num = x;
  var rev = 0;

  while (num > 0) {
    var lastnum = num % 10;
    rev = rev * 10 + lastnum;
    num = Math.floor(num / 10);
  }

  if (rev === x) {
    console.log("True");
  } else {
    console.log("False");
  }
};

findpalindrome(101);
