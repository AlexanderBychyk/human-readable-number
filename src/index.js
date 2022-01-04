module.exports = function toReadable(number) {
  let words = [];
  let numberStr = number.toString();

  if (numberStr.length == 1) {
    words.push(single(numberStr));
  } else if (numberStr.length == 2) {
    words.push(decimal(numberStr));
  } else {
    words.push(single(numberStr[0]));
    words.push("hundred");
    if (numberStr[1] == 0) {
      if (numberStr[2] > 0) {
        words.push(single(numberStr[2]));
      } 
    } else {
      words.push(decimal(numberStr[1] + numberStr[2]));
    }
  }

  return words.join(" ");;
}

function single(numberStr) {
  let strSingle = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  return strSingle[numberStr[0]]
}

function decimal(numberStr, str9) {
  let strDecimal10 = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let strDecimal = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  if (+numberStr[0] == 1) {
    return (strDecimal10[+numberStr-10]);
  } else if (+numberStr[1] > 0) {
    return strDecimal[+numberStr[0]-2] + " " + single(numberStr[1]);
  } else return strDecimal[+numberStr[0]-2];
}