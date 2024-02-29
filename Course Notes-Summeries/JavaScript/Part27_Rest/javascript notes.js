// The rest parameter (...) is a syntax in JavaScript that allows you to represent an indefinite number of arguments as an array. 
// It can be used in function parameters to collect a variable number of arguments into an actual array

function sum(...numbers) {
  // The rest parameter "numbers" is an array containing all the arguments
  // passed to the function.
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(5, 10)); // Output: 15
console.log(sum()); // Output: 0

// In the example above, the sum function takes a rest parameter called numbers. 
// This allows us to call the function with any number of arguments, 
// and the rest parameter will collect them all into an array. 
// We can then use a for loop to add up the numbers in the array and return the sum.


function printDetails(name, ...details) {
  // The rest parameter "details" is an array containing all the arguments
  // passed to the function after the "name" argument.
  console.log(`Name: ${name}`);
  console.log(`Details: ${details.join(', ')}`);
}

printDetails('Alice', 'age', 30, 'city', 'New York');
// Output:
// Name: Alice
// Details: age, 30, city, New York

printDetails('Bob');
// Output:
// Name: Bob
// Details:

// In the example above, the printDetails function takes a required argument called name, 
// followed by a rest parameter called details. 
// This allows us to call the function with a variable number of arguments after the name argument, 
// and the rest parameter will collect them all into an array. 
// We can then use the join method to print out the details as a comma-separated list.