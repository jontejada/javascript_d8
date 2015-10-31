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
	this.highCard = 0;
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
    for (var g = 0 ; g<this.players.length ; g++) { //g is player index value: 0 for p1 and 1 for p2
    	var start = 5 * g; //?
	    for (var h=start ; h<start+5 ; h++) { //?
	        for (var i=0 ; i<4 ; i++) { //lopp through each suit 
			    for (var j=0 ; j<13 ; j++) { //loop through each number 
				    if (deck[i][j].position === h) {
					    this.players[g].hand.push (deck[i][j]);
			    	}
		    	}
	    	}
	    }
	}
};

//test for FLUSH
Game.prototype.hasFlush = function (whatPlayer) {
	if(
		this.players[whatPlayer].hand[0].suit === this.players[whatPlayer].hand[1].suit &&
		this.players[whatPlayer].hand[0].suit === this.players[whatPlayer].hand[2].suit &&
		this.players[whatPlayer].hand[0].suit === this.players[whatPlayer].hand[3].suit &&
		this.players[whatPlayer].hand[0].suit === this.players[whatPlayer].hand[4].suit
		) {
		return true;
	} else { return false };
};

//use these to give p1 a flush for testing
poker.players[0].hand[0] = deck[0][0];
poker.players[0].hand[1] = deck[0][10];
poker.players[0].hand[2] = deck[0][9];
poker.players[0].hand[3] = deck[0][12];
poker.players[0].hand[4] = deck[0][11];

//test for straight
Game.prototype.hasStraight = function(whatPlayer) {
	var sortedHand = [];
	for ( var i = 0 ; i < 5 ; i++) { 
		sortedHand.push(this.players[whatPlayer].hand[i].number); //fill empty sortedHand array with the number value of each card held
	}
	sortedHand = sortedHand.sort(); //order the array from smallest value to biggest
	if (sortedHand === [0,9,10,11,12]) { //special case for ace high straight
	    this.players[whatPlayer].highCard = 13;
	    return true;
	} else if (
	    sortedHand[4] - sortedHand[3] === 1 && //test for highest card being 1 more than the next highest
	    sortedHand[3] - sortedHand[2] === 1 && //and so on down the hadn
	    sortedHand[2] - sortedHand[1] === 1 &&
	    sortedHand[1] - sortedHand[0] === 1
	    ) {
		this.players[whatPlayer].highCard = sortedHand[4];
		return true;
	} else { return false };
};

//use these to give p1 a straight for testing
// poker.players[0].hand[0] = deck[0][1];
// poker.players[0].hand[1] = deck[1][2];
// poker.players[0].hand[2] = deck[3][3];
// poker.players[0].hand[3] = deck[1][4];
// poker.players[0].hand[4] = deck[2][5];

//test for straight flush
Game.prototype.hasStraightFlush = function(whatPlayer) {
	if (this.hasStraight(whatPlayer) && this.hasFlush(whatPlayer)) {
		return true;
	} else {return false}
};

//use these to give p1 a straight flush for testing
// poker.players[0].hand[0] = deck[0][1];
// poker.players[0].hand[1] = deck[0][2];
// poker.players[0].hand[2] = deck[0][3];
// poker.players[0].hand[3] = deck[0][4];
// poker.players[0].hand[4] = deck[0][5];


//
