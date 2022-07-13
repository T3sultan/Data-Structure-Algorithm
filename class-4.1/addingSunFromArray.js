//you have been provide an array of number
//your have to sum the numbers

function sum(array) {
  //flag variable
  let sum = 0;
  for (let number of array) {
    sum += number;
    //     console.log(number, sum);
  }
  return sum;
}
console.log(sum([10, 19, 4, 5, 45]));

// 10 +19=29
// 29+4=33
// 33+5=38
