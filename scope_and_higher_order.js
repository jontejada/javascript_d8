/*
notes from the Scopes, Hoisting, and Higher-Order Functions learning experience
*/





//higher order functions -- a function which either returns a function of accepts on as an argument
function higherOrder() {
    return function(){
        console.log("I'm an inner function!");
    };
}

var returnedFunction = higherOrder();
returnedFunction(); //will console log
higherOrder(); //will not console log
higherOrder()(); //will console log




//closures -- 
function returnAFunction() {
    var closedOver = "This information is closed over";

    return function(){
        console.log(closedOver);
    };
}

var returnedFunction = returnAFunction();
returnedFunction(); //logs the sentence
returnAFunction()(); //also logs the sentence
console.log(closedOver); //closedOver is closed over / not defined in the global scope(?)



//callback functions -- any function that is passed in as a parameter to another function AND is called at the end of the function

function higherOrder(aNumber,callBack) { //callBack is a parameter
    aNumber += 10;
    callBack(aNumber); //and callBack is returned
}

var printHello = function() {
    console.log("Hello");
};

var printANumber = function (input) {
    console.log("printing a number!");
    console.log(input);
};

var someNumber = 5;

higherOrder(someNumber,printHello); //printHello is callback function, logs "Hello"
higherOrder(someNumber,printANumber); //printANumber is callback function, logs "printing a number" and "15"
higherOrder(2,printANumber); //printANumber is callback function, logs "printing a number" and "12"



/*
function highOrderFunction(someNumber, callbackFunction) {
    someNumber += 10;
    callbackFunction(someNumber);
}

var printHello = function(){
    console.log('Hello');
};

var printANumber = function(input) {
    console.log("printing a number");
    console.log(input);
};

var someNumber = 10;
highOrderFunction(someNumber, printHello);
highOrderFunction(someNumber, printANumber);



This code is perfectly legal, and prints:
Hello
printing a number
20
In this example, printANumber and printHello both act as "callback functions".
On the last two lines, we call highOrderFunction, 
and each time the second parameter is a variable whose value is a function. 
The last line of highOrderFunction invokes these "callback" functions.
Callbacks are tricky, but incredibly common in JavaScript.
Take a minute and create a couple of functions that use callbacks!
*/








