import React, { useRef, useState } from 'react';

export default function SpotlightCard({ 
  children, 
  className = "", 
  spotlightColor = "rgba(222, 176, 132, 0.16)",
  borderColor = "#3D3D3D",
  hoverBorderColor = "rgba(222, 176, 132, 0.6)"
}) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl overflow-hidden bg-[#2E2E2E] border transition-all duration-300 ${className}`}
      style={{
        borderColor: opacity > 0 ? hoverBorderColor : borderColor,
      }}
    >
      {/* Dynamic Cursor Spotlight Radial Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 65%)`,
        }}
      />
      
      {/* Card Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
