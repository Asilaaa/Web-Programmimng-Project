import React, { useEffect, useState } from "react";

const AdminSellRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const storedRequests = JSON.parse(localStorage.getItem("sellRequests")) || [];
    setRequests(storedRequests);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sell Requests</h2>
      {requests.length === 0 ? (
        <p>No sell requests available.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {requests.map((req) => (
            <li
              key={req.id}
              style={{
                marginBottom: "20px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
              <h3>{req.title}</h3>
              <p>
                <strong>Author:</strong> {req.author} <br />
                <strong>Price:</strong> ${req.price}
              </p>
              <p>{req.description}</p>
              {req.image && (
                <img
                  src={req.image}
                  alt={req.title}
                  style={{ maxWidth: "200px", marginTop: "10px" }}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminSellRequests;
