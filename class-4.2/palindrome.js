//check provided string is palindrome
//if palindrome return true otherwise false
//non-alphanumeric characters should be ignored
//palindrome ("race car") should return true
//palindrome ("not a palindrome") should return false

function palindrome(str) {
  //w-> [0-9 A-Z a-z]
  //W -> all
  const replace = /[\W_]/g;
  const normalizeString = str.toLowerCase().replace(replace, "");
  //   console.log(normalizeString);
  const reverseStr = normalizeString.split("").reverse().join("");
  //   console.log(normalizeString, reverseStr);
  return normalizeString === reverseStr;
}
console.log(palindrome("madam"));
