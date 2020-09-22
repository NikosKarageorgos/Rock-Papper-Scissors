let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoise() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoise_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} . You WIN !!!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function () { userChoise_div.classList.remove('green-glow') }, 300)
}

function loose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoise_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} . You LOOSE...`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function () { userChoise_div.classList.remove('red-glow') }, 300)
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoise_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals to ${convertToWord(computerChoice)}${smallCompWord} . It's a DRAW !!!`;
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function () { userChoise_div.classList.remove('grey-glow') }, 300)
}

function game(userChoise) {
    const computerChoice = getComputerChoise();
    switch (userChoise + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoise, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            loose(userChoise, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoise, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r")
    })

    paper_div.addEventListener('click', function () {
        game("p")
    })

    scissors_div.addEventListener('click', function () {
        game("s")
    })
}

main();

