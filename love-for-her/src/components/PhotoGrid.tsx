import React from "react";
import type { Photo } from "../types";

interface PhotoGridProps {
  photos: Photo[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
  return (
    <div className="photo-grid">
      {photos.map((photo, index) => (
        <figure
          key={photo.src}
          className="photo-card"
          style={{ animationDelay: `${index * 0.07}s` }}
        >
          <div className="photo-image-wrapper">
            <img
              src={photo.src}
              alt={photo.caption}
              className="photo-image"
              loading="lazy"
            />
            <div className="photo-glow" />
          </div>
          <figcaption className="photo-caption">{photo.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
};

export default PhotoGrid;

