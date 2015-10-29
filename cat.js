var food = 10;
//cat factory
var Cat = function (name, tiredness, hunger, lonliness, happiness) {
	this.name = name;
	this.tiredness = tiredness;
	this.hunger = hunger;
	this.lonliness = lonliness;
	this.happiness = happiness;
};

//cat methods
Cat.prototype.feed = function (scoops) {
	this.hunger -= scoops;
	this.happiness += 1;
	this.tiredness += 1;
	food -= scoops;
	console.log("this hungry now: "+this.hunger);
	console.log("this much food left: "+food);
	if (this.tiredness>12) {
	this.sleep(3);
	console.log("fell asleep");
	}
};

Cat.prototype.sleep = function (hours) {
	this.tiredness -= hours;
	this.hunger += 1;
	this.happiness += 1;
	console.log("this tired now: "+this.tiredness);
};

Cat.prototype.pet = function () {
	if (this.hunger<5 || this.tiredness<5) {
	    console.log("grrr");
	    this.happiness += 2;
	} else {
	this.happiness += 2;
	console.log("purr");
	}
};

//new Cat
var baxter = new Cat ("Baxter", 10, 10, 10, 10);

console.log(baxter);