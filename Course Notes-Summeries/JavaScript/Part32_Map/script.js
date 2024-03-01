// The map method is an array method that creates a new array 
// with the results of calling a provided function on every element in the array. 
// It takes a callback function as an argument and calls that function once for each element in the array.


//syntax of map
const newArray = array.map(function(element, index, array) {
    // code to be executed for each element
    return result;
  });

//element is the current element being processed in the array.
// index is the index of the current element in the array.
// array is the array that map is being called on.
// newArray is the new array that map returns.


const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map(function(number) {
  return number + 1;
});

console.log(newNumbers);

// Output: [2, 3, 4, 5, 6]

// In this example, we define an array numbers with five elements. 
// We then call the map method on numbers and pass in a callback function 
// that returns the result of adding 1 to each number. 
// The map method returns a new array newNumbers with the updated values.


//We can also use map to transform the elements in an array in other ways. 
// Here's an example where we use map to convert each number in an array to a string:

const numbers2 = [1, 2, 3, 4, 5];

const numberStrings = numbers2.map(function(number) {
  return number.toString();
});

console.log(numberStrings);

// Output: ['1', '2', '3', '4', '5']

// In this example, we use map to convert each number in the numbers array to a string 
// by calling the toString() method on each element. 
// The map method returns a new array numberStrings with the updated values.


//It's important to note that map returns a new array with the transformed elements, 
// and does not modify the original array.