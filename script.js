let booksList = [];
let form = document.getElementById("add-form");
let bookList = document.querySelector(".book-list");

function addForm() {
  let title = document.getElementById("title");
  let author = document.getElementById("author");
  booksList.push({ title: title.value, author: author.value });
  window.localStorage.setItem("books", JSON.stringify(booksList));
}

form.addEventListener("submit", addForm);

window.onload = loadData();

function loadData () {
  let books = JSON.parse(window.localStorage.getItem("books"));
  if (books != null) {
    booksList = books;
  }
  let htmlList = "";
  for (let i = 0; i < booksList.length; i += 1) {
    htmlList += `<div>
                      <p>${booksList[i].title}</p>
                      <p>${booksList[i].author}</p>
                      <button type="submit" onClick= 'removeBook(${i})'>Remove</button>
                      <hr />
                    </div>`;
  }
  bookList.innerHTML = htmlList;
};

function removeBook (index) {
  let newBookList = booksList.filter((_,i) => {
    i != index
  });
  console.log(newBookList);
  window.localStorage.setItem("books", JSON.stringify(newBookList));
  window.onload = loadData();
};

