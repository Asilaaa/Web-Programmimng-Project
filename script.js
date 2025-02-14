const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A classic novel about the American Dream.",
    cover: "https://i.pinimg.com/736x/d9/e1/65/d9e1658b173b0b7a8369830acee01cbc.jpg",
    file: "books/the-great-gatsby.pdf"
  },
  {
    title: "1984",
    author: "George Orwell",
    description: "A dystopian novel about totalitarianism.",
    cover: "https://i.pinimg.com/736x/17/fb/e1/17fbe1b3096863d5af032ce42c80c79c.jpg",
    file: "books/book2.pdf"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A story of racial injustice in the American South.",
    cover: "https://i.pinimg.com/736x/22/6a/82/226a8218d7ce8c30743a0585ff4b8155.jpg",
    file: "books/book3.pdf"
  }
];

function displayBooks(books) {
  const bookGrid = document.getElementById("bookGrid");
  bookGrid.innerHTML = "";

  books.forEach(book => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    bookCard.innerHTML = `
      <img src="${book.cover}" alt="${book.title}">
      <h2>${book.title}</h2>
      <p>By ${book.author}</p>
      <p>${book.description}</p>
      <button class="read-btn" onclick="Read('${book.file}')">Read PDF</button>
    `;

    bookGrid.appendChild(bookCard);
  });
}

function filterBooks() {
  const searchTerm = document.getElementById("search").value.toLowerCase();
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm) ||
    book.author.toLowerCase().includes(searchTerm)
  );
  displayBooks(filteredBooks);
}

function Read(book) {
  const bookDiv = document.getElementById("bookGrid");
  const mainContainer = document.querySelector("main");
  bookDiv.innerHTML = "";

  const embed = document.createElement("embed");
  embed.src = book;
  embed.type = "application/pdf";
  embed.width = "100%";
  embed.height = "600px";

  const backButton = document.createElement("button");
  backButton.innerText = "⬅ Back to Library";
  backButton.classList.add("back-btn");
  backButton.onclick = () => {
    displayBooks(books);
  };

  bookDiv.appendChild(embed);
  mainContainer.insertBefore(bookDiv, backButton);
}

displayBooks(books);
