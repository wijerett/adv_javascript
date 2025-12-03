const myLibrary = [];

const bookInfo = ["The Fellowship of the Ring", "Two Towers", "Return of the King", 
"Shadow of what once was", "The way of Kings", "Hereticus", "Malleus", "Xenos"];


function Book() {
  for (let i = 0; i < bookInfo.length; i++) {
    return bookInfo[i];
  };
 
}

function addBookToLibrary() {
  let update = document.getElementById("library").innerHTML = myLibrary;
  const bookTitle = Book();

  let books = {
    name: bookTitle,
    id: self.crypto.randomUUID()
  };
  myLibrary.push(books.name, books.id);
  return myLibrary, update;
  
  
}

console.log(addBookToLibrary());
