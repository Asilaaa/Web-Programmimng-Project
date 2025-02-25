import React, { useState } from "react";

const Sell = () => {
  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    price: "",
    description: "",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setBookDetails({ ...bookDetails, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new sell request object
    const newRequest = {
      id: Date.now(), // simple unique id
      ...bookDetails,
      // For demo purposes we store the preview (base64 image string)
      image: preview,
    };

    // Get existing sell requests from localStorage
    const existing = JSON.parse(localStorage.getItem("sellRequests")) || [];
    // Append the new request
    existing.push(newRequest);
    localStorage.setItem("sellRequests", JSON.stringify(existing));

    alert("Book listed for sale!");

    // Reset form fields
    setBookDetails({ title: "", author: "", price: "", description: "" });
    setImage(null);
    setPreview(null);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Sell Your Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={bookDetails.title}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={bookDetails.author}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="number"
          name="price"
          placeholder="Price ($)"
          value={bookDetails.price}
          onChange={handleChange}
          required
        />
        <br />
        <textarea
          name="description"
          placeholder="Book Description"
          value={bookDetails.description}
          onChange={handleChange}
          required
        />
        <br />
        {/* File upload input */}
        <input type="file" accept="image/*" onChange={handleFileChange} required />
        <br />
        {/* Preview the image if available */}
        {preview && (
          <div style={{ margin: "10px" }}>
            <img src={preview} alt="Preview" style={{ maxWidth: "200px" }} />
          </div>
        )}
        <button type="submit">Sell Book</button>
      </form>
    </div>
  );
};

export default Sell;
