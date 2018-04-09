"use strict";

function runGame() {

	// below, we define our two player variables (objects)
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

	// below, we call a function that displays the rules of the game
	displayGameRules();

	// need more to play the game!

}

function determineRoundWinner(playerOne, playerTwo) {
	// take in two players from the outside
	// compare their 'gestures'
	// award a point to the winner
}

function displayGameRules() {
	// display the rules of the game!
	alert("Welcome to Rock Paper Scissors!");
	alert("The goal of the game is to be the first player to get two wins, good luck!");

	alert("As a reminder...\nRock crushes Scissors,\nScissors cuts Paper, and\nPaper covers Rock.");
	alert("Good luck!!!");
}

function displayGameWinner(playerOne, playerTwo) {
	// take in two players from the outside
	// compare their 'score' values against the number 2 to see who won the game
	// display the name of the game winner
}

function setPlayerGesture(player) {
	// allow the player to input 'rock', 'paper', or 'scissors'
	// validate the input, and have the player try again if they enter something invalid
}

function setPlayerName(player) {
	// take in a player from the outside
	// allow the player to input their name
	// assign the user input to the 'name' property on the player object
}

function validateGestureInput(userInput) {
	// take in user input from the outside
	// return 'true' or 'false' based on whether or not the input was 'rock', 'paper', or 'scissors'
}