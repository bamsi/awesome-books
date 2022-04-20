/* eslint class-methods-use-this: ["error", { "exceptMethods": ["getBooks"] }] */
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  getBooks() {
    let bookList = [];
    const books = JSON.parse(window.localStorage.getItem("books"));
    if (books != null) {
      bookList = books;
    }
    return bookList;
  }

  saveBook() {
    const booksList = this.getBooks();
    booksList.push({ title: this.title, author: this.author });
    window.localStorage.setItem("books", JSON.stringify(booksList));
  }

  displayBooks() {
    const bookList = document.querySelector(".book-list");
    const booksList = this.getBooks();
    let htmlList = "";
    for (let i = 0; i < booksList.length; i += 1) {
      htmlList += `<div class="list-item">
                    <p>${booksList[i].title} by ${booksList[i].author}</p>
                    <button class='remove-button' type="submit" onClick="removeBook(${i})">Remove</button>
                  </div>`;
    }
    bookList.innerHTML = htmlList;
  }

  deleteBook(index) {
    const booksList = this.getBooks();
    const newBookList = booksList.filter((_, i) => i !== index);
    window.localStorage.setItem("books", JSON.stringify(newBookList));
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const form = document.getElementById("add-form");

form.addEventListener("submit", () => {
  const newBook = new Book(title.value, author.value);
  newBook.saveBook();
});

const book = new Book();
window.onload = book.displayBooks();

/* eslint-disable */
function removeBook(index) {
  const removeBooks = new Book();
  removeBooks.deleteBook(index);
  window.onload = removeBooks.displayBooks();
}
/* eslint-enable */

let links = document.querySelectorAll(".link-item");

links.forEach((e) => {
  e.addEventListener("click", function () {
    links.forEach((item) => {
      let value = item.getAttribute("href");
      let element = document.querySelector(value);
      element.classList.add("hide");
    });
    let attributeValue = e.getAttribute("href");
    let section = document.querySelector(attributeValue);
    section.classList.remove("hide");
  });
});


function displayDate() {
  let d = new Date();
  let dformat = [
    d.getMonth()+1,
    d.getDate(),
    d.getFullYear()].join(' ')+',' + ' ' + 
   [d.getHours(),
    d.getMinutes(),
    d.getSeconds()].join(':');
    document.getElementById("date").innerHTML = dformat;
}

window.onload = displayDate(); 