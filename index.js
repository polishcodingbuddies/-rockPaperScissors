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



    var counter = 6;
    var run = setInterval(function () {
        document.querySelector(".gameResult").innerHTML = counter;

        //hide button 'Fight'
        document.getElementById("fight-box-button").style.visibility = "hidden";
        document.getElementById("choices").style.visibility = "visible";


        if (playerChoice.length >= 1) {
            document.querySelector(".gameResult").innerHTML = roundResult();
            clearInterval(run);
        }

        if (counter === 0) {
            playerNoTakenChoice = true;

            document.querySelector(".gameResult").innerHTML = roundResult();
            clearInterval(run);
        }
        counter--;


    }, 1000);

}


function roundResult() {

    document.getElementById("fight-box-button").style.visibility = "visible";
    document.getElementById("choices").style.visibility = "hidden";



    if (playerNoTakenChoice) {
        playerChoice = computerRandomChoice();
    }
    var computerChoice = computerRandomChoice();




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
var roundNumber = 0;

startGame();
