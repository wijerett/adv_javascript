var myLibrary = [];
var library = [];
let bookInfo = ["The Fellowship of the Ring", "Two Towers", "Return of the King", 
"Shadow of what once was", "The way of Kings", "Hereticus", "Malleus", "Xenos"];
let currentIndex = 0;

function Book() {
  
  if (currentIndex < bookInfo.length) {
    myLibrary.push(bookInfo[currentIndex], self.crypto.randomUUID());
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  library.push(myLibrary);
}

function addFirst() {
  myLibrary.push(bookInfo[0]);
  myLibrary.push(self.crypto.randomUUID());
  myLibrary.length = 1;
  library.push(myLibrary);
}
function addSecond() {
  myLibrary.push(bookInfo[1]);
  myLibrary.push(self.crypto.randomUUID());
  myLibrary.length = 1;
  library.push(myLibrary);
}
function addThird() {
  myLibrary.push(bookInfo[2]);
  myLibrary.push(self.crypto.randomUUID());
  myLibrary.length = 1;
  library.push(myLibrary);
}
function addFourth() {
  myLibrary.push(bookInfo[3]);
  myLibrary.push(self.crypto.randomUUID());
  myLibrary.length = 1;
  library.push(myLibrary);
}
function addFifth() {
  myLibrary.push(bookInfo[4]);
  myLibrary.push(self.crypto.randomUUID());
  myLibrary.length = 1;
  library.push(myLibrary);
}
function addSixth() {
  myLibrary.push(bookInfo[5]);
  myLibrary.push(self.crypto.randomUUID());
  myLibrary.length = 1;
  library.push(myLibrary);
}
function addSeventh() {
  myLibrary.push(bookInfo[6]);
  myLibrary.push(self.crypto.randomUUID());
  myLibrary.length = 1;
  library.push(myLibrary);
}
function addEighth() {
  myLibrary.push(bookInfo[7]);
  myLibrary.push(self.crypto.randomUUID());
  myLibrary.length = 1;
  library.push(myLibrary);
}

function newCard() {
  myLibrary.length = 1;
  const newDiv = document.querySelector(".new-cards");
  const content = document.createElement("div");
  content.classList.add("new-card");
  content.textContent = myLibrary;
  newDiv.appendChild(content);
  myLibrary = [];
}

const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("#confirmBtn");


showButton.addEventListener("click", () => {
  favDialog.showModal();
});

favDialog.addEventListener("close", (e) => {
  outputBox.value = 
    favDialog.returnValue === "default"
      ? "No return value."
      : `ReturnValue: ${favDialog.returnValue}.`;
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  favDialog.close(selectEl.value);
});