
async function getBooks(genre) {
  const res = await fetch(`/books?genre=${genre}`);
  const books = await res.json();
  const list = document.getElementById("book-list");
  list.innerHTML = "<h2>Recommendations:</h2>" + books.map(b => `<p>${b}</p>`).join("");
}

const quotes = [
  "Believe you can and you're halfway there.",
  "Push yourself, because no one else is going to do it for you.",
  "Success doesn’t just find you. You have to go out and get it."
];
document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];
