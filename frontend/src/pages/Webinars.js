import React, { useState } from 'react';
import RegistrationModal from './RegistrationModal';
import '../assets/styles/Webinars.css';

const Webinars = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedWebinar, setSelectedWebinar] = useState('');

  const openModal = (webinarTitle) => {
    setSelectedWebinar(webinarTitle);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="webinars">
      <h1>Monthly Webinars</h1>
      <p>Join us every month for webinars on various health topics, hosted by experts in the field.</p>
      <div className="webinar-list">
        <div className="webinar-item">
          <h2>Nutrition and Wellness</h2>
          <p>Date: June 15, 2024</p>
          <p>Description: Learn about balanced diets and how to maintain wellness through proper nutrition.</p>
          <button onClick={() => openModal('Nutrition and Wellness')}>Register Now</button>
        </div>
        <div className="webinar-item">
          <h2>Mental Health Awareness</h2>
          <p>Date: July 20, 2024</p>
          <p>Description: Understand the importance of mental health and techniques to manage stress and anxiety.</p>
          <button onClick={() => openModal('Mental Health Awareness')}>Register Now</button>
        </div>
      </div>
      <RegistrationModal isOpen={modalIsOpen} onRequestClose={closeModal} webinarTitle={selectedWebinar} />
    </div>
  );
};

export default Webinars;
