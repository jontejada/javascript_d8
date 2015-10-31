//class that builds players
var Player = function (name) {
	this.name = name;
	this.move = "";
	this.wins = 0;
	this.losses = 0;
};

//make 2 new players
var joe = new Player("Joe");
var beth = new Player("Beth");

//class that builds a game with two players
var Game = function (player1, player2) {
	this.players = [ player1 , player2 ];
};

//make a new game
var rps = new Game(joe,beth);

//method for the player to randomly choose their move (computer vs computer)
Player.prototype.choose = function() {
	var randomPick = Math.random(); //picks a random number in the range of [0,1)
	if ( randomPick < 1/3 ) {
		this.move = "Rock";
	} else if ( randomPick > 2/3 ) {
		this.move = "Paper";
	} else { 
		this.move = "Scissors";
	}
};

//method to play a round
Game.prototype.play = function() {
	//have both players choose
	this.players[0].choose();
	this.players[1].choose();
	//name each move for ease of use
	var p1move = this.players[0].move;
	var p2move = this.players[1].move;
	//find the winner & announce results & change records
	if (p1move === p2move) { //covers all three combinations that can tie
		console.log("draw!");
	} else if (
			(p1move === "Rock" && p2move === "Scissors") || //the three ways for p1 to win, with OR between them
	        (p1move === "Paper" && p2move === "Rock") ||
	        (p1move === "Scissors" && p2move === "Paper")
		) {
		console.log(this.players[0].name + " wins!");
		this.players[0].wins++;
		this.players[1].losses++;
	} else {
		console.log(this.players[1].name + " wins!"); //p2 wins all three combinations left 
		this.players[1].wins++;
		this.players[0].losses++;
	}
	//print out record
	console.log(this.players[0].name + " has "+this.players[0].wins + " wins. And " + this.players[1].name + " has " + this.players[1].wins + " wins.");
};


//todo*figure out privacy stuff

//todo*make options for computer vs person and person vs person

//todo*multiplayer?






