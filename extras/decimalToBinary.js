function converttobinary(decimal) {
  let binary = "";

  while (decimal !== 0) {
    let digit = decimal % 2;
    binary += digit;

    decimal = Math.floor(decimal / 2);
  }

  console.log(binary);

  return binary.split("").reverse().join("");
}

converttobinary(45);
