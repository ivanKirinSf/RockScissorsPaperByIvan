let playerTurn = "r";

const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

let isValid = true;

let compCounter = 0;

let playerCounter = 0;

if( playerTurn == "r" || playerTurn == "Rock"){

    playerTurn = rock;

}else if(playerTurn == "p" || playerTurn == "Paper"){

    playerTurn = paper;

}else if(playerTurn == "s" || playerTurn == "Scissors"){

    playerTurn = scissors;   

}else{

console.log(`Invalid input!`);

isValid = false;

}

if( playerTurn === "res"){

    playerCounter = 0;

    compCounter = 0;

}

if(isValid === true){

    let compRandomMove = Math.floor(Math.random()*3 + 1);


switch(compRandomMove){

    case 1:        
    {computerMove = rock};
    break;
    case 2:
        {computerMove = paper};
        break;
        case 3:
            {computerMove = scissors};
            break;

}

console.log(`Computer chooses ${computerMove}`);

if(playerTurn == rock && computerMove == scissors || playerTurn == paper && computerMove == rock ||
    playerTurn == scissors && computerMove == paper){

        console.log(`
            You win!`)

            console.log(`
                player: ${playerCounter}   computer: ${compCounter}`);

    }else if(playerTurn == scissors && computerMove == rock || playerTurn == rock && computerMove == paper ||
        playerTurn == paper && computerMove == scissors){

            console.log(`
                You lose!`)

                console.log(`
                    player: ${playerCounter}   computer: ${compCounter}`);

        }else {

            console.log(`
                This game was a draw!`)

        }
}


