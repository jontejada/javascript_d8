var kitty = {
	name: "Jean",
	furColor: "Calico",
	level: 10,
	colors: ["green","black"],
	friends: {
		name: "Weapons",
		fur: "black",
	}
};

//brittle code that isn't responsive to future changes to contents of kitty
console.log(kitty["name"]);
console.log(kitty["furColor"]);
console.log(kitty["level"]);

//better 
//propertyName points to the names of keys
// , set at the beggining of the loop
//
for (var propertyName in kitty) {
	console.log(propertyName + " is " + kitty[propertyName]);
}

//pulling out from array
for (var propertyName in kitty) {
	if (kitty[propertyName].constructor === Array) {
		for (var i = 0 ; i < kitty[propertyName].length ; i++) {
		console.log(kitty[propertyName][i]);
	}
	} else {
	console.log(propertyName + " is " + kitty[propertyName]);
	}
}


//can also pull the array out into a new variable inside the if page
var theArray = kitty[propertyName];


//dealing with object
for (var propertyName in kitty) {
	if (kitty[propertyName].constructor === Array) {
		for (var i = 0 ; i < kitty[propertyName].length ; i++) {
		console.log(kitty[propertyName][i]);
	}
	} else if (typeof kitty[propertyName] === "object") {
		for (var friendkey in kitty[propertyName]) {
			console.log(propertyName + " is " + kitty[propertyName][friendkey]);
		}
	} else {
	console.log(propertyName + " is " + kitty[propertyName]);
	}
}


// more

// Classes
var Dog = function(firstName, lastName) {
    //secretly , this = {}
    this.firstName = firstName
    //can also use this["firstName"] notation
    this.lastName = lastName
    //secretly return this;
}

Dog.prototype.bark = function () {
    console.log("Bark!")
    console.log("my name is "+this.firstName)
}
    
Dog.prototype.ruinCarpet = function (carpet) {
    carpet.status = "ruined";
    carpet.color = "stained";
}

// Other Things
var carpet = {
    status : "lovely",
    color : "white"
} 

//Initialize Cuddles
var fido = new Dog("Fido", "Destroyer of Carpets");
var fifi = new Dog("Fifi", "Destroyer of Carpets");

// Other Things
var carpet = {
    status : "lovely",
    color : "white"
}

fido.bark();
fifi.bark();

fifi.ruinCarpet(carpet);

console.log(carpet);


// end of more



