
const prompt = require("prompt-sync")(); // Importing the prompt-sync module

// Selection sort

let arr = []; //  empty array to store user input
const length = parseInt(prompt("Enter the number of elements in the array:")); // Asking user for the number of elements in the array
let complexity = 0; // Initializing a variable to track complexity

// Loop to take user input for each element of the array
for (let i = 0; i < length; i++) {
    const element = parseInt(prompt("Enter element " + (i + 1) + ": "));
    arr.push(element); // Adding user input elements to the array
}

// Selection sort algorithm
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        complexity++; // Counting the number of comparisons made
        if (arr[i] > arr[j]) {
            temp = arr[i]; // Swapping elements in Selection sort
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log("Selection sorted array : ");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // Displaying each element of the sorted array
}

console.log("Complexity", complexity); // Outputting the total complexity (number of comparisons made)





