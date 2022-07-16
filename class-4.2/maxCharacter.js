//given a string, return the character that is most commonly used in the string
//examples
//maxChar("abccccccd")==="c"
//maxChar("apple 1231111111")==="1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";
  for (let char of str) {
    console.log(char);
    charMap[char] = (charMap[char] || 0) + 1;
  }
  console.log(charMap);

  for (let char in charMap) {
    console.log(char);
    console.log(charMap[char]);
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  //   console.log(max);
  console.log(charMap);

  return maxChar;
}
console.log(maxChar("apple 123"));
