import React from "react";
import type { Memory } from "../types";

interface TimelineProps {
  memories: Memory[];
}

const Timeline: React.FC<TimelineProps> = ({ memories }) => {
  return (
    <div className="timeline">
      {memories.map((memory, index) => (
        <article
          key={memory.year}
          className="timeline-card"
          style={{ animationDelay: `${index * 0.08}s` }}
        >
          <div className="timeline-pill">{memory.year}</div>
          <h3 className="timeline-title">{memory.title}</h3>
          <p className="timeline-description">{memory.description}</p>
        </article>
      ))}
    </div>
  );
};

export default Timeline;

