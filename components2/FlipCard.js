import React, { useState } from "react";
import Image from "next/image";

const FlipCard = ({ frontTitle, backContent, frontImage }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      style={{
        width: "250px",
        height: "250px",
        perspective: "1000px",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: "250px",
          height: "250px",
          position: "relative",
          transition: "transform 0.5s",
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Fronte */}
        <div
          style={{
            position: "absolute",
            width: "250px",
            height: "250px",
            backgroundImage: `url(${frontImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0.5rem",
            backfaceVisibility: "hidden",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 255, 0.3)", 
            }}
          ></div>
          <h2
  style={{
    fontSize: "1.25rem",
    zIndex: 1,
    wordWrap: "break-word", 
    padding: "0 10px",      
    textAlign: "center",    
  }}
>
  {frontTitle}
</h2>
        </div>

        {/* Retro */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "#2b6cb0",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0.5rem",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p style={{ fontSize: "0.875rem", textAlign: "center", padding: "1rem" }}>
            {backContent}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
