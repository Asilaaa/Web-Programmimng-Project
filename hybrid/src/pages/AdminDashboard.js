import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const storedFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    setFeedbacks(storedFeedbacks);
  }, []);

  return (
    <div style={{ padding: "20px", color: "#fff" }}>
      <h2>Feedback Dashboard</h2>
      {feedbacks.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {feedbacks.map((feedback, index) => (
            <li
              key={index}
              style={{
                backgroundColor: "#34495e",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            >
              <p>{feedback.feedback}</p>
              <small style={{ color: "#bdc3c7" }}>
                {new Date(feedback.date).toLocaleString()}
              </small>
            </li>
          ))}
        </ul>
      ) : (
        <p>No feedbacks available.</p>
      )}
    </div>
  );
};

export default AdminDashboard;
