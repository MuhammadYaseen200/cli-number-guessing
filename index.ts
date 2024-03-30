#! /usr/bin/env node

import inquirer from "inquirer"

// 1) computerv will generate a random number - Done
//const backendinputnumber = 7
const randomNumber = Math.floor(Math.random() * 10 + 1);
// console.log(randomNumber);
console.log("Computer have select a numeber,to determine this exact number You can choose a number between 1-10")


//2) user input for guessing a number  -Done
const answer = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        mesage: "You can choose a number between 1-10",
        
    },
]) ;

//Conditional statements

// 3) compare user input with computer generated number and show result
if (answer.UserGuessedNumber === randomNumber){
    console.log("Congratulations..!! Your guessing number is correct.");
}
else {
    console.log("you lose!! you guess a wrong number");
    console.log("The correct answer is:" + randomNumber);
    
    
}

