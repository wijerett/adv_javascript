var myLibrary = [];
var library = [];



let bookInfo = [
  ["The Fellowship of the Ring, JRR, 560 pages, Did Read"],
  ["Two Towers, JRR, 700 pages, Did Not Read"],
  ["Return of the King, JRR, 690 pages, Did Not Read"],
  ["Shadow of what once was, Sanderson, 500 pages, Did Read"],
  ["The way of Kings, Sanderson, 900 pages, Did Read"],
  ["Hereticus, Abnett, 900 pages, Did Read"],
  ["Malleus, Abnett, 800 pages, Did Read"],
  ["Xenos, Abnett, 750 pages, Did Read"]
]

let currentIndex = 0;

function Book() {
  if (currentIndex < bookInfo.length) {
    const [title, author, pages, read] = bookInfo[currentIndex][0].split(', ');
    const book = {
      title,
      author,
      pages,
      read,
      id: self.crypto.randomUUID()
    };
    library.push(book);
    newCard(book);
    currentIndex++;
  } else {
    currentIndex = 0;
  }
}

function addFirst() {
  const [title, author, pages, read] = bookInfo[0][0].split(', ');
  const book = {
    title,
    author,
    pages,
    read,
    id: self.crypto.randomUUID()
  };
  library.push(book);
  newCard(book);
}
function addSecond() {
  const [title, author, pages, read] = bookInfo[1][0].split(', ');
  const book = {
    title,
    author,
    pages,
    read,
    id: self.crypto.randomUUID()
  };
  library.push(book);
  newCard(book);
}

function addThird() {
  const [title, author, pages, read] = bookInfo[2][0].split(', ');
  const book = {
    title,
    author,
    pages,
    read,
    id: self.crypto.randomUUID()
  };
  library.push(book);
  newCard(book);
}

function addFourth() {
  const [title, author, pages, read] = bookInfo[3][0].split(', ');
  const book = {
    title,
    author,
    pages,
    read,
    id: self.crypto.randomUUID()
  };
  library.push(book);
  newCard(book);
}

function addFifth() {
  const [title, author, pages, read] = bookInfo[4][0].split(', ');
  const book = {
    title,
    author,
    pages,
    read,
    id: self.crypto.randomUUID()
  };
  library.push(book);
  newCard(book);
}
function addSixth() {
  const [title, author, pages, read] = bookInfo[5][0].split(', ');
  const book = {
    title,
    author,
    pages,
    read,
    id: self.crypto.randomUUID()
  };
  library.push(book);
  newCard(book);
}
function addSeventh() {
  const [title, author, pages, read] = bookInfo[6][0].split(', ');
  const book = {
    title,
    author,
    pages,
    read,
    id: self.crypto.randomUUID()
  };
  library.push(book);
  newCard(book);
}
function addEighth() {
  const [title, author, pages, read] = bookInfo[7][0].split(', ');
  const book = {
    title,
    author,
    pages,
    read,
    id: self.crypto.randomUUID()
  };
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


function newCard(book) {
  
  const newDiv = document.querySelector(".new-cards");
  const content = document.createElement("div");
  const remove = document.createElement("button");
  
  content.classList.add("new-card");

  if (book.title) {
    content.textContent = `${book.title}, ${book.author}, ${book.pages}, ${book.read}`;
  }

  content.setAttribute("data-index-number", book.id);
  newDiv.appendChild(content);

  remove.classList.add("remove-button");
  remove.textContent = 'Remove';
  
  remove.addEventListener('click', () => {
    removeItem(book.id);
  });

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
function radio() {

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
  
  radio()
  const value1 = dialogInput1.value;
  const value2 = dialogInput2.value;
  const value3 = dialogInput3.value;

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

