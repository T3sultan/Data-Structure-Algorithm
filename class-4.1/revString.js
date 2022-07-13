//string reversal
// directions
//Given a string, return a new string with the reversal
//order of character
//examples
//reversal("apple")==="elppa"
//reversal("hello")==="olleh"
//reversal("Greetngs!")==="!sgnteerg"

function stringReversal(str) {
  let reverseStr = str.split("").reverse().join("");
  console.log(reverseStr);
}
stringReversal("Greetngs!");

//e
//l
//p
//p
//a
