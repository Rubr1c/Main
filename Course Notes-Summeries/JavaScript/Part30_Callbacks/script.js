// In JavaScript, a callback is a function passed as an argument to another function, 
// to be "called back" at a later time. Callbacks are commonly used in asynchronous programming, 
// allowing code to continue running while waiting for a function to complete.


// Define a function named 'sum' that takes three arguments: a callback function and two numbers 'x' and 'y'
function sum(callback, x, y) {
    // Calculate the sum of 'x' and 'y' and store it in a variable named 'result'
    let result = x + y;
    
    // Call the 'callback' function with 'result' as the argument
    callback(result)
}

// Define a function named 'displayConsole' that takes one argument 'result'
function displayConsole(result) {
    // Log the 'result' to the console
    console.log(result);
}

// Define a function named 'displayPage' that takes one argument 'result'
function displayPage(result) {
    // Set the text content of the HTML element with id 'myH1' to 'result'
    document.getElementById("myH1").textContent = result;
}

// Call the 'sum' function with 'displayPage' 
//as the first argument and the numbers 1 and 2 as the second and third arguments
sum(displayPage, 1, 2);
