//variables

//declaration with var or let + name of variable
//2 variables cannot have the same name
var myVar1;
let myVar2; 


//assignment

//you can assign the variable a value that can you used anywhere
myVar1 = 100;
myVar2 = 200;

//outputs to the console 100
console.log(myVar1);

//outputs to the console 200
console.log(myVar2);


// there are some differences between let and var.

// Scope: Variables declared with let have block scope, 
// meaning they are only accessible within the block they are defined in. 
// On the other hand, variables declared with var have function scope, 
// meaning they are accessible within the entire function they are defined in, 
// even outside the block.

// Hoisting: Variables declared with let are not initialized until
// their definition is executed. This means that if you try to use
// a let variable before its definition, you will get a ReferenceError. 
// Variables declared with var, on the other hand, 
// are hoisted to the top of their scope, 
// meaning they are initialized with the value undefined before the code is executed.

//example:

function example() {
    if (true) {
      var varVar = 100;
      let letVar = 100;
    }
  
    console.log(varVar); // This will output "I am a var variable"
    console.log(letVar); // This will throw a ReferenceError because letVar is not defined outside the block
}
  
example();

// In conclusion, it is generally recommended to use let 
// instead of var because it helps prevent bugs and makes 
// the code easier to understand.


//decloration and assignment in same line
let myVar3 = 100;




//Simple Data Types

//Number type
let age = 18;
let price = 10.99;
let gpa = 3.7;
//can be used in math operations


//add variables to sentances

//using ${varName}
console.log(`You are ${age} years old`);
//note must use `` not ' ' for this feature to work

//using commas
console.log('You are ', age, "years old");
//can use "", '', or ``

//both output you are 18 years old

//you can see the type with adding typeof operator
console.log(typeof age);
//outputs number


//String type
let firstName = "Ali";
let sentance = "hi how are you"
let email = "example123@gmail.com"
//a string is series of charcters
//a string can include numbers but you cant use it for any math

console.log(`Your first name is ${firstname}`);
//outputs Your first name is Ali

console.log(typeof firstName);
//outputs string


//Boolean type
let online = true;
let forSale = false;

//booleans are true or false

console.log(`Are you online? ${online}`); 
//outputs Are you online? true

console.log(typeof online);
//outputs boolean

//booleans are usally not used for output just for if statements


//displaying variables on the webpage
let fullName = "Ali Zaghloul";
let birthYear = 2005;
let isStudent = true;

//changes the text inside of the html element with id p1 to Ali Zaghloul
document.getElementById("p1").textContent = fullName;

//changes the text inside of the html element with id p2 to you were born in 2005
document.getElementById("p2").textContent = `You were born in ${birthYear}`;

//changes the text inside of the html element with id p3 to true
document.getElementById("p3").textContent = isStudent;







