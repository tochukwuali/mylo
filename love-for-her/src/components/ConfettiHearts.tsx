import React from "react";

const ConfettiHearts: React.FC = () => {
  return (
    <div className="confetti-hearts" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, index) => (
        <span
          key={index}
          className="confetti-heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 0.4}s`,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
};

export default ConfettiHearts;

