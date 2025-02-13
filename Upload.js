import { books } from "./Books.js";

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
});
