import React from 'react';
import '../assets/styles/DailyDevotional.css';

const DailyDevotional = () => {
  return (
    <div className="daily-devotional">
      <h1>Daily Devotional</h1>
      <p>Start your day with our daily devotional messages to inspire and uplift you.</p>
      <div className="devotional-message">
        <h2>Today's Message</h2>
        <p>"Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go." - Joshua 1:9</p>
      </div>
    </div>
  );
};

export default DailyDevotional;
