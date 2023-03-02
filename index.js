const choice = ["rock", "paper", "scissors"]

function computerPlay() {
    const choice = ["rock", "paper", "scissors"]
    return choice[Math.floor(Math.random() * choice.length)];
}
const computerChoice = computerPlay();
const playerChoice = prompt("Your Move");

function playRound (playerChoice, computerChoice) {
    if (playerChoice === computerChoice)
    return ("Tie");
    else if (playerChoice === "rock" && computerChoice === "paper")
    return ("you lose, paper beats rock");
    else if (playerChoice === "rock" && computerChoice === "scissors")
    return ("you win, rock beats scissors");
    else if (playerChoice === "scissors" && computerChoice === "paper")
    return ("you win, paper beats scissors");
    else if (playerChoice === "scissors" && computerChoice === "rock")
    return ("you lose, rock beats scissors");
    else if (playerChoice === "paper" && computerChoice === "scissors")
    return ("you lose, scissors beats paper");
    else (playerChoice === "paper" && computerChoice === "rock")
    return ("you win, paper beats rock")
}

console.log(playRound(playerChoice, computerChoice));