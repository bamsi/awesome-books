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
    let booksList = this.getBooks();
    booksList.push({ title: this.title, author: this.author });
    window.localStorage.setItem("books", JSON.stringify(booksList));
  }

  displayBooks() {
    const bookList = document.querySelector(".book-list");
    let booksList = this.getBooks();
    let htmlList = "";
    for (let i = 0; i < booksList.length; i += 1) {
      htmlList += `<div>
                    <p>${booksList[i].title}</p>
                    <p>${booksList[i].author}</p>
                    <button type="submit" onClick="removeBook(${i})">Remove</button>
                    <hr />
                  </div>`;
    }
    bookList.innerHTML = htmlList;
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const form = document.getElementById("add-form");

form.addEventListener("submit", function () {
  let newBook = new Book(title.value, author.value);
  newBook.saveBook();
});

let book = new Book();
window.onload = book.displayBooks();
