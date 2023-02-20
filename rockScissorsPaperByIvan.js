const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
let playerTurn = "";

if (playerTurn == "r"||playerTurn == "rock"){
    playerTurn = rock;
} else if (playerTurn == "p" || playerTurn == "paper"){
    playerTurn = paper;
} else if (playerTurn == "s" || playerTurn == "scissors"){
    playerTurn = scissors;
} else {
    console.log("Invalid Input. Try Again...");
}

let computerRandomNumber = Math.floor(Math.random()*3)+1;

switch(computerRandomNumber){
    case 1 : 
    computerTurn = "Rock";
    break;
    case 2: 
    computerTurn = "Paper";
    break;
    case 3: 
    computerTurn = "Scissors";
    break;
}

console.log(`The computer chooses ${computerTurn}`);

if((playerTurn === rock & computerTurn === scissors) || (playerTurn === paper & computerTurn === rock) || (playerTurn === scissors & computerTurn === paper) ){
    console.log("You win!");
}