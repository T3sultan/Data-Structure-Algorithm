//check the element of first array 2nd array
//if the element exists
//return true
//otherwise false
//problem statement: first array element and 2nd array element single 1 same are output true or false
//input arr1["a", "b", "c"], arr2[1, 2, 3, "z"]
//output false
//input arr1["a", "b", "c"], arr2[1, 2, 3, "c"]
//output true
//time complexity 0(n+m)
//space complexity 0(n)

function isElementExists(arr1, arr2) {
  //flag variable
  const frequencyCounter = {};
  for (let element of arr1) {
    frequencyCounter[element] = true;
  }
  for (let element of arr2) {
    console.log(element);
    if (element in frequencyCounter) {
      return true;
    }
  }

  console.log(frequencyCounter);
  return frequencyCounter;
}
console.log(isElementExists(["a", "b", "c"], [1, 2, 3, "a"]));
