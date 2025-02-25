import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        background: "linear-gradient(45deg, #38ADAE, #CD295A)",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
      }}
    >
      <div className="container">
        <Link
          className="navbar-brand"
          to="/"
          style={{
            fontSize: "2rem",
            fontFamily: "Snell Roundhand, cursive",
            fontWeight: "bold",
            fontStyle: "italic",
            textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
          }}
        >
          NewUU Library Website
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                style={{
                  backgroundColor: "#6FD6FF",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  fontFamily: "Snell Roundhand, cursive",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                style={{
                  backgroundColor: "#6FD6FF",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  fontFamily: "Snell Roundhand, cursive",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                }}
              >
                About
              </Link>
            </li>
            <li
              className="nav-item"
              style={{
                backgroundColor: "#6FD6FF",
                fontWeight: "bold",
                fontStyle: "italic",
                fontFamily: "Snell Roundhand, cursive",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Link className="nav-link" to="/signIn">
                Sign In
              </Link>
            </li>
            <li
              className="nav-item"
              style={{
                backgroundColor: "#6FD6FF",
                fontWeight: "bold",
                fontStyle: "italic",
                fontFamily: "Snell Roundhand, cursive",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Link className="nav-link" to="/sell">
                Sell Your Book
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
