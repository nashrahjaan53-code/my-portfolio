import React, { useRef, useState } from 'react';

export default function Tilt3D({ children, className = '' }) {
  const containerRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [shineStyle, setShineStyle] = useState({ transform: 'translate3d(-100%, -100%, 0)' });

  const handleMouseMove = (e) => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to card center (-0.5 to 0.5)
    const relativeX = (e.clientX - rect.left) / width - 0.5;
    const relativeY = (e.clientY - rect.top) / height - 0.5;

    // Max rotation angles (degrees)
    const maxRotateX = 8;
    const maxRotateY = -8; // Negative so card tilts towards mouse

    const rotateX = relativeY * maxRotateX;
    const rotateY = relativeX * maxRotateY;

    // Apply tilt style
    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    );

    // Shift shine gradient opposite to mouse position
    const shineX = (relativeX + 0.5) * 100;
    const shineY = (relativeY + 0.5) * 100;
    setShineStyle({
      transform: `translate3d(${shineX - 50}%, ${shineY - 50}%, 0)`,
    });
  };

  const handleMouseLeave = () => {
    // Reset to initial state
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setShineStyle({ transform: 'translate3d(-100%, -100%, 0)' });
  };

  return (
    <div
      ref={containerRef}
      className={`card-3d-wrapper ${className}`}
      style={{ transform: transformStyle, transition: 'transform 0.15s ease-out' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-3d">
        <div className="card-shine" style={{ ...shineStyle, transition: 'transform 0.15s ease-out' }} />
        {children}
      </div>
    </div>
  );
}
