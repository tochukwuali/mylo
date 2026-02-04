import React, { useState } from "react";
import type { Photo } from "../types";

interface PhotoGridProps {
  photos: Photo[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="photo-grid">
      {photos.map((photo, index) => (
        <figure
          key={photo.src}
          className="photo-card"
          style={{ animationDelay: `${index * 0.07}s` }}
          onClick={() =>
            setActiveIndex((current) => (current === index ? null : index))
          }
        >
          {activeIndex === index ? (
            <div className="photo-overlay">
              <p className="photo-overlay-text">{photo.caption}</p>
            </div>
          ) : (
            <div className="photo-image-wrapper">
              <img
                src={photo.src}
                alt={photo.caption}
                className="photo-image"
                loading="lazy"
              />
              <div className="photo-glow" />
            </div>
          )}
        </figure>
      ))}
    </div>
  );
};

export default PhotoGrid;

