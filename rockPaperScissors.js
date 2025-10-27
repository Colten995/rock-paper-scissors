function capitalize(word)
{
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function getComputerChoice()
{
    //generate random number between 1 and 3
    const choice = (Math.floor(Math.random() * 100)) % 3;
    // console.log(choice);
    switch(choice){
        case 0:
            return "rock";
            break;

        case 1:
            return "paper";          
            break;

        case 2: 
            return "scissors";
            break;

        default:
            return "Error: random number is not between 0 and 2";
        break;
    }
}

function getHumanChoice()
{
    const humanChoice = prompt("Choose rock, paper, or scissors!");
    return humanChoice;
}

function playRound(humanChoice, computerChoice)
{   

    humanChoice = capitalize(humanChoice);
    computerChoice = capitalize(computerChoice);

    console.log(`You chose ${humanChoice}`);
    console.log(`The computer chose ${computerChoice}`);

    if(humanChoice == computerChoice)
    {
        console.log(`You tied! You both chose ${humanChoice}`);
    }
    if(humanChoice == "Rock" && computerChoice == "Scissors")
    {
        console.log("You won!");
        humanScore++;
    }
    if(humanChoice == "Rock" && computerChoice == "Paper")
    {
        console.log("The computer won!");
        computerScore++;
    }
    if(humanChoice == "Paper" && computerChoice == "Rock")
    {
        console.log("You won!");
        humanScore++;
    }
    if(humanChoice == "Paper" && computerChoice == "Scissors")
    {
        console.log("The computer won!");
        computerScore++;
    }
    if(humanChoice == "Scissors" && computerChoice == "Paper")
    {
        console.log("You won!");
        humanScore++;
    }
    if(humanChoice == "Scissors" && computerChoice == "Rock")
    {
        console.log("The computer won!");
        computerScore++;
    }

    console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`);
}

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const target = e.target;

        switch(target.id) {
            case 'rock-button':
                playRound("Rock", getComputerChoice());
                break;
            case 'paper-button':
                playRound("Paper", getComputerChoice());
                break;
            case 'scissors-button':
                playRound("Scissors", getComputerChoice());
                break;
            default:
                console.log("Error: button click target ID: " + target);
        }
    })
})

