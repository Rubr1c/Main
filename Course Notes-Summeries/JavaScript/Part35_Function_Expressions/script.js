//In JavaScript, a function expression is a way to define a
//function and assign it to a variable.

const add = function (x, y) {
  return x + y;
};

console.log(add(2, 3)); // Output: 5

const sum = (function (x, y) {
  return x + y;
})(2, 3);

console.log(sum); // Output: 5

//in this example, the function expression is defined inline
//as an argument to the sum variable assignment.
//The function expression takes two arguments,
//x and y, and returns their sum.
//The function is immediately invoked with the arguments 2 and 3,
//and the result is assigned to the sum variable.

const obj = {
  name: "John",
  sayName: function () {
    console.log(this.name);
  },
};

obj.sayName(); // Output: John

const arr = [1, 2, 3].map(function (x) {
  return x * 2;
});

console.log(arr); // Output: [2, 4, 6]
