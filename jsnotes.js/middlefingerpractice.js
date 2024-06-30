// Define the dimensions of the pattern
const rows = 17;
const cols = 11;

// Create an empty 2D array for the pattern
let pattern = new Array(rows);
for (let i = 0; i < rows; i++) {
    pattern[i] = new Array(cols).fill(' ');
}

// Fill in the pattern with '*' to create the middle finger shape
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        // Top of the middle finger
        if ((i >= 0 && i <= 3 && j === 5) ||
            // Middle part of the middle finger
            
            (i === 4 && (j >= 1 && j <= 9)) ||
            // Bottom part of the middle finger
            (i >= 5 && i <= 12 && j === 5) ||
            // Base of the hand
            (i >= 13 && i <= 16 && (j === 1 || j === 9)) ||
            (i === 13 && (j >= 2 && j <= 8)) ||
            (i === 15 && (j === 2 || j === 8)) ||
            (i === 16)) {
            pattern[i][j] = '*a';
        }
    }
}
console.log(pattern);   
// Function to print the pattern to the console
function printPattern(pattern) {
    for (let i = 0; i < pattern.length; i++) {
        let row = '';
        for (let j = 0; j < pattern[i].length; j++) {
            row += pattern[i][j];
        }
        console.log(row);
    }
}

// Print the middle finger pattern
printPattern(pattern);
