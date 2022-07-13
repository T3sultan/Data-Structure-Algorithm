//integer reverser
//Given an integer, return an integer that is the reverse
//ordering of numbers.
//example
//reverseInt(15)==51
//reverseInt(23)==32
//reverseInt(56)==65
//reverseInt(4545)==5454
//reverseInt(22)==22

function reverseInt(number) {
  let reverseNumber = number.toString().split("").reverse().join("");
  console.log(reverseNumber);
  if (reverseNumber.endsWith("-")) {
    reverseNumber = "-" + reverseNumber.slice(0, reverseNumber.length - 1);
  }
  //   return parseInt(reverseNumber, 10);
  return Number(reverseNumber, 10);
}
console.log(reverseInt(56));
