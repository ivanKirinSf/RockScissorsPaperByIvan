let playerTurn = "B"

let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";

if( playerTurn == "r" || playerTurn == "Rock"){
    playerTurn = rock;
}else if( playerTurn == "p" || playerTurn == "Paper" ){
    playerTurn = paper;
}else if( playerTurn == "s" || playerTurn == "Scissors"){
    playerTurn = scissors;
}else{
    console.log("Invalid input! Try again later...")
}

let computerTurn = Math.floor(Math.random() * 3) + 1;

console.log(computerTurn)


