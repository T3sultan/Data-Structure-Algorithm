//write a function that returns the number of vowels.
//used in a string, vowels are the characters 'a','e','i', 'o', and 'u'
// examples
// vowels('Hi There!')--->3
// vowels('why do you ask?')--->4
//vowels ('why?')--->0

function vowels(str) {
  const mainVowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (mainVowels.includes(char)) {
      count++;
    }
  }
  console.log(count);
}
vowels("why do you ask?");
