class Book {
  constructor (title,author){
    this.title = title;
    this.author = author;
  }

  getBooks() {
    const books = JSON.parse(window.localStorage.getItem('books'));
    return books;
  }

  addBook(){
    
  }

  saveBook() {
    let booksList = [];
    let books = this.getBooks();
    if (books != null) {
      booksList = books;
    }
    booksList.push({ title: this.title, author: this.author });
    window.localStorage.setItem('books', JSON.stringify(booksList));
  }
}

const title = document.getElementById('title');
const author = document.getElementById('author');

const form = document.getElementById('add-form');

form.addEventListener('submit', function() {
  let newBook = new Book (title.value, author.value)
});
