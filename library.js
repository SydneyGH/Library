const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const bookRead = document.getElementById("read");
const trash = document.createElement("button");
const bookContainer = document.getElementById("container");
const dialog = document.querySelector("dialog");
const showButton = document.getElementById("add-btn");
const closeButton = document.getElementById("close-popup-box");


const myLibrary = [{
    title: "Real Book",
    author: "Real Author",
    pages: "1234",
    read: "Not Read"
},
{
    title: "Really Book",
    author: "Really Author",
    pages: "123",
    read: "Read"
}
];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value);
    myLibrary.push(newBook);
    console.log(myLibrary);
    console.log(newBook);
    refreshLibrary();
}

function displayAllBooks(){
    for (const [index, books] of myLibrary.entries()) {
        displayBook(index, books);
      }
}

function refreshLibrary(){
    bookContainer.innerHTML = '';
    displayAllBooks();
}


function displayBook(index, book){
    const newBookDiv = document.createElement('div');
    newBookDiv.classList.add('books');
    newBookDiv.classList.add(index);
    const newBookCard = document.createElement('div');
    newBookCard.classList.add('book-card');

    // const newBookCardContent = 
    // `
    // <h2 class='book-title'>${book.title}</h2>
    // <ul>
    //     <li class='book-author'>${book.author}</li>
    //     <li class='book-page'>${book.pages}</li>
    //     <li class='book-read'>${book.read}</li>
    // </ul>
    //     <button class = 'remove-btn'>Trash 🗑️</button>
    //     <button class = 'status-btn'>Change Status</button>
    // `
    // newBookCard.innerHTML = newBookCardContent;

    const bookTitle = document.createElement('h2');
    bookTitle.classList.add('book-title');
    bookTitle.textContent = book.title;
    newBookCard.appendChild(bookTitle);

    const bookAuthor = document.createElement('li');
    bookAuthor.classList.add('book-author');
    bookAuthor.textContent = book.author;
    newBookCard.appendChild(bookAuthor);

    const bookPage = document.createElement('li');
    bookPage.classList.add('book-page');
    bookPage.textContent = book.pages;
    newBookCard.appendChild(bookPage);
    
    const bookRead = document.createElement('li');
    bookRead.classList.add('book-read');
    bookRead.textContent = book.read;
    newBookCard.appendChild(bookRead);

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'Trash 🗑️';
    newBookCard.appendChild(removeBtn);

    const changeStatus = document.createElement('button');
    changeStatus.classList.add('status-btn');
    changeStatus.textContent = 'Change Status';
    newBookCard.appendChild(changeStatus);

    newBookDiv.appendChild(newBookCard);
    bookContainer.appendChild(newBookDiv);
 

    // let removeBtns = document.getElementsByClassName('remove-btn')
    removeBtn.addEventListener("click", function() {
        removeBook(index) }, false)

    // let changeStatus = document.querySelector('.status-btn')
    changeStatus.addEventListener("click", function() {
        statusChange(index, book.read) }, false)
}


function removeBook(index){
    myLibrary.splice(index, 1);
    refreshLibrary()
    console.log(myLibrary);
    console.log(`this is the index: ${index}`);
}


function statusChange(index, read){ 
    if (read === "Not Read") 
        {myLibrary[index].read = "Read";} 
    else {
        myLibrary[index].read = "Not Read";}
        refreshLibrary()
}


displayAllBooks();

showButton.addEventListener("click", () => {
    dialog.showModal();
  });

closeButton.addEventListener("click", () => {
    dialog.close();
  });


let btnSubmit = document.querySelector("#submit-button")
btnSubmit.addEventListener("click", addBookToLibrary)

