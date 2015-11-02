/*
my notes from this post about javascript constructors / prototype chain
http://blog.pivotal.io/labs/labs/javascript-constructors-prototypes-and-the-new-keyword
*/

//constructor is any function used as a constructor. Constructs with "new" keyword. A function can be this, or called as normal, or both.
function Book(inputName) {
    this.name = inputName;
    this.read = false;
}

//constructor is called with new
var hp = new Book("Harry Potter");
/*results:
(1) creates/returns* a new hp object

(2) sets the constructor property of the object hp to Book
which means these two lines return true:
hp.constructor == Book
hp instanceof Book
(constructor is a special property)

(3) sets up the object to delegate to Book.prototype
(prototype starts as a special empty object)
when an object is constructed it injerits all of the properties of the constructor's prototype
delegation: object will delegate any properties which have not been explicitly set up to the constructor prototype
so changes to the prototype will pass on to the instance
they can be overridden by defining them for the instance
same can be done with methods (which are just functions assigned to a property)

(4) calls Book() in the context of the new object
inside the function, "this" is set to the new object

*returns the new object unless the constructor explicitly returns something (and drops the new object)
*/

//method
Book.prototype.finished = function () {
    this.read = true;
};

hp.finished(); //changes hp.read from false to true


//another way to write a method?? NOT WORKING (see Putting it all together section)
//  Book.prototype = {
//     unfinished: function unfinished() {
//         this.read = false;
//     }
// };



//Subclassing


/*
create/clone
when you don't want classes
when you want one object to inherit the properties of another but be able to override them
*/

function create(parent) {
    var F = function() {};
    F.prototype = parent;
    return new F();
}

var masterObject = {a:"masterObject value"};

var obj1 = create(masterObject);
var obj2 = create(masterObject);
var obj3 = create(masterObject);
obj3.a = "overridden value"; //typo here on website

/* these are set:
obj1.a; //"masterObject value"
obj2.a; //"masterObject value"
obj3.a; //"overridden value"
*/

/* but can be changed with:
masterObject.a = "new masterObject value"
*/

/*
obj1.a; //"new masterObject value"
obj2.a; //"new masterObject value"
obj3.a; //"overridden value"
*/


