//We are gonna make a palindrome for know cause that is my plan right know!!
const readline = require('readline');
const r1 = readline.createInterface({
input:process.stdin,
 output: process.stdout


});

function getUserInput()
{
   
r1.question("enter something:   ",(input)=> 
{
    input.trim();

    if(input === null || input === undefined || input === "")
    {
    console.log("input is NULL!!!");
       getUserInput();
       return;
    }   

const fal = input.split(" ").join("");
console.log(fal);

const clean = input.replace(/[^A-Za-z0-9]/g, "")
const nea= fal.split(clean)
if(fal !== clean)
    {
console.log("This " + nea + " input is not valid");
    }
clean.toLowerCase();

const reversed = input.split("").reverse().join("");
if(clean === reversed   )
    {
        console.log("=============");
        console.log("Palindrome");
        console.log("=============");

    }
    else{
        console.log("=============");
        console.log("Not Palindrome");
        console.log("=============");
    }

    getUserInput();

});


}
getUserInput();


