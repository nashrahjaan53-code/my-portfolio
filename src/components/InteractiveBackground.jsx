import React, { useRef, useEffect } from 'react';

export default function InteractiveBackground({ theme = 'light' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates tracker
    const mouse = { x: null, y: null, radius: 220 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    // ==========================================
    // LIGHT MODE: GOLDEN PARTICLES CONSTELATION
    // ==========================================
    let particlesArray = [];
    const numParticles = Math.min(130, Math.floor((width * height) / 10000));

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3.5 + 2.5;
        this.speedX = Math.random() * 0.7 - 0.35;
        this.speedY = Math.random() * 0.7 - 0.35;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around boundaries
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }
      draw() {
        ctx.fillStyle = theme === 'dark' ? 'rgba(223, 197, 136, 0.55)' : 'rgba(184, 144, 71, 0.45)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particlesArray = [];
      for (let i = 0; i < numParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and connect particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        // Connect lines
        for (let j = i + 1; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.strokeStyle = `rgba(184, 144, 71, ${0.25 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }

        // Connect to mouse
        if (mouse.x !== null && mouse.y !== null) {
          const dx = particlesArray[i].x - mouse.x;
          const dy = particlesArray[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            ctx.strokeStyle = `rgba(184, 144, 71, ${0.35 * (1 - dist / mouse.radius)})`;
            ctx.lineWidth = 1.0;
            ctx.beginPath();
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
    };

    // ==========================================
    // DARK MODE: GOLDEN MATRIX DIGITAL RAIN
    // ==========================================
    const fontSize = 14;
    let columns = Math.floor(width / fontSize) + 1;
    let drops = Array(columns).fill(1);
    
    // Characters representing analytics & code
    const matrixChars = '01XY%R²+-=/∑σµπ'.split('');

    const drawMatrix = () => {
      // Fade canvas slightly to leave trailing trails
      ctx.fillStyle = 'rgba(10, 9, 8, 0.08)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Pick random character
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        
        // Vary gold shades for depth
        const intensity = Math.random();
        if (intensity > 0.8) {
          ctx.fillStyle = '#fafaf9'; // bright spark
        } else if (intensity > 0.4) {
          ctx.fillStyle = '#dfc588'; // standard gold
        } else {
          ctx.fillStyle = '#8c6a2c'; // dark gold
        }

        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(char, x, y);

        // Reset drop once it reaches bottom or randomly
        if (y > height && Math.random() > 0.98) {
          drops[i] = 0;
        }

        // Increment drop y coordinate
        drops[i]++;
      }
    };

    // ==========================================
    // ANIMATION LOOP ROUTER
    // ==========================================
    init();

    let lastTime = 0;
    const fpsInterval = 1000 / 30; // Cap Matrix at 30fps for legibility and efficiency

    const animate = (timestamp) => {
      if (theme === 'dark') {
        const elapsed = timestamp - lastTime;
        if (elapsed > fpsInterval) {
          drawMatrix();
          lastTime = timestamp - (elapsed % fpsInterval);
        }
      } else {
        drawParticles();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: theme === 'dark' ? 0.35 : 0.6,
        transition: 'opacity 0.5s ease'
      }}
    />
  );
}
