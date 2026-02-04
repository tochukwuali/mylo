import React from "react";

const AnimatedBackgroundHearts: React.FC = () => {
  return (
    <div className="bg-hearts" aria-hidden="true">
      {Array.from({ length: 14 }).map((_, index) => (
        <span
          key={index}
          className="bg-heart"
          style={{
            left: `${8 + Math.random() * 84}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${9 + Math.random() * 6}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackgroundHearts;

