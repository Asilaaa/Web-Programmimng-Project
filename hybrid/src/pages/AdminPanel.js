import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import AdminSellRequests from "./AdminSellRequests";
import AdminAddBook from "./AdminAddBook";
import AdminDashboard from "./AdminDashboard"; // Import the new Dashboard component

const AdminPanel = () => {
  const buttonStyle = {
    display: "inline-block",
    padding: "10px 20px",
    margin: "5px",
    fontSize: "1.2rem", 
    color: "#ecf0f1",
    backgroundColor: "#34495e",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#2c3e50",
  };

  // Hover style
  const [hoveredLink, setHoveredLink] = React.useState(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  // Helper to merge base styles with hover styles
  const getLinkStyle = (link) => {
    return hoveredLink === link
      ? { ...buttonStyle, ...buttonHoverStyle }
      : buttonStyle;
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        color: "#fff",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#2c3e50",
          borderRadius: "10px",
          padding: "20px",
          maxWidth: "800px",
          width: "100%",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          Admin Panel
        </h1>

        <nav style={{ marginBottom: "20px", textAlign: "center" }}>
          <Link
            to="dashboard"
            style={getLinkStyle("dashboard")}
            onMouseEnter={() => handleMouseEnter("dashboard")}
            onMouseLeave={handleMouseLeave}
          >
            Dashboard
          </Link>
          <Link
            to="sell-requests"
            style={getLinkStyle("requests")}
            onMouseEnter={() => handleMouseEnter("requests")}
            onMouseLeave={handleMouseLeave}
          >
            Sell Requests
          </Link>
          <Link
            to="add-book"
            style={getLinkStyle("addbook")}
            onMouseEnter={() => handleMouseEnter("addbook")}
            onMouseLeave={handleMouseLeave}
          >
            Add Book
          </Link>
        </nav>

        <Routes>
          <Route index element={<h2>Welcome to the Admin Panel!</h2>} />
          <Route path="dashboard" element={<AdminDashboard />} /> {/* Dashboard Route */}
          <Route path="sell-requests" element={<AdminSellRequests />} />
          <Route path="add-book" element={<AdminAddBook />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPanel;
