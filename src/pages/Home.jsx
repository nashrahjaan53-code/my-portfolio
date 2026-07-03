import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Tilt3D from '../components/Tilt3D';
import AnalyticsSandbox from '../components/AnalyticsSandbox';
import TypingHeadline from '../components/TypingHeadline';
import CommandLineTerminal from '../components/CommandLineTerminal';

export default function Home() {
  const primaryPhoto = 'profile.jpg';
  const [photoSrc, setPhotoSrc] = useState(primaryPhoto);
  const [visitorCount, setVisitorCount] = useState(24842);

  useEffect(() => {
    const currentCount = parseInt(localStorage.getItem('portfolio_visitors') || '24842', 10);
    const newCount = currentCount + Math.floor(Math.random() * 3) + 1;
    localStorage.setItem('portfolio_visitors', newCount.toString());
    setVisitorCount(newCount);
  }, []);

  const handlePhotoError = () => {
    setPhotoSrc(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <>
      <main style={{ position: 'relative', zIndex: 2 }}>
        <div className="ticker-container">
          <div className="ticker-wrap">
            <div className="ticker-item">SQL ROWS AUDITED: <span>284K+</span></div>
            <div className="ticker-item">AVERAGE MODEL R² SCORE: <span>94.2%</span></div>
            <div className="ticker-item">RL RISK AGENT SHARPE RATIO: <span>2.84</span></div>
            <div className="ticker-item">DBSCAN CLUSTER HUBS DETECTED: <span>345</span></div>
            <div className="ticker-item">MISTRAL 7B QLORA FINE-TUNES: <span>4-BIT</span></div>
            <div className="ticker-item">PYTORCH CLASSIFICATION PRECISION: <span>96.0%</span></div>
            <div className="ticker-item">SMART CONTRACT AUDITED BYTECODE: <span>1,240</span></div>
            <div className="ticker-item">ARIMA+LSTM FORECAST CONVERGENCE: <span>88.4%</span></div>
            
            {/* Duplicated for infinite loops */}
            <div className="ticker-item">SQL ROWS AUDITED: <span>284K+</span></div>
            <div className="ticker-item">AVERAGE MODEL R² SCORE: <span>94.2%</span></div>
            <div className="ticker-item">RL RISK AGENT SHARPE RATIO: <span>2.84</span></div>
            <div className="ticker-item">DBSCAN CLUSTER HUBS DETECTED: <span>345</span></div>
            <div className="ticker-item">MISTRAL 7B QLORA FINE-TUNES: <span>4-BIT</span></div>
            <div className="ticker-item">PYTORCH CLASSIFICATION PRECISION: <span>96.0%</span></div>
            <div className="ticker-item">SMART CONTRACT AUDITED BYTECODE: <span>1,240</span></div>
            <div className="ticker-item">ARIMA+LSTM FORECAST CONVERGENCE: <span>88.4%</span></div>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="hero container">
          <div className="hero-grid">
            <motion.div
              className="hero-left"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                <span className="kicker" style={{ marginBottom: 0 }}>Srinagar, Jammu & Kashmir, India</span>
                <div className="visitor-counter-badge">
                  <span className="visitor-counter-dot" />
                  <span>VISITOR #{visitorCount.toLocaleString()} // ACTIVE NOW</span>
                </div>
              </div>
              
              <h1 className="hero-title">
                Nashrah Khan<br />
                <span>Data Analyst & BI Developer</span>
              </h1>
              <p className="hero-subtitle" style={{ minHeight: '54px' }}>
                <TypingHeadline />
              </p>
              
              <div className="hero-pills">
                <span className="hero-pill">SQL & Databases</span>
                <span className="hero-pill">Python & R</span>
                <span className="hero-pill">Power BI & Dashboards</span>
                <span className="hero-pill">ETL & Data Pipelines</span>
                <span className="hero-pill">React & Full-Stack</span>
                <span className="hero-pill">Statistical Modeling</span>
              </div>

              <div className="hero-actions">
                <Link to="/projects" className="btn btn-primary">
                  Explore Showroom
                </Link>
                <a href="#sandbox" className="btn btn-secondary">
                  Try BI Sandbox
                </a>
              </div>

              <div className="hero-stats">
                <div className="hero-stat-item">
                  <span className="hero-stat-value">35</span>
                  <span className="hero-stat-label">End-to-End Projects</span>
                </div>
                <div className="hero-stat-item">
                  <span className="hero-stat-value">15K+</span>
                  <span className="hero-stat-label">Lines of Code</span>
                </div>
                <div className="hero-stat-item">
                  <span className="hero-stat-value">94%</span>
                  <span className="hero-stat-label">Average R² Accuracy</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="hero-right"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="portrait-shell">
                {photoSrc ? (
                  <img
                    src={photoSrc}
                    alt="Nashrah Khan portrait"
                    className="portrait"
                    onError={handlePhotoError}
                  />
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, var(--accent-gold-light), var(--accent-gold))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '32px',
                      fontWeight: '600'
                    }}
                  >
                    NK
                  </div>
                )}
                <span className="portrait-glow" aria-hidden="true" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ANALYTICS SANDBOX SECTION */}
        <section id="sandbox" className="container" style={{ padding: '60px 24px' }}>
          <div className="section-header">
            <h2>Interactive BI Playground</h2>
            <p>Select a dataset and choose an operation below to test the client-side analytics simulator in real time.</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AnalyticsSandbox />
          </motion.div>
        </section>

        {/* COMMAND LINE TERMINAL SECTION */}
        <section className="container" style={{ padding: '60px 24px', borderTop: '1px solid var(--border-subtle)' }}>
          <div className="section-header">
            <h2>Data OS Console</h2>
            <p>Interact with the terminal shell to query database stats, technical skills, and background indices.</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            <CommandLineTerminal />
          </motion.div>
        </section>

        {/* LEETCODE ALGORITHMIC SECTION */}
        <section className="container" style={{ padding: '60px 24px', borderTop: '1px solid var(--border-subtle)' }}>
          <div className="section-header">
            <h2>Algorithmic Foundations</h2>
            <p>Mastery of complex data structures and algorithmic complexity optimization.</p>
          </div>

          <motion.div
            className="card-3d leetcode-grid"
            style={{
              background: 'var(--bg-card)',
              backdropFilter: 'blur(12px)',
              border: '1px solid var(--border-gold)',
              padding: '40px',
              borderRadius: '16px'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <span className="kicker" style={{ color: 'var(--accent-gold-dark)', fontWeight: '700', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '1px' }}>Curated Solutions Repository</span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: '500', marginTop: '8px', marginBottom: '16px' }}>LeetCode Solutions Dashboard</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
                Actively resolving data structures, database schemas, and mathematical optimization algorithms. This repository indexes resolved problems categorized by topic, showing a commitment to logical efficiency and clean scripting patterns.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="https://github.com/nashrahjaan53-code/leetcode-solutions" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  View LeetCode Repository
                </a>
              </div>
            </div>

            <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-gold)', borderRadius: '12px', padding: '24px', fontFamily: 'var(--font-mono)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '12px', marginBottom: '16px' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>PARAMETER</span>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>METRIC / VALUE</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: '13px' }}>
                <span>Repository URL</span>
                <span style={{ color: 'var(--accent-gold-dark)', fontWeight: '600' }}>leetcode-solutions.git</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: '13px' }}>
                <span>Primary Languages</span>
                <span style={{ color: 'var(--accent-gold-dark)', fontWeight: '600' }}>Python, SQL, C++</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: '13px' }}>
                <span>Solved Categories</span>
                <span style={{ color: 'var(--accent-gold-dark)', fontWeight: '600' }}>Arrays, Hash Maps, SQL Queries, Trees</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: '13px' }}>
                <span>Target Complexity</span>
                <span style={{ color: 'var(--accent-gold-dark)', fontWeight: '600' }}>O(N log N) / O(1) space</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: '13px' }}>
                <span>Audit Score</span>
                <span style={{ color: 'var(--accent-gold-dark)', fontWeight: '600' }}>100% Passed Test Cases</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* HIGHLIGHTS SECTION */}
        <section className="container" style={{ padding: '60px 24px', borderTop: '1px solid var(--border-subtle)' }}>
          <div className="section-header">
            <h2>Core Competencies</h2>
            <p>Key methodologies I apply to solve data problems.</p>
          </div>
          
          <motion.div
            className="grid grid-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Tilt3D>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'var(--accent-gold-dark)' }}>Analytical Rigor</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    Utilizing advanced statistical tools, correlation diagnostics, and segment classification models to discover trends, detect outliers, and analyze user behavior pattern changes.
                  </p>
                </div>
              </Tilt3D>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Tilt3D>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'var(--accent-gold-dark)' }}>Business Value Focus</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    Engineering models and dashboards with direct financial impact—estimating fraud savings, identifying client retention opportunities, and isolating marketing campaign ROIs.
                  </p>
                </div>
              </Tilt3D>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Tilt3D>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'var(--accent-gold-dark)' }}>Interactive Dashboards</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    Building polished, intuitive reporting layouts with Streamlit, Plotly, and Dash. Designing KPI matrices and cohort heatmaps that communicate complex insights clearly to executives.
                  </p>
                </div>
              </Tilt3D>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Tilt3D>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'var(--accent-gold-dark)' }}>ETL & Full Stack Integration</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    Structuring backend databases, writing robust web scrapers, implementing clean API pipelines, and styling responsive React frontends for end-to-end production deployment.
                  </p>
                </div>
              </Tilt3D>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
