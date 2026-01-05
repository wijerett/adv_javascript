var myLibrary = [];
var library = [];



let bookInfo = [
  ["The Fellowship of the Ring, JRR, 560 pages, The Book was read"],
  ["Two Towers, JRR, 700 pages, The Book was not read"],
  ["Return of the King, JRR, 690 pages, The Book was not read"],
  ["Shadow of what once was, Sanderson, 500 pages, The Book was read"],
  ["The way of Kings, Sanderson, 900 pages, The Book was read"],
  ["Hereticus, Abnett, 900 pages, The Book was read"],
  ["Malleus, Abnett, 800 pages, The Book was read"],
  ["Xenos, Abnett, 750 pages, The Book was read"]
]

let currentIndex = 0;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = self.crypto.randomUUID();
}

function bookCycle() {
  if (currentIndex < bookInfo.length) {
    const [title, author, pages, read] = bookInfo[currentIndex][0].split(', ');
    const book = new Book(title, author, pages, read);
    library.push(book);
    newCard(book);
    currentIndex++;
  } else {
    currentIndex = 0;
  }
}

function addFirst() {
  const [title, author, pages, read] = bookInfo[0][0].split(', ');
  const book = new Book(title, author, pages, read);
  library.push(book);
  newCard(book);
}
function addSecond() {
  const [title, author, pages, read] = bookInfo[1][0].split(', ');
  const book = new Book(title, author, pages, read);
  library.push(book);
  newCard(book);
}

function addThird() {
  const [title, author, pages, read] = bookInfo[2][0].split(', ');
  const book = new Book(title, author, pages, read);
  library.push(book);
  newCard(book);
}

function addFourth() {
  const [title, author, pages, read] = bookInfo[3][0].split(', ');
  const book = new Book(title, author, pages, read);
  library.push(book);
  newCard(book);
}

function addFifth() {
  const [title, author, pages, read] = bookInfo[4][0].split(', ');
  const book = new Book(title, author, pages, read);
  library.push(book);
  newCard(book);
}
function addSixth() {
  const [title, author, pages, read] = bookInfo[5][0].split(', ');
  const book = new Book(title, author, pages, read);
  library.push(book);
  newCard(book);
}
function addSeventh() {
  const [title, author, pages, read] = bookInfo[6][0].split(', ');
  const book = new Book(title, author, pages, read);
  library.push(book);
  newCard(book);
}
function addEighth() {
  const [title, author, pages, read] = bookInfo[7][0].split(', ');
  const book = new Book(title, author, pages, read);
  library.push(book);
  newCard(book);
}

function removeItem(uuid) {
  const index = library.findIndex(book => book.id === uuid);
  if (index !== -1) {
    library.splice(index, 1);
    const card = document.querySelector(`[data-index-number="${uuid}"]`);
    if (card) card.remove();
  }
}

Book.prototype.toggleStatus = function () {
  this.read = (this.read === "The Book was read") ? "The Book was not read" : "The Book was read";
};

function newCard(book) {
  const newDiv = document.querySelector(".new-cards");
  const content = document.createElement("div");
  const remove = document.createElement("button");
  const changeRead = document.createElement("button");

  changeRead.classList.add("change-read-button");
  changeRead.textContent = 'Change read status';
  content.classList.add("new-card");

  function updateCardText() {
    content.textContent = `${book.title}, ${book.author}, ${book.pages}, ${book.read}`;
    content.appendChild(changeRead);
    content.appendChild(remove);
  }
  updateCardText();

  if (book.title) {
    content.textContent = `${book.title}, ${book.author}, ${book.pages}, ${book.read}`;
  }

  content.setAttribute("data-index-number", book.id);
  newDiv.appendChild(content);

  remove.classList.add("remove-button");
  remove.textContent = 'Remove';
  
  changeRead.addEventListener('click', () => {
    book.toggleStatus();
    updateCardText();
  });
  remove.addEventListener('click', () => {
    removeItem(book.id);
  });

  content.appendChild(changeRead);
  content.appendChild(remove);
}




const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectEl = favDialog.querySelector("input");
const confirmBtn = favDialog.querySelector("#confirmBtn");

const dialogInput1 = document.getElementById('book-title')
const dialogInput2 = document.getElementById('author');
const dialogInput3 = document.getElementById('pages');


let value4 = "";
function Radio() {
  
  if(document.getElementById('read-y').checked) {
    value4 = "The Book was read"
  } else if (document.getElementById('read-n').checked) {
    value4 = "The Book was not read"
  }
  document.getElementById('read-y').checked = false;
  document.getElementById('read-n').checked = false;
}

showButton.addEventListener("click", () => {
  favDialog.showModal();
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  favDialog.close(selectEl.value);
});

//need to refactor so my values get added as an object to library
function getID() {
  
  Radio()
  const value1 = dialogInput1.value;
  const value2 = dialogInput2.value;
  const value3 = dialogInput3.value;
  if (dialogInput1.value, dialogInput2.value, dialogInput3.value === "") {
    return
  };
  const book = {
    title: value1,
    author: value2,
    pages: value3,
    read: value4,
    id: self.crypto.randomUUID()
  };
  
  myLibrary.push(book);
  library.push(book);

  newCard(book);

  dialogInput1.value = '';
  dialogInput2.value = '';
  dialogInput3.value = '';
  console.log(library);
  console.log(myLibrary);
}

