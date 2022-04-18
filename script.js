let booksList = [];
let form = document.getElementById("add-form");

function addForm() {
  let title = document.getElementById("title");
  let author = document.getElementById("author");
  booksList.push({ title: title, author: author });
  console.log(booksList);
}

form.addEventListener("submit", addForm);
