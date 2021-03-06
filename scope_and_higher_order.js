/*
notes from the Scopes, Hoisting, and Higher-Order Functions learning experience
*/

//




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
    callBack(aNumber); //and callBack is returned (invoking the callback)
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









