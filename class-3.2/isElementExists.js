//check the element of first array 2nd array
//if the element exists
//return true
//otherwise false
//problem statement: first array element and 2nd array element single 1 same are output true or false
//input arr1["a", "b", "c"], arr2[1, 2, 3, "z"]
//output false
//input arr1["a", "b", "c"], arr2[1, 2, 3, "c"]
//output true
//time complexity 0(n^2) or 0(n*m)

function isElementExists(arr1, arr2) {
  //flag variable
  let exists = false;
  for (let element of arr1) {
    if (arr2.includes(element)) {
      exists = true;
      break;
    }
  }
  console.log(exists);
  return exists;
}
console.log(isElementExists(["a", "b", "c"], [1, 2, 3, "c"]));
