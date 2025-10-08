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
        computerScore++;
    }
    if(humanChoice == "Rock" && computerChoice == "Paper")
    {
        console.log("The computer won!");
        humanScore++;
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
}

let humanScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++)
{
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}
