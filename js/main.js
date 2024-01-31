//All of your book objects are going to be stored in an array, 
const myLibrary = [];

// MY PSEUDOCODE
// user inputs its info
const newBookTitle = document.querySelector("#title");
const newBookAuthor = document.querySelector("#author");
const newBookPages = document.querySelector("#pages");
const newBookLang = document.querySelector("#lang");
const newBookPublication = document.querySelector("#publication");
const newBookIsRead = document.querySelector("#read");
const newBookIsUnread = document.querySelector("#not-read");

const mainContainer = document.querySelector("#main-container");
const booksContainer = document.querySelector('#container');

const addNewBook = document.querySelector("#add-book");
const modal = document.querySelector("#modal");
const modalX = document.querySelector("#modal-close");
const modalClearButton = document.querySelector("#clear-button");
const addButton = document.querySelector("#add-button");

const sampleArr = new Book("A Game Of Thrones", "By: George R. R. Martin", `Number of pages: 694`, "Language: English",`Published: July 1 1996`, "Status: Not read");


addNewBook.addEventListener("click", openModal);
modalX.addEventListener("click", closeModal);
modalClearButton.addEventListener("click", clearModalValues);
addButton.addEventListener("click", addBookToLibrary);

function openModal() {
  modal.style.display = "block";
  mainContainer.style.filter = "blur(5px)";
}

function closeModal() {
  modal.style.display = "none";
  mainContainer.style.filter = "blur(0px)"
}

function clearModalValues() {
  newBookTitle.value, newBookAuthor.value, newBookPages.value, newBookLang.value, newBookPublication.value = "";
}



// the constructor...
// author, title, number of pages, whether it’s been read and anything else you might want

function Book(title, author, pages, lang, pubs, status) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.lang = lang,
  this.pubs = pubs,
  this.status = status
}

// const bookCard = document.querySelector('.book-card');
// bookCard.style.background = "lime";

Book.prototype.displayBook = function() {
  const newDiv = document.createElement('div');
  booksContainer.appendChild(newDiv);
  newDiv.innerHTML = `
  <section class="book-card">
    <div class="card-div"> 
    <a href="#" class="close"></a>
    <section class="card-content">
      <h3>${this.title}</h3>
      <h4>${this.author}</h4>
      <p>${this.pages}</p>
      <p>${this.lang}</p>
      <p>${this.pubs}</p>
      <p>${this.status}</p>
    </section>
    <label class="switch">
      <input type="checkbox">
      <span class="slider round"></span>
    </label>`;
  // console.log(this.author, this.title, this.pages, this.lang, this.pubs, this.status)
}

let newBookArr = []


sampleArr.displayBook();

//Add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. 

// each input value gets pushed into an array following an order

function addBookToLibrary() {
  
    if(newBookIsUnread.checked) {
      newBookArr.push("unread")
    } else if (newBookIsRead.checked) {
      newBookArr.push("read")
    } else {
      alert("Did you read this book?")
    }
    console.log(newBookArr);
    newBookArr = [];
}
// when user presses 'Add': 
// --- a new book-card is created using innerHTML
// --- the book cards uses literals to add author, pages, etc

// Write a function that loops through the array 
// and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.
// const sampleCardContent = document.querySelector(".card-content").children;


// function addSampleBook(arr) {
//   for(let i=0; i < sampleCardContent.length; i++) {
//     sampleCardContent[i].textContent = arr[i];
//   }
// }

// addSampleBook(sampleArr)

// Add a “NEW BOOK” button 
// the button should bring up a form 
// the form should allow users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want. *
// Add a button on each book’s display to remove the book from the library. You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.
// Add a button on each book’s display to change its read status. To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.