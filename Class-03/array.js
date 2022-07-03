const arr = ["a", "b", "c"];
console.log(arr.length);
console.log(arr[1]);
console.log(arr[arr.length - 1]);
//at the end of the array 0(1)
console.log(arr.push("d"));
console.log(arr);
arr[arr.length] = "e";
//at the end of the array 0(1)
console.log(arr);
//removing element from end of the array
arr.pop();
console.log(arr);
//at the remove of first element of the array 0(0)
arr.shift();
console.log(arr);
//at the begging of array adding element 0(n)
arr.unshift("a");
console.log(arr);

//finding element of the array
for (let element of arr) {
  if (element === "c") {
    console.log(true);
  }
}
//forEach,map,filter,reduce,slice,splice 0(n)
