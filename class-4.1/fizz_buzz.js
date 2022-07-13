//write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of
//the number and  for the multiples of five print "Buzz" . for numbers which are multiples of both three and
//five print "FizzBuzz"

function fizzBuzz(number) {
  let result = "";
  for (let i = 1; i <= number; i++) {
    //     console.log(i);
    if (i % 3 === 0 && i % 5 === 0) {
      result += "FizzBuzz \n";
      // console.log("Fizz");
    } else if (i % 3 === 0) {
      result += "Fizz \n";
      // console.log("Buzz");
    } else if (i % 5 === 0) {
      result += "Buzz \n";
      // console.log("FizzBuzz");
    } else {
      result += i + "\n";
      // console.log(i);
    }
  }
  return result;
}
console.log(fizzBuzz(100));

// 3 % 3=0
// 4 % 3=1
// 5 % 3=2
// 6 % 3=0
