let myLibrary = [
    {
        title: "The Lord of the Rings", 
        year: "1954", 
        author: "J. R. R. Tolkien",
        read: true 
    },
    {
        title: "Emma", 
        year: "1815", 
        author: "Jane Austen",
        read: false
    },
    {
        title: "Eileen", 
        year: "2015", 
        author: "Ottessa Moshfegh",
        read: true
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
        let bookCard = document.createElement("div");
        bookCard.id = i;
        bookCard.className = "card block fixed";
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

        //read checbox
        let label = document.createElement('label');
        let bookRead = document.createElement("INPUT");
        bookRead.setAttribute("type", "checkbox");
        bookRead.checked = myLibrary[i].read;
        label.appendChild(bookRead);
        label.appendChild(document.createTextNode("Read"));
        label.addEventListener("click", toggleRead);
        bookCard.appendChild(label);

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

function toggleRead(){
    let i = myLibrary.findIndex(book => book.title === this.parentNode.childNodes[0].innerHTML);
    if(myLibrary[i].read === true){
        myLibrary[i].read = false;
    }
    else{
        myLibrary[i].read = true;
    }
}

function removeBook(){
    let index = myLibrary.findIndex(book => book.title === this.parentNode.childNodes[0].innerHTML);
    myLibrary.splice(index, 1);

    displayLibrary();
}


displayLibrary();