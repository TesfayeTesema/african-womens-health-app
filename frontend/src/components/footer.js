
// frontend/src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ background: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
      <div>
        <p>&copy; {new Date().getFullYear()} African Women's Health Organization</p>
        <p>
          <Link to="/privacy-policy" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Privacy Policy</Link>
          |
          <Link to="/terms-of-service" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Terms of Service</Link>
        </p>
      </div>
      <div>
        <p>Contact us at: <a href="mailto:info@africanwomenshealth.org" style={{ color: '#fff', textDecoration: 'none' }}>info@africanwomenshealth.org</a></p>
      </div>
    </footer>
  );
}

export default Footer;
