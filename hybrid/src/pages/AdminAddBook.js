import React, { useState, useEffect } from "react";

const AdminAddBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    description: "",
    pdfUrl: "",  
    genres: "",
  });
  const [coverImage, setCoverImage] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const [books, setBooks] = useState([]);

  
  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(storedBooks);
  }, []);

  
  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  
  const handleCoverFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!book.pdfUrl) {
      alert("Please provide a PDF URL for the book.");
      return;
    }

    const newBook = {
      id: Date.now(), 
      ...book,
      genres: book.genres.split(",").map((g) => g.trim()),
      cover: coverPreview, 
    };

    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));

    alert("Book added to the library!");

    setBook({
      title: "",
      author: "",
      description: "",
      pdfUrl: "",
      genres: "",
    });
    setCoverImage(null);
    setCoverPreview(null);
  };

  const removeBookById = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "auto" }}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={book.title}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <br />
        <textarea
          name="description"
          placeholder="Book Description"
          value={book.description}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <br />
        <input
          type="text"
          name="genres"
          placeholder="Genres (comma separated)"
          value={book.genres}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <br />
        <input
          type="file"
          accept="image/*"
          onChange={handleCoverFileChange}
          style={{ marginBottom: "10px" }}
          required
        />
        <br />
        {coverPreview && (
          <div style={{ marginBottom: "10px" }}>
            <img
              src={coverPreview}
              alt="Cover Preview"
              style={{ maxWidth: "200px", borderRadius: "5px" }}
            />
          </div>
        )}
        <input
          type="text"
          name="pdfUrl"
          placeholder="PDF URL"
          value={book.pdfUrl}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <br />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            backgroundColor: "#CD295A",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Book
        </button>
      </form>

      <h2>Library</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {books.map((book) => (
          <li
            key={book.id}
            style={{
              marginBottom: "15px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              textAlign: "left",
              maxWidth: "400px",
              margin: "10px auto",
            }}
          >
            <strong>{book.title}</strong> by {book.author}
            {book.cover && (
              <div style={{ marginTop: "5px" }}>
                <img
                  src={book.cover}
                  alt="Book Cover"
                  style={{ maxWidth: "100px", borderRadius: "5px" }}
                />
              </div>
            )}
            <br />
            {book.pdfUrl && (
              <a
                href={book.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "5px",
                  padding: "5px 10px",
                  backgroundColor: "#2575fc",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "3px",
                }}
              >
                Read Now
              </a>
            )}
            <br />
            <button
              onClick={() => removeBookById(book.id)}
              style={{
                padding: "5px 10px",
                fontSize: "0.9rem",
                backgroundColor: "#d9534f",
                color: "#fff",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
                marginTop: "5px",
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminAddBook;
