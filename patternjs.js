// Create a 2D array
let matrix = [
    [1, "sadjaosjdoasjdoiasjoisajdiasjdosja", 3],
    ["ssssssssssssssssssssss", 5, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa"],
    [7, "ssssssssssssssssssssss", 9]
  ];
  
  // Access an element
  let inme = ""
  console.log(matrix[0][1]); // Output: 2
  
  // Iterate over a 2D array
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      inme += matrix[i][j];
      
    }
    
  }
  console.log("----------------------------------------------------------------")
  console.log(inme); // Output: 1sadjaosjdoasjdoiasjoisajdiasjdosja2ssssssssssssssssssssss5aaaaaaaaaaaaaaaaaaaaaaaaaaaaa7ssssssssssssssssssssss9.
  // Number of rows for the star pattern
let rows = 5;

// Outer loop for each row
for (let i = 1; i <= rows; i++) {
  let stars = '';

  // Inner loop for stars in each row
  for (let j = 1; j <= i; j++) {
    stars += '* ';
  }

  // Print the row of stars
  console.log(stars);
}
let size = 7; // Adjust size as needed

for (let i = 0; i < size; i++) {
  let line = '';
  
  for (let j = 0; j < size; j++) {
    if (
      (j === Math.floor(size / 2)) || (i === Math.floor(size / 2) && j > 0 && j < size - 1) || (i > Math.floor(size / 2) && (j === 0 || j === size - 1))
    ) {
      line += '*';
    } else {
      line += 's';
    }
  }
  
  console.log(line);
}
let s = Math.floor(size/2);
console.log('----------------------')


console.log(s);
let s1new = Math.floor(Math.random()*10)+1
console.log(s1new + s); //random
console.log("If I am gay suck my TITIEs");

// Define the pattern as a 2D array
const middleFingerPattern = [
    [' ', ' ', ' ', ' ', '*', '*', '*', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', ' ', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', ' '],
    [' ', ' ', '*', '*', '*', ' ', '*', '*', '*', ' ', ' '],
    [' ', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', ' '],
    [' ', ' ', '*', '*', '*', ' ', '*', '*', '*', ' ', ' '],
    ['*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*'],
    ['*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*'],
    ['*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*'],
  ];
  
  // Function to print the pattern to the console
  function printPattern(pattern) {
    for (let row of pattern) {
      console.log(row.join(''));
    }
  }
  
  // Print the middle finger pattern
  printPattern(middleFingerPattern);
  