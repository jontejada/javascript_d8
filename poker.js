//convert index to suit name string
function whatSuit(input) {
	if (input === 0) {
		return "Clubs";
	}
	if (input === 1) {
		return "Diamonds";
	}
	if (input === 2) {
		return "Hearts";
	}
	if (input === 3) {
		return "Spades";
	}
}
//convert index to number name string
function whatNumber(input) {
	if (input === 0) {
		return "Ace";
	}
	if (input === 1) {
		return "2";
	}
	if (input === 2) {
		return "3";
	}
	if (input === 3) {
		return "4";
	}
	if (input === 4) {
		return "5";
	}
	if (input === 5) {
		return "6";
	}
	if (input === 6) {
		return "7";
	}
	if (input === 7) {
		return "8";
	}
	if (input === 8) {
		return "9";
	}
	if (input === 9) {
		return "10";
	}
	if (input === 10) {
		return "Jack";
	}
	if (input === 11) {
		return "Queen";
	}
	if (input === 12) {
		return "King";
	}
}
//class that makes a card
var Card = function(suit,number) {
	this.suit = suit;
	this.number = number;
	this.name = whatNumber(number) + " of " + whatSuit(suit);
};


//shuffle work
var cardOrder = [];
for (var i = 0 ; i<52 ; i++) {
	cardOrder[i] = i;
}
function shuffle(array) {
	var m = array.length, t, i;
	while (m) {
		i = Math.floor(Math.random() * m--);
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}
	//return array?
}
shuffle(cardOrder);


//function that fills a shuffled deck
var deck = [[],[],[],[]];
function fillDeck (inputDeck){
	for (var i=0 ; i<4 ; i++) {
		for (var j=0 ; j<13 ; j++) {
			inputDeck[i][j] = new Card(i,j);
			inputDeck[i][j].position = cardOrder[13*i+j];
		}
	}
}
//run function
fillDeck(deck);

//***need to rebuild previous function into factory!

//class that builds players with a name and an empty hand array
var Player = function (name) {
	this.name = name;
	this.hand = [];
};

//make 2 new players
var joe = new Player("Joe");
var beth = new Player("Beth");

//class that builds a game with two players
var Game = function (player1, player2) {
	this.players = [ player1 , player2 ];
};

//make a new game
var poker = new Game(joe,beth);

//deals out 5 cards to all players in the game
Game.prototype.dealCards = function() {
    for (var g = 0 ; g<this.players.length ; g++) {
    	var start = 5 * g;
	    for (var h=start ; h<start+5 ; h++) {
	        for (var i=0 ; i<4 ; i++) {
			    for (var j=0 ; j<13 ; j++) {
				    if (deck[i][j].position === h) {
					    this.players[g].hand[h] = deck[i][j];
			    	}
		    	}
	    	}
	    }
	}
};

//test for FLUSH
Game.prototype.hasFlush = function (whatPlayer) {
	if(
		this.players[whatPlayer].hand[1].suit === this.players[whatPlayer].hand[2].suit &&
		this.players[whatPlayer].hand[1].suit === this.players[whatPlayer].hand[3].suit &&
		this.players[whatPlayer].hand[1].suit === this.players[whatPlayer].hand[4].suit &&
		this.players[whatPlayer].hand[1].suit === this.players[whatPlayer].hand[5].suit
		) {
		return true;
	} else { return false };
};