//All of your book objects are going to be stored in an array, 
const myLibrary = [];


// the constructor...
// author, title, number of pages, whether it’s been read and anything else you might want

function Book(author, title, pages, status) {
  this.author = author,
  this.title = title,
  this.pages = pages,
  this.language = language,
  this.status = Boolean(status)
}

//Add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. 

const addNewBook = document.querySelector("#add-book");
const modal = document.querySelector("#modal");
const modalX = document.querySelector("#modal-close")

addNewBook.addEventListener("click", openModal);
modalX.addEventListener("click", closeModal)

function openModal() {
  modal.style.display = "block" 
}

function closeModal() {
  modal.style.display = "none" 
}

function addBookToLibrary() {
  // do stuff here
}

// MY PSEUDOCODE
// user inputs its info
// each input value gets pushed into an array following an order
// when user presses 'Add': 
// --- a new book-card is created using innerHTML
// --- the book cards uses literals to add author, pages, etc

// Write a function that loops through the array 
// and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

// Add a “NEW BOOK” button 
// the button should bring up a form 
// the form should allow users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want. *
// Add a button on each book’s display to remove the book from the library. You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.
// Add a button on each book’s display to change its read status. To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.