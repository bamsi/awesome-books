class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static getBooks() {
    let bookList = [];
    const books = JSON.parse(window.localStorage.getItem('books'));
    if (books != null) {
      bookList = books;
    }
    return bookList;
  }

  saveBook() {
    const booksList = this.getBooks();
    booksList.push({ title: this.title, author: this.author });
    window.localStorage.setItem('books', JSON.stringify(booksList));
  }

  displayBooks() {
    const bookList = document.querySelector('.book-list');
    const booksList = this.getBooks();
    let htmlList = '';
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
    window.localStorage.setItem('books', JSON.stringify(newBookList));
  }
}

const title = document.getElementById('title');
const author = document.getElementById('author');
const form = document.getElementById('add-form');

form.addEventListener('submit', () => {
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
