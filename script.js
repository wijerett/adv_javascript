var myLibrary = [];
const library = [];



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
    myLibrary.push(bookInfo[currentIndex], self.crypto.randomUUID());
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  library.push(myLibrary.join());
  myLibrary.length = 1;
}

function addFirst() {
  myLibrary.push(bookInfo[0], self.crypto.randomUUID());
  library.push(myLibrary.join());
  myLibrary.length = 1;
}
function addSecond() {
  myLibrary.push(bookInfo[1], self.crypto.randomUUID());
  library.push(myLibrary.join());
  myLibrary.length = 1;
}
function addThird() {
  myLibrary.push(bookInfo[2], self.crypto.randomUUID());
  library.push(myLibrary.join());
  myLibrary.length = 1;
}
function addFourth() {
  myLibrary.push(bookInfo[3], self.crypto.randomUUID());
  library.push(myLibrary.join());
  myLibrary.length = 1;
}
function addFifth() {
  myLibrary.push(bookInfo[4], self.crypto.randomUUID());
  library.push(myLibrary.join());
  myLibrary.length = 1;
}
function addSixth() {
  myLibrary.push(bookInfo[5], self.crypto.randomUUID());
  library.push(myLibrary.join());
  myLibrary.length = 1;
}
function addSeventh() {
  myLibrary.push(bookInfo[6], self.crypto.randomUUID());
  library.push(myLibrary.join());
  myLibrary.length = 1;
}
function addEighth() {
  myLibrary.push(bookInfo[7], self.crypto.randomUUID());
  library.push(myLibrary.join());
  myLibrary.length = 1;
}

function removeItem(value) {
  
  
  console.log(library);
  index = library.indexOf(value);
  console.log(index);
  if (index >= -1) {
    library.splice(index, 1)
  }
  //not working
  console.log(library);
  console.log(myLibrary);
}


function newCard() {
  
  const newDiv = document.querySelector(".new-cards");
  const content = document.createElement("div");
  const remove = document.createElement("button");
  
  content.classList.add("new-card");
  content.textContent = myLibrary;
  newDiv.appendChild(content);

  remove.classList.add("remove-button");
  remove.textContent = 'Remove';
  

  //assigned randomUUID to data index of new-cards from html
  console.log(newDiv.dataset.indexNumber = self.crypto.randomUUID());

  remove.addEventListener('click', () => {
    removeItem();
    //this is where code will go to remove book from library

  });
  
  content.appendChild(remove);
  
  myLibrary = [];
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



function getID() {
  
  radio()
  const value1 = dialogInput1.value;
  const value2 = dialogInput2.value;
  const value3 = dialogInput3.value;
  confirmBtn.addEventListener('confirm', function(event) {
    event.preventDefault();
  })
  myLibrary.push(value1, value2, value3, value4);
  library.push(value1, value2, value3, value4, self.crypto.randomUUID());

  dialogInput1.value = '';
  dialogInput2.value = '';
  dialogInput3.value = '';
  console.log(library);
  console.log(myLibrary);
}

