import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import InteractiveBackground from './components/InteractiveBackground';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio_theme') || 'light';
  });

  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    fetch('https://api.counterapi.dev/v1/nashrahjaan53-portfolio/visits/up')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.count === 'number') {
          setVisitorCount(data.count);
        }
      })
      .catch(err => {
        console.error('Error fetching visitor counter:', err);
        setVisitorCount(null);
      });
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <div className="App" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <InteractiveBackground theme={theme} />
        
        {/* Cursor Glow tracker */}
        <div 
          className="cursor-glow" 
          style={{ 
            left: `${mousePos.x}px`, 
            top: `${mousePos.y}px`
          }} 
          aria-hidden="true"
        />

        <Navbar theme={theme} toggleTheme={toggleTheme} visitorCount={visitorCount} />
        
        <div style={{ flexGrow: 1, zIndex: 1, position: 'relative' }}>
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            {/* Fallback to homepage */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}
