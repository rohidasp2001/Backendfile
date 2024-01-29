const prompt = require("prompt-sync")({ sigint: true }); // Initializing prompt-sync with SIGINT enabled

const userInput = prompt("Enter the data : "); // Asking the user to enter data

let dataType; // Variable to store the type of data

switch (true) {
    case (userInput === null): // Checking if userInput is null
        dataType = "null"; // Setting dataType to "null" if userInput is null
        break;
    case (userInput === ""): // Checking if userInput is an empty string
        dataType = "empty string"; // Setting dataType to "empty string" if userInput is an empty string
        break;
    case (!isNaN(userInput)): // Checking if userInput is a number
        dataType = "number"; // Setting dataType to "number" if userInput is a number
        break;
    case (typeof userInput === 'string'): // Checking if userInput is a string
        dataType = "string"; // Setting dataType to "string" if userInput is a string
        break;
   
}

// This 'console.log' statement should be outside the 'switch' block to be reachable.
console.log(`Valid data type: ${dataType}`); // Outputting the determined data type using template literals
