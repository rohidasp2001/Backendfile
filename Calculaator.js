
const prompt = require("prompt-sync")(); // Importing the prompt-sync module

// Asking the user to enter an operator (+, -, *, or /)
const operator = prompt('Enter operator (either +, -, *, or /): ');

// Asking the user to enter two numbers
let num1 = parseFloat(prompt("Enter number 1: "));
let num2 = parseFloat(prompt("Enter number 2: "));
let result;

// Using a switch statement to perform the operation based on the operator provided
switch (operator) {
    case '+':
        result = num1 + num2; // Addition
        break;
    case '-':
        result = num1 - num2; // Subtraction
        break;
    case '*':
        result = num1 * num2; // Multiplication
        break;
    case '/':
        if (num2 === 0) {
            console.log("Division by zero is not allowed."); // Handling division by zero
            process.exit(1); // Exiting the program with an error code
        }
        result = num1 / num2; // Division
        break;
    default:
        console.log("Invalid operator. Please enter a valid operator (+, -, *, or /)."); // Handling invalid operators
        process.exit(1); // Exiting the program with an error code
}

// Displaying the result of the operation if it's defined
if (result !== undefined) {
    console.log(`Result: ${result}`); // Outputting the result using template literals
}
