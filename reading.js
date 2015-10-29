//new class that builds a Book from 5 inputs
var Book = function(title,genre,author,read,readDate) {
	this.title = title;
	this.genre = genre;
	this.author = author;
	this.read = read;
	if (read) {
	    this.readDate = new Date(readDate);
	} else {
	    this.readDate = "";
	}
};

//book1
var lorax = new Book ("The Lorax", "childrens", "Dr. Seuss", true, "Dec 1, 1990");
//book2
var eloquent = new Book ("Eloquent Javascript", "programming", "Marijn Haverbeke", false, "");
//book3
var good = new Book ("Javascript The Good Parts", "programming", "Douglas Crockford", false, "");
//book4
var martian = new Book ("The Martian", "sci-fi", "Andy Weir", true, "Oct 1, 2015");
//book5
var why = new Book ("Why Not Me", "non-fiction", "Mindy Kaling", false, "");
//book6
var survivor = new Book ("The Survivor", "fiction", "Mitch Rapp", false, "");


//new class that builds a mostly empty BookList
var BookList = function () {
    this.booksRead = 0;
    this.booksUnread = 0;
    this.nextBook = "";
    this.currentBook = "";
    this.lastBook = "";
    this.books = [];
};

//method for BookList that adds a single book
BookList.prototype.add = function(book) {
    //add a book to the booklist
    this.books.push(book);
    //has the book been read?
    if (book.read) {
        this.booksRead++;
    } else {
        this.booksUnread++;
        //fill current if empty
        if (!this.currentBook) {
            this.currentBook = this.books[this.books.length-1];
        //fill next if empty
        } else if (!this.nextBook) {
            this.nextBook = this.books[this.books.length-1];
        }
    }
};

//method
BookList.prototype.finishCurrentBook = function () {
    //add to read, subtract from unread
    this.booksRead++;
    this.booksUnread--;
    //enter a read date
    this.currentBook.readDate = new Date();
    //make read true
    this.currentBook.read = true;
    //make current -> last
    this.lastBook = this.currentBook;
    //make next -> current
    this.currentBook = this.nextBook;
    //make first unread in array -> next, but exclude current
    for (var i = 0; i<this.books.length; i++) {
        if (!this.books[i].read && this.books[i] !== this.currentBook) {
            this.nextBook = this.books[i];
        }
    }
    
};

/*
var shelf = new BookList()
shelf.add(lorax);shelf.add(eloquent);shelf.add(good);shelf.add(martian);shelf.add(why);shelf.add(survivor);

*/