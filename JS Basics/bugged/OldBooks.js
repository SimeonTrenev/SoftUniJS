function solve(input) {
  let searchingBook = input.shift();
  let bookCapacity = +input.shift();
  let counting = 0;
  let foundedBook = input.shift();
  while (searchingBook !== foundedBook && bookCapacity > counting) {
    foundedBook = input.shift();
    counting++;
  }
  if (searchingBook !== foundedBook) {
    console.log("The book you search is not here!");
    console.log(`You checked ${counting} books.`);
  } else {
    console.log(`You checked ${counting} books and found it.`);
  }
}
solve([
  "Bourne",
  "32",
  "True Story",
  "Forever",
  "More Space",
  "The Girl",
  "Spaceship",
  "Strongest",
  "Profit",
  "Tripple",
  "Stella",
  "The Matrix",
  "Bourne"
]);
