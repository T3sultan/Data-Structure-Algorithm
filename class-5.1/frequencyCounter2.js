//frequency counter
// time complexity ->0(n+m+m)
// space complexity ->0(n+m)
function isSame(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const hastTable = {};
  const hastTable1 = {};
  for (let number of arr1) {
    hastTable[number] = (hastTable[number] || 0) + 1;
  }
  console.log(hastTable);

  for (let number of arr2) {
    hastTable1[number] = (hastTable1[number] || 0) + 1;
  }
  console.log(hastTable1);

  for (let element in hastTable) {
    if (!element in hastTable1 || hastTable[element] !== hastTable1[element]) {
      return false;
    }
  }
  return true;
  //   console.log(hastTable, hastTable1);
}
console.log(isSame([1, 2, 4, 5], [1, 4, 5, 2]));

// edge case
// checking array length
// 1 -->1 (remove 1) [4,5,2]
// 2---> 2 (remove 2) [4,5]
// 4 ---> 4 (remove 4) [5]
// 5 ---> 5 (remove 5) []
