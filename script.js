import { books } from "./js/Books.js";


    function displayBooks(books) {
    const bookGrid = document.getElementById("book-grid");
    bookGrid.innerHTML = "";
  
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
  

  function filterBooks() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm)
    );
    displayBooks(filteredBooks);
  }
  
  displayBooks(books);

  document.getElementById("upload-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("book-title").value;
    const author = document.getElementById("book-author").value;
    const description = document.getElementById("book-description").value;
    const coverFile = document.getElementById("book-cover").files[0];
    const pdfFile = document.getElementById("book-file").files[0];

    if (!coverFile || !pdfFile) {
        alert("Please upload both a cover image and a PDF file.");
        return;
    }

    const coverURL = URL.createObjectURL(coverFile);
    const pdfURL = URL.createObjectURL(pdfFile);

    const newBook = { title, author, description, cover: coverURL, file: pdfURL };

    books.push(newBook);
    displayBooks(books);
});

document.addEventListener("DOMContentLoaded", () => {
  displayBooks(books);
});
