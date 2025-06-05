import React from 'react';
import './Update.css';

const Update = () => {
  return (
    <div className="update-container">
      <h2>Update Page</h2>
      <p className="update-description">
        This section allows you to upload and view the latest tax-related documents and information.
      </p>

      <div className="document-section">
        <h3>Latest Tax Document</h3>
        <p>Click below to download the latest tax update document:</p>
        <a
          href="/Document/Amendment2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="download-link"
        >
          📄 View PDF
        </a>
      </div>
      <footer className="footer">
  © 2025 Sri Lankan Tax Calculator
</footer>

    </div>
  );
};

export default Update;
