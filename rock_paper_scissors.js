"use strict";

function runGame() {

	let playerOne = {
		gesture: undefined,
		name: undefined,
		score: 0
	};

	let playerTwo = {
		gesture: undefined,
		name: undefined,
		score: 0	
	};

	displayGameRules();

	setPlayerName(playerOne);
	setPlayerName(playerTwo);

	while(playerOne.score < 2 && playerTwo.score < 2) {

		setPlayerGesture(playerOne);
		setPlayerGesture(playerTwo);

		alert(playerOne.name + " chose " + playerOne.gesture + "\n" + playerTwo.name + " chose " + playerTwo.gesture);

		determineRoundWinner(playerOne, playerTwo);

	}

	displayGameWinner(playerOne, playerTwo);

}

function determineRoundWinner(playerOne, playerTwo) {
	if(playerOne.gesture === playerTwo.gesture) {
		alert("Tie");
	}
	else if(playerOne.gesture === "rock" && playerTwo.gesture === "scissors" || playerOne.gesture === "paper" && playerTwo.gesture === "rock") {
		playerOne.score++;	
		alert(playerOne.name + " wins this round!\nThe score is " + playerOne.score + "-" + playerTwo.score);
	}
	else {
		playerTwo.score++;
		alert(playerTwo.name + " wins this round\nThe score is " + playerOne.score + "-" + playerTwo.score);
	}
}

function displayGameRules() {
	alert("Welcome to Rock Paper Scissors!");
	alert("The goal of the game is to be the first player to get two wins, good luck!");

	alert("As a reminder...\nRock crushes Scissors,\nScissors cuts Paper, and\nPaper covers Rock.");
	alert("Good luck!!!");
}

function displayGameWinner(playerOne, playerTwo) {
	alert("And the big winner is...");
	alert(".....");
	alert("...............");
	alert(".........................");

	if(playerOne.score >= 2) {
		alert(playerOne.name + " is the victor!");
	}
	else {
		alert(playerTwo.name + " is the victor!");	
	}
}

function setPlayerGesture(player) {
	let isValid = false;
	do {
		player.gesture = prompt(player.name + ", enter your move: [rock] [paper] [scissors]").toLowerCase();
		isValid = validateGestureInput(player.gesture);
	} while(!isValid);
}

function setPlayerName(player) {
	player.name = prompt("Player, please enter your name:");	
}

function validateGestureInput(userInput) {
	let isValid = false;

	if(userInput === "rock" || userInput === "paper" || userInput === "scissors"){
		isValid = true;
	}

	return isValid;
}