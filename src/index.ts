/*
* The pattern program
*
* @author  Ahmad El-khawaldeh
* @version 1.0
* @since   2021-12-04
*/

'use strict';
import * as readline from 'readline';

let inputHandler = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Function to print pattern recursively
function printPattern(integer: number):string {
    if (integer < 1) {
        return "";
    } else {
        if (integer >= 5) {
            return (printPattern(integer - 1) + " " + integer
                + printPattern(integer - 1) + "\n" + " ");
        } else {
            return (printPattern(integer - 1) + " " + integer
                + printPattern(integer - 1));
        }
    }
}

// getting user input from the console
inputHandler.question("Enter a number between 1 to 15: ", (answer: string) => {
    // parsing the string input
    let integerAnswer: number = parseInt(answer, 10);
    // performing the pattern
    if (integerAnswer < 1 || integerAnswer > 15) {
        console.log("Error: Wrong input");
    } else {
        console.log("User input | Program output\n" + integerAnswer
            + " | " + printPattern(integerAnswer) + "\n");
    }
    // closing the handler
    inputHandler.close();
});
