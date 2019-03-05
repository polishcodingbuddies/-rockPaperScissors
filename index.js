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




function countingDown() {
    //hide button 'Fight'
    document.getElementById("play").style.visibility = "hidden";

    var counter = 6;
    var run = setInterval(function () {
        document.querySelector(".gameResult").innerHTML = counter;


        if (isRockChoiceDone || isPaperChoiceDone || isScissorsChoiceDone) {
            document.querySelector(".gameResult").innerHTML = roundResult();
            clearInterval(run);
        }

        if (counter === 0) {

            //random choice TODO     
            document.querySelector(".gameResult").innerHTML = roundResult();
            clearInterval(run);
        }
        counter--
    }, 1000);

}
// hardcoded COMPUTER HAS ALWAYS ROCK
// hardcoded PLAYER HAS ALWAYS PAPER
function roundResult() {

    //    //visible button 'Fight'
    document.getElementById("play").style.visibility = "visible";


    //TODO -random computer choice and check who won
    var computerChoice = "Rock";
    isPaperChoiceDone = true;



    //todo end the if statement
    if (isPaperChoiceDone && (computerChoice == "Rock")) {
        playerPoints++;
    } else if (isPaperChoiceDone && (computerChoice == "Scissors")) {
        computerPoints++;
    } else if (isPaperChoiceDone && (computerChoice == "Paper")) {
        computerPoints = computerPoints;
    } else if (isScissorsChoiceDone && (computerChoice == "Rock")) {
        computerPoints++;
    } else if (isScissorsChoiceDone && (computerChoice == "Paper")) {
        playerPoints++;
    } else if (isScissorsChoiceDone && (computerChoice == "Scissors")) {
        computerPoints = computerPoints;
    }

    if (computerPoints == 3) {
        return "Computer won";
    } else if (playerPoints == 3) {
        return "Player won";
    } else {
        return playerPoints + " : " + computerPoints;
    }

}

function startGame() {
    setRandomAvatarForPlayers();
}


// game variables

var computerPoints = 0;
var playerPoints = 0;
var isRockChoiceDone = false;
var isPaperChoiceDone = false;
var isScissorsChoiceDone = false;

startGame();
