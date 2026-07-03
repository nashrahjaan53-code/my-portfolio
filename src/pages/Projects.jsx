import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projects';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeProject, setActiveProject] = useState(projectsData[0]);

  const categories = ['all', 'Data Analytics', 'Machine Learning', 'ETL & Reporting', 'NLP & Text Mining'];

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  // Set the first item of the filtered list as active when category changes
  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    const filtered = cat === 'all'
      ? projectsData
      : projectsData.filter(p => p.category === cat);
    if (filtered.length > 0) {
      setActiveProject(filtered[0]);
    }
  };

  return (
    <main className="container" style={{ padding: '60px 24px' }}>
      <div className="section-header">
        <h2>Analytics Showroom</h2>
        <p>Browse 14 end-to-end projects. Select a project to review methodology, algorithms, and business outcomes.</p>
      </div>

      {/* Category Filters */}
      <div className="filter-container">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat === 'all' ? 'ALL PROJECTS' : cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* IDE/Showroom Layout */}
      <div className="showroom-layout">
        {/* Left Side Scrollable List */}
        <div className="showroom-list">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`showroom-card ${activeProject.id === project.id ? 'active' : ''}`}
                onClick={() => setActiveProject(project)}
              >
                <div className="showroom-card-header">
                  <span className="showroom-card-title">
                    {project.emoji} {project.title}
                  </span>
                  <span className="showroom-card-category">{project.category}</span>
                </div>
                <div className="showroom-card-desc">{project.description}</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Right Side Project Details */}
        <div className="showroom-details">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div className="details-header">
                <div className="details-title-row">
                  <h3>{activeProject.emoji} {activeProject.title}</h3>
                  <span className="details-category">{activeProject.category}</span>
                </div>
                <div className="details-impact-strip">
                  <span>🎯</span>
                  <span><strong>Business Impact:</strong> {activeProject.impact}</span>
                </div>
              </div>

              <div className="details-body">
                <div className="details-section-title">Methodology & Operations</div>
                <p className="details-desc">{activeProject.description}</p>

                <div className="details-section-title">Technology & Libraries</div>
                <div className="details-tech-grid">
                  {activeProject.tech.split(', ').map((techItem) => (
                    <span key={techItem} className="hero-pill" style={{ margin: 0, backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-gold)' }}>
                      {techItem}
                    </span>
                  ))}
                </div>

                {activeProject.dashboardPort && (
                  <>
                    <div className="details-section-title">Launch Dashboard (Local Execution)</div>
                    <div style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1.5px solid var(--border-gold)',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      color: 'var(--text-primary)',
                      lineHeight: '1.5',
                      whiteSpace: 'pre-wrap'
                    }}>
                      <span style={{ color: 'var(--accent-gold-dark)', fontWeight: '600' }}># Start dashboard locally:</span><br />
                      cd {activeProject.github.split('/').pop()}<br />
                      venv\Scripts\streamlit run dashboard\app.py --server.port {activeProject.dashboardPort}
                    </div>
                  </>
                )}
              </div>

              <div className="details-actions">
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Codebase on GitHub
                </a>
                {activeProject.dashboardPort && (
                  <a
                    href={`http://localhost:${activeProject.dashboardPort}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    Open Live Dashboard (Port {activeProject.dashboardPort})
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
