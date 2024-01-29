let n = 6;

// Upward pattern
for (let i = 1; i <= n; i++) // Loop through rows for upward pattern
{
  let string = ""; // Initialize an empty string for each row

  for (let j = 1; j <= n - i; j++) // Loop for adding spaces before stars
  {
    string += " "; // Add spaces based on the row number to create a triangular shape
  }

  for (let k = 1; k <= 2 * i - 1; k++) // Loop for adding stars in each row
  {
    string += "*"; // Add stars based on the row number to form the pattern
  }

  console.log(string); // Output the string representing each row of the upward pattern
}

// Downward pattern
for (let i = 1; i <= n - 1; i++) // Loop through rows for downward pattern
{
  let string = ""; // Initialize an empty string for each row

  for (let j = 1; j <= i; j++) // Loop for adding spaces before stars (for downward pattern)
  {
    string += " "; // Add spaces based on the row number to create an inverted triangular shape
  }

  // No code inside this loop for adding stars, which causes the downward pattern to not generate stars

  // No console.log here; the downward pattern's stars are missing, so it won't be displayed
}
