
// The spread operator (...) allows us to quickly copy all elements of an array or properties of an object (unpacks the elements)

// Example 1: Copying an array
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // arr2 is a new array with the same elements as arr1

// Example 2: Concatenating arrays
const arr3 = [4, 5, 6];
const arr4 = [...arr1, ...arr3]; // arr4 is a new array that contains all elements of arr1 and arr3

// Example 3: Using the spread operator with a function
function sum(x, y, z) {
  return x + y + z;
}

const nums = [1, 2, 3];
console.log(sum(...nums)); // logs 6

// Example 4: Using the spread operator with an object
const obj1 = {a: 1, b: 2};
const obj2 = {...obj1, c: 3}; // obj2 is a new object with the same properties as obj1 and an additional property c

// Example 5: Using the spread operator to merge two objects
const obj3 = {d: 4, e: 5};
const obj4 = {...obj1, ...obj3}; // obj4 is a new object with the properties of obj1 and obj3