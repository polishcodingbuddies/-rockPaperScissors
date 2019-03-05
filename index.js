function getRandomFileNameOfAvatar(randomNumber) {
    return "images/avatar" + randomNumber + ".png"
}

//randomizer in range 1 to maxNumber
function getRandomNumber(maxNumber) {
    return Math.floor((Math.random() * maxNumber) + 1);
}


function setRandomAvatarForPlayers() {
    var numberOfAvailableAvatars = 7;

    var randomFileNameOfAvatarForPlayerOne = getRandomFileNameOfAvatar(getRandomNumber(numberOfAvailableAvatars));
    var randomFileNameOfAvatarForPlayerTwo = getRandomFileNameOfAvatar(getRandomNumber(numberOfAvailableAvatars));


    // loop to check if both players dont have same avatar
    while (randomFileNameOfAvatarForPlayerOne === randomFileNameOfAvatarForPlayerTwo) {
        randomFileNameOfAvatarForPlayerTwo = getRandomFileNameOfAvatar(getRandomNumber(numberOfAvailableAvatars));
    }


    document.querySelectorAll(".player img")[0].setAttribute("src", randomFileNameOfAvatarForPlayerOne);

    document.querySelectorAll(".player img")[1].setAttribute("src", randomFileNameOfAvatarForPlayerTwo);


}


function setRockChoiceDone() {
    playerChoice = "Rock";
}

function setPaperChoiceDone() {
    playerChoice = "Paper";
}

function setScissorsChoiceDone() {
    playerChoice = "Scissors";
}

function countingDown() {
    //hide button 'Fight'
    document.getElementById("fight-box-button").style.display = "none";
    document.getElementById("choices").style.visibility = "visible";

    var counter = 6;
    var run = setInterval(function () {
        document.querySelector(".gameResult").innerHTML = counter;


        if (playerChoice.length >= 1) {
            document.querySelector(".gameResult").innerHTML = roundResult();
            clearInterval(run);
        }

        if (counter === 0) {
            playerNoTakenChoice = true;
            //random choice TODO     
            document.querySelector(".gameResult").innerHTML = roundResult();
            clearInterval(run);
        }
        counter--;
    }, 1000);

}
// hardcoded COMPUTER HAS ALWAYS ROCK
// hardcoded PLAYER HAS ALWAYS PAPER
function roundResult() {

    document.getElementById("fight-box-button").style.display = "block";
    document.getElementById("choices").style.visibility = "hidden";

    //TODO -random computer choice and check who won

    if (playerNoTakenChoice) {
        playerChoice = computerRandomChoice();
    }
    var computerChoice = computerRandomChoice();


    //isPaperChoiceDone = true;


    if (playerChoice && (computerChoice === "Rock")) {
        playerPoints = playerPoints;
    } else if (playerChoice && (computerChoice === "Scissors")) {
        playerPoints++;
    } else if (playerChoice && (computerChoice === "Paper")) {
        computerPoints++;
    } else if (playerChoice && (computerChoice === "Rock")) {
        playerPoints++;
    } else if (playerChoice && (computerChoice === "Paper")) {
        playerPoints = playerPoints;
    } else if (playerChoice && (computerChoice === "Scissors")) {
        computerPoints++;
    } else if (playerChoice && (computerChoice === "Scissors")) {
        playerPoints = playerPoints;
    } else if (playerChoice && (computerChoice === "Paper")) {
        playerPoints++;
    } else if (playerChoice && (computerChoice === "Rock")) {
        computerPoints++;
    }

    if (computerPoints == 3) {
        resetGame();
        return "Computer won";
    } else if (playerPoints == 3) {
        resetGame();
        return "Player won";
    } else {
        resetRound();
        return playerPoints + " : " + computerPoints;
    }



}

function computerRandomChoice() {
    var tab = ["Rock", "Scissors", "Paper"];
    var randomNumber = getRandomNumber(3) - 1;
    return tab[randomNumber];
}

function resetRound() {
    playerChoice = "";
}

function startGame() {
    setRandomAvatarForPlayers();
}

function resetGame() {
    resetRound();
    computerPoints = 0;
    playerPoints = 0;
}


// game variables
var playerNoTakenChoice = false;
var computerPoints = 0;
var playerPoints = 0;
var playerChoice = "";


startGame();
