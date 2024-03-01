// The forEach method is an array method that allows you to 
// iterate over each element in an array and perform an operation on it. 
// It takes a callback function as an argument and calls that function once for each element in the array.

//syntax for forEach
array.forEach(function(element, index, array) {
    // code to be executed for each element
});

// element is the current element being processed in the array.
// index is the index of the current element in the array.
// array is the array that forEach is being called on.

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number);
});

// Output:
// 1
// 2
// 3
// 4
// 5

//In this example, we define an array numbers with five elements. 
// We then call the forEach method on numbers and pass in a callback function 
// that logs each number to the console.


// We don't need to use the index or array parameters in this example, 
// but they are available if we need them. 
// Here's an example where we use index to log the index of each element:

const numbers2 = [1, 2, 3, 4, 5];

numbers2.forEach(function(number, index) {
  console.log(`Element ${index + 1} is ${number}`);
});

// Output:
// Element 1 is 1
// Element 2 is 2
// Element 3 is 3
// Element 4 is 4
// Element 5 is 5

//In this example, we use the index parameter to log the index of each element along with its value.


// We can also use forEach to modify the elements in an array. 
// Here's an example where we use forEach to add 1 to each element in an array:

const numbers3 = [1, 2, 3, 4, 5];

numbers3.forEach(function(number, index, array) {
  array[index] = number + 1;
});

console.log(numbers);

// Output: [2, 3, 4, 5, 6]

//In this example, we use the index parameter to modify the original numbers array by adding 1 to each element.

//It's important to note that forEach does not return a new array. 
// Instead, it modifies the original array. 
// If you want to create a new array with modified elements, you should use the map method instead.