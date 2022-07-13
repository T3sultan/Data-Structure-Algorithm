//finding out of max or min sum
//you have been provide an array of number
//your have to maximum number

function Max(array) {
  let max_number = array[0];
  for (let number of array) {
    console.log(number);
    if (number > max_number) {
      max_number = number;
    }
  }
  console.log(max_number);
}
Max([3, 5, 67, 1, 88, 45, -4]);
