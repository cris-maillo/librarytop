let bookCard;

let myLibrary = [
    {
        title: "Lord of Rings", 
        year: "2020", 
        author: "Tolkien", 
    },
    {
        title: "Emma", 
        year: "2022", 
        author: "Janten"
    },
    {
        title: "Jane", 
        year: "2022", 
        author: "Austen"
    },
    {
        title: "Eileen", 
        year: "2022", 
        author: "Jten"
    }
];

function Book(title, year, author) {
  this.title = title;
  this.year = year;
  this.author = author;
}

function addBookToLibrary(title, year, author) {
  const book = new Book(title, year, author);
  myLibrary.push(book);
  
  displayLibrary();
   
}

function displayLibrary(){
    const cardContainer = document.getElementById("cardContainer");
    
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.lastChild);
    }

    for(var i = 0; i < myLibrary.length; i++){
        bookCard = document.createElement("div");
        bookCard.id = i;
        bookCard.className = "card block";
        cardContainer.appendChild(bookCard);

        // display title
        let bookTitle = document.createElement("h2");
        bookTitle.innerHTML = myLibrary[i].title;
        bookTitle.className = "title";
        bookCard.appendChild(bookTitle);

        // display year
        let bookAuthor = document.createElement("h3");
        bookAuthor.innerHTML = myLibrary[i].author;
        bookCard.appendChild(bookAuthor);

        // display author
        let bookYear = document.createElement("h4");
        bookYear.innerHTML = myLibrary[i].year;
        bookCard.appendChild(bookYear);

        // display button
        let bookRemove = document.createElement("button");
        bookRemove.innerHTML = "Remove";
        bookRemove.className = "block";
        bookRemove.addEventListener("click", removeBook);
        bookCard.appendChild(bookRemove);
    }
    console.log(myLibrary);
}

function newBook(){
    var title = prompt("Title");
    var year = prompt("Year");
    var author = prompt("Author");
    addBookToLibrary(title, year, author);
}

function readStatus(){
    if(read === "yes"){
        console.log("You have read this book");
    }
    else{
        console.log("You have not read this book");
    }
}

function removeBook(){
    let index = myLibrary.findIndex(book => book.title === this.parentNode.childNodes[0].innerHTML);
    myLibrary.splice(index, 1);

    displayLibrary();
}


displayLibrary();



// // Add a button on each book’s display to remove the book 
// from the library.

// // Add a button on each book’s display to change its read status.

// // To facilitate this you will want to create the function 
// that toggles a book’s read status on your Book prototype instance.