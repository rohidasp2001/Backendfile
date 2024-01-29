const prompt = require("prompt-sync")(); // Importing the prompt-sync module

// insertion sort

let arr = []; // Initializing an empty array to store user input
const length = parseInt(prompt("Enter the number of elements in the array:")); // Asking user for the number of elements in the array
let complexity = 0; // Initializing a variable to track complexity

// Loop to take user input for each element of the array
for (let i = 0; i < length; i++) {
    const element = parseInt(prompt("Enter element " + (i + 1) + ": "));
    arr.push(element); // Adding user input elements to the array
}

// Insertion sort algorithm
for (let i = 1; i < length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
        complexity++; // Counting the number of comparisons made
    }
    arr[j + 1] = key; // Placing the key element in its correct position
    complexity++; // Incrementing complexity for the final placement of the key
}

console.log(" Insertion Sorted array:");
for (let i = 0; i < length; i++) {
    console.log(arr[i] + " "); // Displaying each element of the sorted array
}

console.log("Complexity", complexity); // Outputting the total complexity (number of comparisons made)


