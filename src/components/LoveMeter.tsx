import React from "react";

interface LoveMeterProps {
  loveLevel: number;
  setLoveLevel: React.Dispatch<React.SetStateAction<number>>;
}

const loveMessages = [
  "Kind of obsessed with you.",
  "Low‑key addicted to your smile.",
  "Officially can’t imagine life without you.",
  "You’re my favorite everything.",
  "You. Are. My. Whole. World.",
];

const LoveMeter: React.FC<LoveMeterProps> = ({ loveLevel, setLoveLevel }) => {
  const index = loveLevel - 1;

  return (
    <div className="love-meter">
      <div className="love-meter-header">
        <p className="love-meter-label">How much do I love you?</p>
        <span className="love-meter-chip">Spoiler: too much</span>
      </div>

      <input
        type="range"
        min={1}
        max={5}
        value={loveLevel}
        onChange={(e) => setLoveLevel(Number(e.target.value))}
        className="love-meter-slider"
      />

      <div className="love-meter-bubbles">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`love-meter-dot ${
              i < loveLevel ? "love-meter-dot--active" : ""
            }`}
          />
        ))}
      </div>

      <p className="love-meter-message">{loveMessages[index]}</p>
    </div>
  );
};

export default LoveMeter;

