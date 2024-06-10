import "./Background.scss";
import React, { useState } from "react";

function Background() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setPosition({ x: clientX, y: clientY });
  };

  return (
    <div className="gradient-bg" onMouseMove={handleMouseMove}>
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
      </div>
    </div>
  );
}

export default Background;
