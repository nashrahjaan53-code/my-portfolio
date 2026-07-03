import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          &copy; {currentYear} Nashrah Khan. Designed for Analytics Excellence.
        </div>
        <div className="footer-links">
          <a href="mailto:nashrahjaan53@gmail.com" className="footer-link">
            nashrahjaan53@gmail.com
          </a>
          <span>&middot;</span>
          <a
            href="https://www.linkedin.com/in/nashrah-khan-82056b332"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <span>&middot;</span>
          <a
            href="https://github.com/nashrahjaan53-code"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
