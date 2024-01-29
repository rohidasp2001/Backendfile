const prompt = require("prompt-sync")(); // Importing the prompt-sync module

const sort = prompt('Enter sort (1 Bubble sort, 2 Selection sort, 3 Insertion sort): '); // Asking user to select a sorting algorithm

let arr = []; // Initializing an empty array to store user input
const length = parseInt(prompt("Enter the number of elements in the array:")); // Asking user for the number of elements in the array

// Loop to take user input for each element of the array
for (let i = 0; i < length; i++) {
    const element = parseInt(prompt("Enter element " + (i + 1) + ": "));
    arr.push(element); // Adding user input elements to the array
}

// Switch statement based on the user's selected sorting algorithm
switch (sort) {
    case "1 Bubble sort": // If the user chooses Bubble sort
        for (let i = 0; i < length - 1; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    temp = arr[j]; // Swapping elements in Bubble sort
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        break;

    case "2 Selection sort": // If the user chooses Selection sort
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    temp = arr[i]; // Swapping elements in Selection sort
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        break;

    case "3 Insertion sort": // If the user chooses Insertion sort
        for (let i = 1; i < length; i++) {
            let key = arr[i];
            let j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key; // Inserting elements in the correct position in Insertion sort
        }
        break;

    default:
        console.log("Invalid sorting algorithm choice"); // If the user enters an invalid choice
        break;
}

console.log("Sorted array:"); // Output the sorted array
for (let i = 0; i < length; i++) {
    console.log(arr[i]); // Displaying each element of the sorted array
}
