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
    // LIGHT MODE: GENTLE FLOWING GOLDEN DATA WAVES
    // ==========================================
    let phase = 0;

    const drawWaves = () => {
      ctx.clearRect(0, 0, width, height);
      phase += 0.003;

      const waveConfigs = [
        { amplitude: 55, period: 0.002, offset: 0, opacity: 0.14, speed: 0.8, yOffset: 0.46 },
        { amplitude: 35, period: 0.0038, offset: Math.PI / 3, opacity: 0.09, speed: -1.0, yOffset: 0.53 },
        { amplitude: 75, period: 0.0016, offset: Math.PI * 1.5, opacity: 0.06, speed: 0.6, yOffset: 0.60 }
      ];

      waveConfigs.forEach((cfg) => {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(184, 144, 71, ${cfg.opacity})`;
        ctx.lineWidth = 1.6;

        for (let x = 0; x < width; x += 4) {
          let baseVal = height * cfg.yOffset;
          let angle = x * cfg.period + (phase * cfg.speed) + cfg.offset;
          
          let y = baseVal + 
                  Math.sin(angle) * cfg.amplitude + 
                  Math.cos(x * 0.0008 - phase * 0.4) * (cfg.amplitude * 0.35);

          // Cursor interactive gravity warp
          if (mouse.x !== null && mouse.y !== null) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < 200) {
              const force = (200 - dist) / 200;
              y += (mouse.y - y) * force * 0.28;
            }
          }

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });
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
        drawWaves();
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
