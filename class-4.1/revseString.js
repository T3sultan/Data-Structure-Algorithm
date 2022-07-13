//string reversal
// directions
//Given a string, return a new string with the reversal
//order of character
//examples
//reversal("apple")==="elppa"
//reversal("hello")==="olleh"
//reversal("Greetngs!")==="!sgnteerg"

function stringReversal(str) {
  let reverseStr = "";
  for (let character of str) {
    reverseStr = character + reverseStr;
    //     console.log(reverseStr);
  }
  console.log(reverseStr);
}
stringReversal("Greetngs!");

//e
//l
//p
//p
//a
