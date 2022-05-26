let myLibrary = [
    {
        title: "eileen", 
        year: "2020", 
        author: "otessa", 
    },
    {
        title: "emma", 
        year: "2022", 
        author: "austen"
    }
];

let libTitles = [];

function Book(title, year, author) {
  this.title = title;
  this.year = year;
  this.author = author;
}

function addBookToLibrary(title, year, author) {
  const book = new Book(title, year, author)
  myLibrary.push(book);
  displayBooks();
}

function displayBooks(){
    for(var i = 0; i < myLibrary.length; i++){
        
        libTitles.push(myLibrary[i].title);
        console.log(myLibrary[i].title);
    }



    console.log(myLibrary);
    document.getElementById("lib").innerHTML = libTitles;
}

function newBook(){
    var title = prompt("Title");
    var year = prompt("Year");
    var author = prompt("Author");
    addBookToLibrary(title, year, author);
}


displayBooks();

function readStatus(){
    var read = prompt("Have you read this book?");
    if(read === "yes"){
        console.log("You have read this book");
    }
    else{
        console.log("You have not read this book");
    }
}

// // Write a function that loops through the array and displays 
// each book on the page. 
// You can display them in some sort of table, or each on their 
// own “card”. It might help for now to manually add a few books 
// to your array so you can see the display.


// // Add a “NEW BOOK” button that brings up a form allowing 
// users to input the details for the new book: author, title, 
// number of pages, whether it’s been read and anything else 
// you might want.


// // Add a button on each book’s display to remove the book 
// from the library.

// // You will need to associate your DOM elements with the 
// actual book objects in some way. One easy solution is giving 
// them a data-attribute that corresponds to the index of the 
// library array.


// // Add a button on each book’s display to change its read status.

// // To facilitate this you will want to create the function 
// that toggles a book’s read status on your Book prototype instance.