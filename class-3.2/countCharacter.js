//count the character
//input - string 'Hello'
//output- {H:1,e:1,l:2,o:1}

//input - string 'greet'
//output- {g:1,r:1,e:2,t:1}

// time complexity 0(n)
// space complexity 0(n)
function countCharacter(inputStr) {
  //coding writing

  //creating an object for tracing the frequency of element
  const hasMap = {};
  //looping the input and
  const normalizeStr = inputStr.toLowerCase();

  for (let i = 0; i < normalizeStr.length; i++) {
    //if there are any space ignore it

    //if not present assign the value 1
    console.log(normalizeStr[i]);

    const char = normalizeStr[i];
    if (char === " ") continue;
    if (char in hasMap) {
      hasMap[char] = hasMap[char] + 1;
    } else {
      hasMap[normalizeStr[i]] = 1;
    }
    // hasMap[]
    //check if the element exist on the object increment the existent count
    // console.log(hasMap);
  }
  return hasMap;
}
console.log(countCharacter("Tipu sultan"));
