let myLibrary = [
    {
        title: "The Lord of the Rings", 
        author: "J. R. R. Tolkien",
        read: true 
    },
    {
        title: "Emma", 
        author: "Jane Austen",
        read: false
    },
    {
        title: "Eileen", 
        author: "Ottessa Moshfegh",
        read: true
    }
];

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}

function addBookToLibrary(title, author, read) {
  const book = new Book(title, author, read);
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

        // display author
        let bookAuthor = document.createElement("h4");
        bookAuthor.innerHTML = myLibrary[i].author;
        bookCard.appendChild(bookAuthor);

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
    var author = prompt("Author");
    var read = prompt("Read true/false");
    addBookToLibrary(title, author, read);
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