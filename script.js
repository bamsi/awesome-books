let booksList = [];
const form = document.getElementById('add-form');
const bookList = document.querySelector('.book-list');

function addForm() {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  booksList.push({ title: title.value, author: author.value });
  window.localStorage.setItem('books', JSON.stringify(booksList));
}

form.addEventListener('submit', addForm);

function loadData() {
  const books = JSON.parse(window.localStorage.getItem('books'));
  if (books != null) {
    booksList = books;
  }
  let htmlList = '';
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

window.onload = loadData();

/* eslint-disable */
function removeBook(index) {
  const newBookList = booksList.filter((_, i) => i !== index);
  window.localStorage.setItem("books", JSON.stringify(newBookList));
  window.onload = loadData();
}
/* eslint-enable */
