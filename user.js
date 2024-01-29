const prompt = require("prompt-sync")({ sigint: true }); // Initializing prompt-sync with SIGINT enabled

// Gathering user input using prompt for name, age, school name, and favorite person's name
const userName = prompt("Enter your name: ");
const age = prompt("Enter your age: ");
const schoolName = prompt("Enter your school name: ");
const favoritePersonName = prompt("Enter your favorite person's name: ");

// Displaying user-provided information using console.log with string concatenation
console.log("Your name is: " + userName);
console.log("Your age is: " + age);
console.log("Your school name is: " + schoolName);
console.log("Your favorite person's name is: " + favoritePersonName);

// Displaying user-provided information using console.log with template literals
console.log(`Name: ${userName}, Age: ${age}, School name: ${schoolName}, Favorite Person's Name: ${favoritePersonName}`);
