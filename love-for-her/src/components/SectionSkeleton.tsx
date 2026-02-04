import React from "react";

interface SectionSkeletonProps {
  variant: "timeline" | "gallery" | "note";
}

const SectionSkeleton: React.FC<SectionSkeletonProps> = ({ variant }) => {
  return (
    <div className={`section-skeleton section-skeleton--${variant}`}>
      {variant === "timeline" && (
        <div className="skeleton-list">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="skeleton-card">
              <div className="skeleton-pill" />
              <div className="skeleton-line skeleton-line--short" />
              <div className="skeleton-line" />
            </div>
          ))}
        </div>
      )}

      {variant === "gallery" && (
        <div className="skeleton-grid">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="skeleton-photo">
              <div className="skeleton-block" />
              <div className="skeleton-line skeleton-line--short" />
            </div>
          ))}
        </div>
      )}

      {variant === "note" && (
        <div className="skeleton-note">
          <div className="skeleton-line" />
          <div className="skeleton-line" />
          <div className="skeleton-line skeleton-line--short" />
        </div>
      )}
    </div>
  );
};

export default SectionSkeleton;

