	// MUSIC SECTION
	var playButton;


	function playMusic() {
	    audio = new Audio();
	    audio.src = "audio/whatIsLove.mp3";
	    audio.loop = true;
	    audio.play();
	    playButton = document.getElementById("playMusicButtonID");
	    playButton.addEventListener("click", play);

	    stopButton.addEventListener("click", stop);

	    function play() {
	        if (audio.paused) {
	            audio.play();
	            playbtn.style.background = "url(imagees/avatar1.png) no-repeat";
	        } else {
	            audio.pause();
	            playbtn.style.background = "url(imagees/avatar2.png) no-repeat";
	        }
	    }
	}

	window.addEventListener("load", playMusic);


	// END OF MUSIC SECTION




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

	    var counter = 10;
	    var run = setInterval(function () {
	        document.querySelector(".gameResult").innerHTML = counter;


	        displayChoicesButtons()
	        displaySword()

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
	    computerChoice = computerRandomChoice();

	    //hide sword
	    document.getElementById("sword").style.visibility = "hidden";



	    displayChoices(playerChoice, computerChoice);



	    if ((playerChoice == "Rock") && (computerChoice === "Rock")) {
	        playerPoints = playerPoints;
	    } else if ((playerChoice === "Rock") && (computerChoice === "Scissors")) {
	        playerPoints++;
	    } else if ((playerChoice === "Rock") && (computerChoice === "Paper")) {
	        computerPoints++;
	    } else if ((playerChoice === "Paper") && (computerChoice === "Rock")) {
	        playerPoints++;
	    } else if ((playerChoice === "Paper") && (computerChoice === "Paper")) {
	        playerPoints = playerPoints;
	    } else if ((playerChoice === "Paper") && (computerChoice === "Scissors")) {
	        computerPoints++;
	    } else if ((playerChoice === "Scissors") && (computerChoice === "Scissors")) {
	        playerPoints = playerPoints;
	    } else if ((playerChoice === "Scissors") && (computerChoice === "Paper")) {
	        playerPoints++;
	    } else if ((playerChoice === "Scissors") && (computerChoice === "Rock")) {
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

	function displayChoices(playerChoice,
	    computerChoice) {

	    if (playerChoice === "Rock") {
	        document.getElementById("playerChoice").style.visibility = "visible";
	        var doc = document.getElementById("player-choice-id");
	        doc.className = "far fa-hand-rock draw";

	    } else if (playerChoice === "Paper") {
	        document.getElementById("playerChoice").style.visibility = "visible";
	        var doc = document.getElementById("player-choice-id");
	        doc.className = "far fa-hand-paper draw";

	    } else if (playerChoice === "Scissors") {
	        document.getElementById("playerChoice").style.visibility = "visible";
	        var doc = document.getElementById("player-choice-id");
	        doc.className = "far fa-hand-scissors draw rotateScissors";
	    }

	    if (computerChoice === "Rock") {
	        document.getElementById("computerChoice").style.visibility = "visible";
	        var doc = document.getElementById("computer-choice-id");
	        doc.className = "far fa-hand-rock draw";
	    } else if (computerChoice === "Paper") {
	        document.getElementById("computerChoice").style.visibility = "visible";
	        var doc = document.getElementById("computer-choice-id");
	        doc.className = "far fa-hand-paper draw";
	    } else if (computerChoice === "Scissors") {
	        document.getElementById("computerChoice").style.visibility = "visible";
	        var doc = document.getElementById("computer-choice-id");
	        doc.className = "far fa-hand-scissors draw";
	    }


	}

	function displayChoicesButtons() {

	    document.getElementById("fight-box-button").style.visibility = "hidden";
	    document.getElementById("choices").style.visibility = "visible";
	}

	function displaySword() {
	    document.getElementById("playerChoice").style.visibility = "hidden";
	    document.getElementById("computerChoice").style.visibility = "hidden";

	    document.getElementById("sword").style.visibility = "visible";

	}

	function computerRandomChoice() {
	    var tab = ["Rock", "Scissors", "Paper"];
	    var randomNumber = getRandomNumber(3) - 1;
	    return tab[randomNumber];
	}

	function resetRound() {
	    playerChoice = "";
	    computerChoice = "";
	    playerNoTakenChoice = false;
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
	var computerChoice = "";
	startGame();
