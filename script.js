let booksList = [];
let form = document.getElementById("add-form");

function addForm() {
  let title = document.getElementById("title");
  let author = document.getElementById("author");
  let booksList = JSON.parse(window.localStorage.getItem('books'));
  booksList.push({ title: title.value, author: author.value });
  window.localStorage.setItem('books', JSON.stringify(booksList));
  console.log(booksList);
}

form.addEventListener("submit", addForm);

