
const choice = ["rock", "paper", "scissors"]
let playerScore = parseInt(0);
let computerScore = parseInt(0);
let win = ("You Win")
let tie = ("Tie")
let lose = ("You Lose")

function computerPlay() {
    const choice = ["rock", "paper", "scissors"]
    return choice[Math.floor(Math.random() * choice.length)];
}
const computerChoice = computerPlay();

function playRound (playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return tie;
    } else if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "scissors" && computerChoice === "paper" || playerChoice === "paper" && computerChoice === "rock") {
        playerScore++;
        return win;
    } else {
        computerScore++;
        return lose;
    }
 }

function score(playerScore, computerScore) {
    if (playerScore === computerScore) {
        return ("its a tie! Play Again?")
    } else if (playerScore < computerScore) {
        return ("You lost! Play Again?")
    } else (playerScore > computerScore) 
        return ("You won! Play Again?")
    
}



function game() {
    for (var i = 0; i < 5; i++) {
    let playerChoice = prompt("Your Move");
    let computerChoice = computerPlay();
    console.log(playRound(playerChoice, computerChoice))
    console.log("Your Score = " + playerScore);
    console.log("Computer Score = " + computerScore);
    }
}
game();
console.log(score(playerScore, computerScore));

function score(playerScore, computerScore) {
    if (playerScore === computerScore) {
        return ("its a tie! Play Again?")
    } else if (playerScore < computerScore) {
        return ("You lost! Play Again?")
    } else (playerScore > computerScore) 
        return ("You won! Play Again?")
    
}
