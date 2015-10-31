//convert index to suit name string
function whatSuit(input) {
	if (input === 0) { return "Clubs"; }
	if (input === 1) { return "Diamonds"; }
	if (input === 2) { return "Hearts"; }
	if (input === 3) { return "Spades"; }
}
//convert index to number name string
function whatNumber(input) {
	if (input === 0) { return "Ace"; }
	if (input === 1) { return "2"; }
	if (input === 2) { return "3"; }
	if (input === 3) { return "4"; }
	if (input === 4) { return "5"; }
	if (input === 5) { return "6"; }
	if (input === 6) { return "7"; }
	if (input === 7) { return "8"; }
	if (input === 8) { return "9"; }
	if (input === 9) { return "10"; }
	if (input === 10) { return "Jack"; }
	if (input === 11) {	return "Queen"; }
	if (input === 12) { return "King"; }
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
	cardOrder[i] = i; //fills the empty array with ordered list of numbers from 0 to 51
}
function shuffle(array) { //Fisher–Yates shuffle from http://bost.ocks.org/mike/shuffle/ (don't fully understand this yet, but it works)
	var m = array.length, t, i;
	while (m) {
		i = Math.floor(Math.random() * m--);
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}
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

//todo*rebuild previous function?

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

//start a new game
var poker = new Game(joe,beth);

//method that deals out 5 cards to all players in the game
Game.prototype.dealCards = function() {
    for (var g = 0 ; g<this.players.length ; g++) { //g is player index value: 0 for p1, 1 for p2
    	var start = 5 * g; //where to start pulling cards from the position array: 0 for p1, 5 for p2
	    for (var h=start ; h<start+5 ; h++) { //loop through the five cards 
	        for (var i=0 ; i<4 ; i++) { //loop through each suit 
			    for (var j=0 ; j<13 ; j++) { //loop through each number 
				    if (deck[i][j].position === h) { //find the appropriate card
					    this.players[g].hand.push (deck[i][j]); //put that card in the players hand
			    	}
		    	}
	    	}
	    }
	}
};

//deal out the cards
poker.dealCards();

//test for flush
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

//use these to give p1 a flush for testing (this is also an ace high straight and a straight flush)
// poker.players[0].hand[0] = deck[0][0];
// poker.players[0].hand[1] = deck[0][10];
// poker.players[0].hand[2] = deck[0][9];
// poker.players[0].hand[3] = deck[0][12];
// poker.players[0].hand[4] = deck[0][11];

//fixing the .sort() method so that it orders numerically 
function sortNumber(a,b) {
    return a - b;
}

//test for straight
Game.prototype.hasStraight = function(whatPlayer) {
	var sortedHand = [];
	for ( var i = 0 ; i < 5 ; i++) { 
		sortedHand.push(this.players[whatPlayer].hand[i].number); //fill empty sortedHand array with the number value of each card held
	}
	sortedHand.sort(sortNumber); //order the array from smallest value to biggest
	if ( //special case for ace high straight
		sortedHand[0] === 0 &&
		sortedHand[1] === 9 && 
		sortedHand[2] === 10 && 
		sortedHand[3] === 11 && 
		sortedHand[4] === 12
	){
	    this.players[whatPlayer].highCard = 13; //set high card value to one more than king
	    return true;
	} else if ( //for normal straights
	    sortedHand[4] - sortedHand[3] === 1 && //test for highest card being 1 more than the next highest
	    sortedHand[3] - sortedHand[2] === 1 && //and so on down the hand
	    sortedHand[2] - sortedHand[1] === 1 &&
	    sortedHand[1] - sortedHand[0] === 1
	) {
		this.players[whatPlayer].highCard = sortedHand[4];
		return true;
	} else { return false }; //no straight
};

//use these to give p1 a straight for testing
// poker.players[0].hand[0] = deck[0][1];
// poker.players[0].hand[1] = deck[1][2];
// poker.players[0].hand[2] = deck[3][3];
// poker.players[0].hand[3] = deck[1][4];
// poker.players[0].hand[4] = deck[2][5];

//test for straight flush
Game.prototype.hasStraightFlush = function(whatPlayer) {
	if (this.hasStraight(whatPlayer) && this.hasFlush(whatPlayer)) { //test for a straight and a flush
		return true;
	} else {return false}
};

//use these to give p1 a straight flush for testing
// poker.players[0].hand[0] = deck[0][1];
// poker.players[0].hand[1] = deck[0][2];
// poker.players[0].hand[2] = deck[0][3];
// poker.players[0].hand[3] = deck[0][4];
// poker.players[0].hand[4] = deck[0][5];


//test for four of a kind VERY INCOMPLETE
Game.prototype.hasFourOfAKind = function(whatPlayer) {
	var a = [];
	for ( var i = 0 ; i < 13 ; i++) {
		for (var j = 0 ; j < 5 ; j++) {
		    if ( poker.players[whatPlayer].hand[j].number === i) {
		        
		    }
		}
	}
};
