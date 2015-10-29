/*

want a shop class

order a sw - customer
take an order - staff
make the sw - staff
deliver the sw - staff
pay and leave - customer

2 or 3 roles
customer
server
sw artist

menu 
line
list of orders
sw
$


need an order class

*/

var Shop = function () {
	this.menu = [];
	this.line = [];
	this.orderQueue = [];
	this.counter = [];
	this.register = 0;
};

var Customer = function (name,order) {
	this.name = name;
	this.order = order;
};

Customer.prototype.orderSandwich = function(sandwich, order) {
	// body...
};

var Server = function (name) {
	this.name = name;
};

var Artist = function (name) {
	this.name = name;
};

var Order = function (customer) {
	this.sandwhiches = [];
	this.customer = customer;
	this.date = Date.now;
};

var Sandwich = function () {

};