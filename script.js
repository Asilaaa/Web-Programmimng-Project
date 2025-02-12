// Sample Book Data
const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A classic novel about the American Dream.",
      cover: "https://via.placeholder.com/150",
      file: "books/book1.pdf"
    },
    {
      title: "1984",
      author: "George Orwell",
      description: "A dystopian novel about totalitarianism.",
      cover: "https://via.placeholder.com/150",
      file: "books/book2.pdf"
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: "A story of racial injustice in the American South.",
      cover: "https://via.placeholder.com/150",
      file: "books/book3.pdf"
    }
  ];
  
  function displayBooks(books) {
    const bookGrid = document.getElementById("book-grid");
    bookGrid.innerHTML = ""; // Clear existing books
  
    books.forEach(book => {
      const bookCard = document.createElement("div");
      bookCard.classList.add("book-card");
  
      bookCard.innerHTML = `
        <img src="${book.cover}" alt="${book.title}">
        <h2>${book.title}</h2>
        <p>By ${book.author}</p>
        <p>${book.description}</p>
        <a href="${book.file}" class="download-btn" download>Download PDF</a>
      `;
  
      bookGrid.appendChild(bookCard);
    });
  }
  
  // Function to filter books
  function filterBooks() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm)
    );
    displayBooks(filteredBooks);
  }
  
  // Initial display of books
  displayBooks(books);