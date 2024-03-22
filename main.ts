import inquirer from "inquirer";

//1. computer will generate a random number
//2. user input for guessing number
//3. compare users input with computer generated number and show result

const randomNum = Math.floor(Math.random()*6+1);

console.log( `\n\t\tNumber Guessing Game: \n\n You have to guess a number between 1-6\n\n`)
const answers = await inquirer.prompt([

    {
        name: "UserGuessNumber",
        type: "number",
        message: " please guess a number"
    },
]) ;


if (answers.UserGuessNumber === randomNum)
{
    console.log ( "\nCongratulation!!! you guessed right number :)")
}

else if( answers.UserGuessNumber > randomNum)
{ console.log("\n You guessed a bigger number :(")}

else if (answers.UserGuessNumber < randomNum) 
{{ console.log(" \nYou  guessed a smaller number :(")}}

console.log( `computer random number is ${randomNum}`);
