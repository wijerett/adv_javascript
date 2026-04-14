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

class Book {

  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = self.crypto.randomUUID();
  }

  static bookCycle() {
    if (currentIndex < bookInfo.length) {
      const [title, author, pages, read] = bookInfo[currentIndex][0].split(', ');
      const book = new Book(title, author, pages, read);
      library.push(book);
      book.tileSet();
      currentIndex++;
    } else {
      currentIndex = 0;
    }
  }

  static addFirst() {
    const [title, author, pages, read] = bookInfo[0][0].split(', ');
    const book = new Book(title, author, pages, read);
    library.push(book);
    book.tileSet();
  }
  static addSecond() {
    const [title, author, pages, read] = bookInfo[1][0].split(', ');
    const book = new Book(title, author, pages, read);
    library.push(book);
    book.tileSet();
  }
  static addThird() {
    const [title, author, pages, read] = bookInfo[2][0].split(', ');
    const book = new Book(title, author, pages, read);
    library.push(book);
    book.tileSet();
  }
  static addFourth() {
    const [title, author, pages, read] = bookInfo[3][0].split(', ');
    const book = new Book(title, author, pages, read);
    library.push(book);
    book.tileSet();
  }
  static addFifth() {
    const [title, author, pages, read] = bookInfo[4][0].split(', ');
    const book = new Book(title, author, pages, read);
    library.push(book);
    book.tileSet();
  }
  static addSixth() {
    const [title, author, pages, read] = bookInfo[5][0].split(', ');
    const book = new Book(title, author, pages, read);
    library.push(book);
    book.tileSet();
  }
  static addSeventh() {
    const [title, author, pages, read] = bookInfo[6][0].split(', ');
    const book = new Book(title, author, pages, read);
    library.push(book);
    book.tileSet();
  }
  static addEighth() {
    const [title, author, pages, read] = bookInfo[7][0].split(', ');
    const book = new Book(title, author, pages, read);
    library.push(book);
    book.tileSet();
  }

  tileSet() {
    const newDiv = document.querySelector(".new-cards");
    const content = document.createElement("div");
    const remove = document.createElement("button");
    const changeRead = document.createElement("button");
    changeRead.classList.add("change-read-button");
    changeRead.textContent = 'Change read status';
    content.classList.add("new-card");
    remove.classList.add("remove-button");
    remove.textContent = 'Remove';
    content.setAttribute("data-index-number", this.id);
    newDiv.appendChild(content);
    
    const updateCardText = () => {
      content.textContent = `${this.title}, ${this.author}, ${this.pages}, ${this.read}`;
      content.appendChild(changeRead);
      content.appendChild(remove);
    };
    updateCardText();
    changeRead.addEventListener('click', () => {
      this.toggleStatus();
      updateCardText();
    });
    remove.addEventListener('click', () => {
      this.removeItem(this.id);
    });
  }
  removeItem(uuid) {
    const index = library.findIndex(book => book.id === uuid);
    if (index !== -1) {
      library.splice(index, 1);
      const card = document.querySelector(`[data-index-number="${uuid}"]`);
      if (card) card.remove();
    }
  }
  toggleStatus() {
    this.read = (this.read === "The Book was read") ? "The Book was not read" : "The Book was read";
  }
}
let book = new Book();


class getID {
  constructor(value1, value2, value3) {
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }
    //Radio();
  getValue() {
    const value1 = dialogInput1.value;
    const value2 = dialogInput2.value;
    const value3 = dialogInput3.value;
    if (value1 === "" || value2 === "" || value3 === "") {
      return
    };

    const book = new Book(value1, value2, value3, value4);
    myLibrary.push(book);
    library.push(book);
    book.tileSet();
    dialogInput1.value = '';
    dialogInput2.value = '';
    dialogInput3.value = '';
    console.log(library);
    console.log(myLibrary);
  };

  Cancel() {
    cancel.addEventListener("click", () => {
      dialogInput1.value = '';
      dialogInput2.value = '';
      dialogInput3.value = '';
      favDialog.close(selectEl.value);
    });
  }

};


const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectEl = favDialog.querySelector("input");
const confirmBtn = favDialog.querySelector("#confirmBtn");
const dialogInput1 = document.getElementById('book-title')
const dialogInput2 = document.getElementById('author');
const dialogInput3 = document.getElementById('pages');
const cancel = document.getElementById('cancel');


let id = new getID();

let value4 = "";

class Radio {
  constructor(value1, value2, value3, value4) {
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }
  setStatus() {
    if(document.getElementById('read-y').checked) {
      value4 = "The Book was read"
    } else if (document.getElementById('read-n').checked) {
      value4 = "The Book was not read"
    }
    document.getElementById('read-y').checked = false;
    document.getElementById('read-n').checked = false;
    showButton.addEventListener("click", () => {
      
      favDialog.showModal();
    });

    confirmBtn.addEventListener("click", (event) => {
      event.preventDefault();
      function validator() {
        const title = document.getElementById('book-title');
        const author = document.getElementById('author');
        const pages = document.getElementById('pages');

        if (!title.checkValidity()) {
          title.reportValidity();
          return false;
        }
        if (!author.checkValidity()) {
          author.reportValidity();
          return false;
        }
        if (!pages.checkValidity()) {
          pages.reportValidity();
          return false;
        }
        return true;
      };
      if (!validator()) return;
      //myLibrary.push(book);
      //library.push(book);
      id.getValue();
      //Cancel();
      //const book = new Book(value1, value2, value3, value4);
      //getValue();
      //readstatus.setStatus();

      favDialog.close(selectEl.value);
      
      dialogInput1.value = '';
      dialogInput2.value = '';
      dialogInput3.value = '';

    });
  };
}
const readstatus = new Radio();
readstatus.setStatus();



//let id = new getID();
//id.getValue();
//id.Confirm();
//id.Cancel();

