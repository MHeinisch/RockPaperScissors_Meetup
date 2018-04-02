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

while(playerOne.score < 2 && playerTwo.score < 2) {
	playerOne.gesture = prompt(playerOne.name + ", enter your move: [rock] [paper] [scissors]").toLowerCase();
	playerTwo.gesture = prompt(playerOne.name + ", enter your move: [rock] [paper] [scissors]").toLowerCase();

	alert(playerOne.name + " chose " + playerOne.gesture + "\n" + playerTwo.name + " chose " + playerTwo.gesture);

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

alert("And the big winner is...");
alert(".....");
alert("...............");

if(playerOne.score >= 2) {
	alert(playerOne.name + " is the victor!");
}