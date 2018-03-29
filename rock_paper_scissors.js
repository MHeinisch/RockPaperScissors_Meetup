"use strict";

let playerOne = {
	gesture: undefined,
	name: undefined,
	score: 0
};

let playerTwo = {
	gesture: undefined,
	name: undefined,
	score: 0	
}

alert("Welcome to Rock Paper Scissors!");
alert("The goal of the game is to be the first player to get two wins, good luck!");

playerOne.name = prompt("Player One, please enter your name:");
playerTwo.name = prompt("Player Two, please enter your name:");

alert("As a reminder...\nRock crushes Scissors,\nScissors cuts Paper, and\nPaper covers Rock.");
alert("Good luck!!!");