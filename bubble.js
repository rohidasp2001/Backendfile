const prompt = require("prompt-sync")(); // Importing the prompt-sync module

// Bubble sort

let arr = []; // Initializing an empty array to store user input
const length = parseInt(prompt("Enter the number of elements in the array:")); // Asking user for the number of elements in the array
let complexity = 0; // Initializing a variable to track complexity

// Loop to take user input for each element of the array
for (let i = 0; i < length; i++) {
    const element = parseInt(prompt("Enter element " + (i + 1) + ": "));
    arr.push(element); // Adding user input elements to the array
}

// Bubble sort algorithm
for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
        complexity++; // Counting the number of comparisons made
        if (arr[j] > arr[j + 1]) {
            temp = arr[j]; // Swapping elements in Bubble sort
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log("Bubble Sorted array:"); 
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + " "); // Displaying each element of the sorted array
}

console.log("Complexity", complexity); // Outputting the total complexity (number of comparisons made)
