import React, { useEffect, useState } from "react";

const Bubbles = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prevBubbles) => [
        ...prevBubbles,
        {
          id: Math.random(),
          size: Math.random() * 50 + 20, // Random size 20px - 70px
          left: Math.random() * 100, // Random left position (0-100%)
        },
      ]);

      // Remove bubbles after animation
      setTimeout(() => {
        setBubbles((prev) => prev.slice(1));
      }, 5000);
    }, 800); // New bubble every 0.8s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bubble-container">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
          }}
        />
      ))}
    </div>
  );
};

export default Bubbles;
