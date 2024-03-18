// Define an array of numbers
const numbers = [1, 2, 3, 2, 2, 4];

// Use the reduce() method to count the number of occurrences of the value 2 in the array
const count = numbers.reduce((accumulator, currentValue) => {
  // The function passed to reduce() takes two arguments:
  // accumulator: the current count of occurrences
  // currentValue: the current element being processed

  // If the current value is the value we're counting, increment the accumulator
  if (currentValue === 2) {
    accumulator++;
  }

  // Return the accumulator for the next iteration
  return accumulator;
}, 0); // The second argument to reduce() is the initial value of the accumulator

// Log the count to the console
console.log(count); // Output: 3

//In this example, the reduce() method is used to find the maximum value
// in an array of numbers. The reduce() method takes a function as an argument, 
//which is called once for each element in the array. 
//The function should return a value that is used as the accumulator 
//for the next iteration. The second argument to reduce() is the 
//initial value of the accumulator, which in this case is set to 
//-Infinity so that the first element in the array can be compared to it.

const numbers1 = [1, 2, 3, 2, 2, 4];

const max = numbers1.reduce((accumulator, currentValue) => {
  return Math.max(accumulator, currentValue);
}, -Infinity);

console.log(max); // Output: 4

//In this example, the reduce() method is used to find the maximum value
//in an array of numbers. The Math.max() method is used to compare 
//the accumulator and the current value, and the larger of the two 
//is returned as the accumulator for the next iteration. 
//The second argument to reduce() is set to -Infinity so that the 
//first element in the array can be compared to it.

