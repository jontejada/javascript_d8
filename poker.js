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

//makes a test card
//var threeOfDiamonds = new Card(1,2);

//shuffle work
var cardOrder = [];
for (var i = 0 ; i<52 ; i++) {
	cardOrder[i] = i+1;
}
function shuffle(array) {
	var m = array.length, t, i;
	while (m) {
		i = Math.floor(Math.random() * m--);
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}
	//return array;
}
shuffle(cardOrder);


//function that fills a deck
var deck = [[],[],[],[]];
function fillDeck (inputDeck){
	for (var i=0 ; i<4 ; i++) {
		for (var j=0 ; j<13 ; j++) {
			inputDeck[i][j] = new Card(i,j);
			inputDeck[i][j].position = cardOrder[13*i+j];
		}
	}
}
//rebuild previous function into factory

//run function
fillDeck(deck);


//asign shuffled card order to the deck



//class that builds players
// var Player = function (name) {
// 	this.name = name;
// 	this.hand = 
// }

