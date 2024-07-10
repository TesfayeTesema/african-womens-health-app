import React from 'react';
import '../assets/styles/Mentorship.css';

const Mentorship = () => {
  return (
    <div className="mentorship">
      <h1>Mentorship Program</h1>
      <p>Join our mentorship program to connect with experienced mentors who can guide you in your personal and professional growth.</p>
      <div className="mentorship-list">
        <div className="mentorship-item">
          <h2>Health & Wellness Mentorship</h2>
          <p>Get personalized guidance on maintaining your health and wellness from our experienced mentors.</p>
          <button>Join Now</button>
        </div>
        <div className="mentorship-item">
          <h2>Career Development Mentorship</h2>
          <p>Receive career advice and support from professionals in your field.</p>
          <button>Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
