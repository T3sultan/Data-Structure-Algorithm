//frequency counter
// time complexity ->0(n*m)
// space complexity ->0(1)
function isSame(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    //     console.log(arr1[i]);
    let index = arr2.indexOf(arr1[i]);
    //     console.log(index);
    //we haven't found the index
    if (index === -1) {
      return false;
    } else {
      arr2.splice(index, 1);
    }

    //     console.log(arr2);
  }
  return true;
}
console.log(isSame([1, 2, 4, 5], [1, 4, 5, 2]));

// edge case
// checking array length
// 1 -->1 (remove 1) [4,5,2]
// 2---> 2 (remove 2) [4,5]
// 4 ---> 4 (remove 4) [5]
// 5 ---> 5 (remove 5) []
