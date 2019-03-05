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

    var counter = 10;
    var run = setInterval(function () {
        document.querySelector(".gameResult").innerHTML = counter;
        if (counter === 0) {
            document.querySelector(".gameResult").innerHTML = "RESULT";
            clearInterval(run);
        }
        counter--
    }, 1000);
}



setRandomAvatarForPlayers();
