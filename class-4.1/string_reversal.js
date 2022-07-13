//string reversal
// directions
//Given a string, return a new string with the reversal
//order of character
//examples
//reversal("apple")==="elppa"
//reversal("hello")==="olleh"
//reversal("Greetngs!")==="!sgnteerg"

function stringReversal(str) {
  let revString = "";
  //   let mainStr = revString.toLowerCase();
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
    revString += str[i];
  }
  console.log(revString);
}
stringReversal("Greetngs!");

//e
//l
//p
//p
//a
