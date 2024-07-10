import React from 'react';
import '../assets/styles/HealthWellness.css';

const HealthWellness = () => {
  return (
    <div className="health-wellness">
      <h1>Health & Wellness Matters</h1>
      <p>Explore our resources and articles on various health and wellness topics to help you lead a healthier life.</p>
      <div className="article-list">
        <div className="article-item">
          <h2>Healthy Eating Tips</h2>
          <p>Discover the benefits of a balanced diet and get tips on how to eat healthier.</p>
        </div>
        <div className="article-item">
          <h2>Mental Health Awareness</h2>
          <p>Learn about the importance of mental health and how to manage stress effectively.</p>
        </div>
      </div>
    </div>
  );
};

export default HealthWellness;
