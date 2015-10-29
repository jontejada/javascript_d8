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

//make the player randomly choose their play
Player.prototype.choose = function() {
	var randomPick = Math.random();
	if ( randomPick < 1/3 ) {
		this.move = "Rock";
	} else if ( randomPick > 2/3 ) {
		this.move = "Paper";
	} else { 
		this.move = "Scissors";
	}
};

//play a round
Game.prototype.play = function() {
	//make both players choose their move
	this.players[0].choose();
	this.players[1].choose();
	//name each move for ease of use
	var p1move = this.players[0].move;
	var p2move = this.players[1].move;
	//find the winner & announce results & change records
	if (p1move === p2move) {
		console.log("draw!");
	} else if (
			(p1move === "Rock" && p2move === "Scissors") ||
	        (p1move === "Paper" && p2move === "Rock") ||
	        (p1move === "Scissors" && p2move === "Paper")
		) {
		console.log(this.players[0].name + " wins!");
		this.players[0].wins++;
		this.players[1].losses++;
	} else {
		console.log(this.players[1].name + " wins!");
		this.players[1].wins++;
		this.players[0].losses++;
	}
	//print out record
	console.log(this.players[0].name + " has "+this.players[0].wins + " wins. And " + this.players[1].name + " has " + this.players[1].wins + " wins.");
};



//separate function that finds winner?





