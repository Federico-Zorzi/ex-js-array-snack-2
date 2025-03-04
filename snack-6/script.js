// # SNACK 6
/* 
Snack 6 (Bonus) - Ordina i libri

    Crea una variabile booleana (areThereAvailableBooks) per verificare se c’è almeno un libro disponibile.
    Crea un array (booksByPrice) con gli elementi di books ordinati in base al prezzo (crescente).
    Ordina l’array booksByPricein base alla disponibilità (prima quelli disponibili), senza creare un nuovo array.
*/

const books = [
  {
    title: "React Billionaire",
    pages: 250,
    author: {
      name: "Alice",
      age: 35,
    },
    available: false,
    price: "101€",
    tags: ["advanced", "js", "react", "senior"],
  },
  {
    title: "Advanced JS",
    pages: 500,
    author: {
      name: "Bob",
      age: 20,
    },
    available: true,
    price: "25€",
    tags: ["advanced", "js", "mid-senior"],
  },
  {
    title: "CSS Secrets",
    pages: 320,
    author: {
      name: "Alice",
      age: 17,
    },
    available: true,
    price: "8€",
    tags: ["html", "css", "junior"],
  },
  {
    title: "HTML Mastery",
    pages: 200,
    author: {
      name: "Charlie",
      age: 50,
    },
    available: false,
    price: "48€",
    tags: ["html", "advanced", "junior", "mid-senior"],
  },
];

const areThereAvailableBooks = books.some((b) => b.available);
console.log("areThereAvailableBooks", areThereAvailableBooks);

const booksByPrice = structuredClone(books).sort((a, b) => {
  const priceA = parseInt(a.price);
  const priceB = parseInt(b.price);
  return priceA - priceB;
});
console.log("books", books);
console.log("booksByPrice", booksByPrice);

booksByPrice.sort((a, b) =>
  a.available === b.available ? 0 : a.available ? -1 : 1
);
