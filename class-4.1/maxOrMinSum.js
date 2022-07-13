//finding out of max or min sum
//you have been provide an array of number
//your have to maximum number

function MaxOrMinSum(array) {
  let min_number = array[0];
  for (let number of array) {
    console.log(number);
    if (number < min_number) {
      min_number = number;
    }
  }
  console.log(min_number);
}
MaxOrMinSum([3, 5, 67, 1, 88, 45, -4]);
