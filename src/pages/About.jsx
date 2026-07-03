import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const [expandedItems, setExpandedItems] = useState({
    recimotech: false,
    iitm: false,
    siffrum: false
  });

  const toggleExpand = (key) => {
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const skills = [
    { name: 'Python & Data Engineering', val: 92 },
    { name: 'SQL & Database Auditing', val: 88 },
    { name: 'Power BI & Streamlit Dashboards', val: 85 },
    { name: 'React & Frontend Integration', val: 80 },
    { name: 'Machine Learning (XGBoost, scikit-learn)', val: 78 }
  ];

  return (
    <main className="container" style={{ padding: '60px 24px' }}>
      <div className="section-header">
        <h2>Professional Profile</h2>
        <p>A data analyst and web engineer merging database integrity, statistics, and interactive interfaces.</p>
      </div>

      <div className="about-grid">
        {/* Left Side: About narrative & Timeline */}
        <div className="about-left">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <h3 style={{ fontSize: '26px' }}>Background</h3>
            <p className="about-para">
              I am currently working as a <strong>Web Development Intern (AI & ML Integration)</strong> at <strong>Recimotech Solutions</strong>, contributing to modern web applications, API integrations, and AI-powered solutions. Previously, I worked as a <strong>Full Stack Developer</strong> at <strong>Siffrum</strong>, shipping responsive React interfaces and structuring RESTful API frameworks.
            </p>
            <p className="about-para">
              I am pursuing my <strong>BCA (Computer Science)</strong> at <strong>IITM Hyderpora</strong>. Combining full-stack engineering skills with an analytical mindset, I build platforms that not only clean and structure data but communicate it to business stakeholders through clear, production-ready interfaces.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <h3 style={{ fontSize: '26px', margin: 0 }}>Career & Education</h3>
              <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>(Click cards to expand details)</span>
            </div>
            <div className="timeline">
              {/* Recimotech */}
              <div 
                className="timeline-item timeline-item-interactive"
                onClick={() => toggleExpand('recimotech')}
              >
                <span className="timeline-dot" />
                <span className="timeline-meta">MAY 2026 &ndash; PRESENT</span>
                <h4 className="timeline-title">Web Development Intern (AI & ML Integration)</h4>
                <div className="timeline-org">Recimotech Solutions &bull; Srinagar, Jammu & Kashmir (On-site)</div>
                <ul className="timeline-desc">
                  <li>Integrating AI/ML pipelines directly into web interfaces for clean predictive reporting.</li>
                  <li>Developing responsive data visualization components and API wrappers.</li>
                </ul>
                <div className="timeline-expand-btn">
                  {expandedItems.recimotech ? 'Collapse details ▲' : 'Expand details ▼'}
                </div>
                {expandedItems.recimotech && (
                  <motion.div 
                    className="timeline-expanded-content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.25 }}
                  >
                    <strong>Core Stack Deployed:</strong> Streamlit, Plotly, Pandas, REST APIs.<br />
                    <strong>Key Impact:</strong> Designed and developed interactive machine learning prediction dashboards for orthopedic anomaly classification datasets, increasing diagnostics readability for stakeholders.
                  </motion.div>
                )}
              </div>

              {/* IITM Hyderpora */}
              <div 
                className="timeline-item timeline-item-interactive"
                onClick={() => toggleExpand('iitm')}
              >
                <span className="timeline-dot" />
                <span className="timeline-meta">OCT 2024 &ndash; DEC 2027</span>
                <h4 className="timeline-title">BCA, Computer Science</h4>
                <div className="timeline-org">IITM Hyderpora &bull; Srinagar, Jammu & Kashmir</div>
                <ul className="timeline-desc">
                  <li>Focusing on database architectures, programming algorithms, and applied statistics.</li>
                  <li>Graded: <strong>Grade A</strong> academic performance.</li>
                </ul>
                <div className="timeline-expand-btn">
                  {expandedItems.iitm ? 'Collapse details ▲' : 'Expand details ▼'}
                </div>
                {expandedItems.iitm && (
                  <motion.div 
                    className="timeline-expanded-content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.25 }}
                  >
                    <strong>Focus areas:</strong> Data Structures, Database Management Systems (DBMS), Advanced Statistics, and Algorithmic Analysis.<br />
                    <strong>Academic Highlights:</strong> Achieved high grade performance while developing custom data parsing utilities and analytical software projects.
                  </motion.div>
                )}
              </div>

              {/* Siffrum */}
              <div 
                className="timeline-item timeline-item-interactive"
                onClick={() => toggleExpand('siffrum')}
              >
                <span className="timeline-dot" />
                <span className="timeline-meta">FEB 2026 &ndash; APR 2026</span>
                <h4 className="timeline-title">Full Stack Developer</h4>
                <div className="timeline-org">Siffrum &bull; Srinagar, Jammu & Kashmir (On-site)</div>
                <ul className="timeline-desc">
                  <li>Built and deployed responsive frontend architectures using React.js and JavaScript.</li>
                  <li>Integrated RESTful APIs, facilitating seamless communications with backend databases.</li>
                  <li>Contributed to containerized deployments with Docker and maintained Git version control.</li>
                </ul>
                <div className="timeline-expand-btn">
                  {expandedItems.siffrum ? 'Collapse details ▲' : 'Expand details ▼'}
                </div>
                {expandedItems.siffrum && (
                  <motion.div 
                    className="timeline-expanded-content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.25 }}
                  >
                    <strong>Core Stack Deployed:</strong> React, Node.js, Express, Docker, Git.<br />
                    <strong>Key Impact:</strong> Configured REST API backend services to interface with SQLite and PostgreSQL databases. Containerized the frontend build using Docker, reducing setup time for team developers.
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Skill bars & Contacts */}
        <div className="about-right">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <h3 style={{ fontSize: '26px' }}>Core Analytics Competency</h3>
            <div className="skills-container" style={{ marginTop: '12px' }}>
              {skills.map((skill) => (
                <div key={skill.name} className="skill-row">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.val}%</span>
                  </div>
                  <div className="progress-track">
                    <motion.div
                      className="progress-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.val}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '24px' }}>
            <h3 style={{ fontSize: '26px' }}>Hiring Channels</h3>
            <p className="about-para" style={{ fontSize: '14px' }}>
              Currently seeking Data Analyst, BI Developer, or Full-Stack intern/full-time opportunities. Reach out directly through the paths below:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ padding: '16px', background: 'var(--bg-secondary)', border: '1px solid var(--border-gold)', borderRadius: '8px' }}>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: '600' }}>Direct Inbox</div>
                <a href="mailto:nashrahjaan53@gmail.com" style={{ fontSize: '15px', color: 'var(--accent-gold-dark)', fontWeight: '700', textDecoration: 'underline' }}>
                  nashrahjaan53@gmail.com
                </a>
              </div>
              <div style={{ padding: '16px', background: 'var(--bg-secondary)', border: '1px solid var(--border-gold)', borderRadius: '8px' }}>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: '600' }}>LinkedIn Networking</div>
                <a
                  href="https://www.linkedin.com/in/nashrah-khan-82056b332"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '15px', color: 'var(--accent-gold-dark)', fontWeight: '700', textDecoration: 'underline' }}
                >
                  linkedin.com/in/nashrah-khan
                </a>
              </div>
              <div style={{ padding: '16px', background: 'var(--bg-secondary)', border: '1px solid var(--border-gold)', borderRadius: '8px' }}>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: '600' }}>GitHub Profile</div>
                <a
                  href="https://github.com/nashrahjaan53-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '15px', color: 'var(--accent-gold-dark)', fontWeight: '700', textDecoration: 'underline' }}
                >
                  github.com/nashrahjaan53-code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
