import React, { useEffect, useRef } from 'react';

export default function GoldenSpline() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse coordinates
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Waves configuration
    const waves = [
      {
        y: height * 0.45,
        length: 0.0015,
        amplitude: 60,
        frequency: 0.005,
        speed: 0.002,
        phase: 0,
        color: 'rgba(184, 144, 71, 0.06)',
      },
      {
        y: height * 0.5,
        length: 0.0012,
        amplitude: 90,
        frequency: 0.004,
        speed: 0.0015,
        phase: Math.PI / 3,
        color: 'rgba(184, 144, 71, 0.08)',
      },
      {
        y: height * 0.55,
        length: 0.001,
        amplitude: 70,
        frequency: 0.006,
        speed: 0.0025,
        phase: Math.PI * (2 / 3),
        color: 'rgba(184, 144, 71, 0.04)',
      },
    ];

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 1.5;

        for (let i = 0; i < width; i++) {
          // Calculate wave height at point i
          const normalWave = Math.sin(i * wave.length + wave.phase) * wave.amplitude;
          
          // Add subtle distortion based on mouse position
          const dx = i - mouse.x;
          const dy = wave.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const force = Math.max(0, (200 - dist) / 200); // Effect radius 200px
          const distortion = force * 25 * Math.sin(i * 0.02 + wave.phase);

          const yPos = wave.y + normalWave + distortion;

          if (i === 0) {
            ctx.moveTo(i, yPos);
          } else {
            ctx.lineTo(i, yPos);
          }
        }

        ctx.stroke();
        wave.phase += wave.speed;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="spline-canvas-container">
      <canvas ref={canvasRef} className="spline-canvas" />
    </div>
  );
}
