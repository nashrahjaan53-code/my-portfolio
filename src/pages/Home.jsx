import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import GoldenSpline from '../components/GoldenSpline';
import Tilt3D from '../components/Tilt3D';
import AnalyticsSandbox from '../components/AnalyticsSandbox';

export default function Home() {
  const primaryPhoto = 'profile.jpg';
  const [photoSrc, setPhotoSrc] = useState(primaryPhoto);

  const handlePhotoError = () => {
    // If user's image fails, hide the image or use background
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
      <GoldenSpline />
      
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
              <span className="kicker">Srinagar, Jammu & Kashmir, India</span>
              <h1 className="hero-title">
                Nashrah Khan<br />
                <span>Data Analyst & BI Developer</span>
              </h1>
              <p className="hero-subtitle">
                Translating unstructured databases into actionable business intelligence. Specialized in SQL database architecture, Python ETL pipeline development, interactive dashboarding, and statistical modeling that drive revenue growth.
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
                  <span className="hero-stat-value">14</span>
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

        {/* HIGHLIGHTS SECTION */}
        <section className="container" style={{ padding: '60px 24px' }}>
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
