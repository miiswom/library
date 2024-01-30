//All of your book objects are going to be stored in an array, 
const myLibrary = [];


// the constructor...
// author, title, number of pages, whether it’s been read and anything else you might want

function Book(author, title, pages, lang, pubs, status) {
  this.author = author,
  this.title = title,
  this.pages = pages,
  this.lang = lang,
  this.pubs = pubs,
  this.status = status
}

//Add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. 

const addNewBook = document.querySelector("#add-book");
const modal = document.querySelector("#modal");
const modalX = document.querySelector("#modal-close");
const mainContainer = document.querySelector("#main-container");


addNewBook.addEventListener("click", openModal);
modalX.addEventListener("click", closeModal);

function openModal() {
  modal.style.display = "block";
  mainContainer.style.filter = "blur(5px)";

}

function closeModal() {
  modal.style.display = "none" 
}

// MY PSEUDOCODE
// user inputs its info
const newBookTitle = document.querySelector("#title");
const newBookAuthor = document.querySelector("#author");
const newBookPages = document.querySelector("#pages");
const newBookLang = document.querySelector("#lang");
const newBookPublication = document.querySelector("#publication");
const newBookIsRead = document.querySelector("#read");
const newBookIsUnread = document.querySelector("#not-read");

const addButton = document.querySelector("#add-button");

// each input value gets pushed into an array following an order
addButton.addEventListener("click", addBookToLibrary);
let newBookArr = []

function addBookToLibrary() {
  newBookArr.push(
    newBookTitle.value, newBookAuthor.value, newBookPages.value, newBookLang.value, newBookPublication.value
    );

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
const sampleCardContent = document.querySelector("#card-content").children;

let sampleArr = ["A Game Of Thrones", "By: George R. R. Martin", `Number of pages: 694`, "Language: English",`Published: July 1 1996`, "Status: Not read"];

function addSampleBook(arr) {
  for(let i=0; i < sampleCardContent.length; i++) {
    sampleCardContent[i].textContent = arr[i];
  }
}

addSampleBook(sampleArr)

// Add a “NEW BOOK” button 
// the button should bring up a form 
// the form should allow users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want. *
// Add a button on each book’s display to remove the book from the library. You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.
// Add a button on each book’s display to change its read status. To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.