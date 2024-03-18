//In JavaScript, the filter() method is used to filter elements of an array 
//that pass a test implemented by the provided function. 
//It returns a new array with the elements that pass the test.

// Define an array of numbers
const numbers = [1, 2, 3, 4, 5, 6];

// Use the filter() method to create a new array that includes only the even numbers
const evenNumbers = numbers.filter(num => {
  // The function passed to filter() should return a boolean value
  // indicating whether the element should be included in the new array

  // Check if the number is even by checking if the remainder of the number divided by 2 is equal to 0
  return num % 2 === 0;
});

// Log the new array to the console
console.log(evenNumbers); // Output: [2, 4, 6]

// Define an array of strings
const strings = ["apple", "banana", "cherry", "date"];

// Use the filter() method to create a new array that includes only the strings that contain the letter "a"
const stringsWithA = strings.filter(str => {
  // The function passed to filter() should return a boolean value
  // indicating whether the element should be included in the new array

  // Check if the string includes the letter "a" by calling the includes() method on the string
  return str.includes("a");
});

// Log the new array to the console
console.log(stringsWithA); // Output: ["apple", "banana"]

// Define an array of objects
const objects = [
    {name: "object1", value: 5},
    {name: "object2", value: 15},
    {name: "object3", value: 10},
    {name: "object4", value: 20}
  ];
  
  // Use the filter() method to create a new array that includes only the objects with a value property greater than 10
  const objectsWithValueGreaterThan10 = objects.filter(obj => {
    // The function passed to filter() should return a boolean value
    // indicating whether the element should be included in the new array
  
    // Check if the value property of the object is greater than 10
    return obj.value > 10;
  });
  
  // Log the new array to the console
  console.log(objectsWithValueGreaterThan10);
  // Output: [{name: "object2", value: 15}, {name: "object4", value: 20}]