const bookOne = "The Hobbit"
const bookAuthor = "by J.R.R. Tolkien"
const bookPages = "295 pages"
const readYn = "not read yet"


function Book() {
  this.title = bookOne;
  this.author = bookAuthor;
  this.pages = bookPages;
  this.read = readYn;
}

const book1 = new Book;
console.log(book1);

let x = {};
let y = [];

function Hero(name, level) {

  this.name = name;
  this.level = level;
}

Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
}

function Warrior(name, level, weapon) {
  Hero.call(this, name, level);
  this.weapon = weapon;
}

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);

function Healer(name, level, spell) {
  Hero.call(this, name, level);
  this.spell = spell;
}

Object.setPrototypeOf(Healer.prototype, Hero.prototype);

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
}

const hero1 = new Warrior('Bjorn', 1, 'axe');
const hero2 = new Healer('Kanin', 1, 'cure');

