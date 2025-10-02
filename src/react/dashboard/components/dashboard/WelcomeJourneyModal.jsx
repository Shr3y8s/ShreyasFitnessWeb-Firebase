import React from 'react';
import { theme } from '../../styles/theme';
import Modal from '../shared/Modal';
import WelcomeJourney from './WelcomeJourney';

const WelcomeJourneyModal = ({ 
  isOpen, 
  onClose,
  journey,
  onAllCompleted
}) => {
  // Handle both when all steps are completed and when the modal is manually closed
  const handleAllCompleted = () => {
    if (onAllCompleted) {
      onAllCompleted();
    }
    // Add a timestamp to localStorage to remember when the journey was completed
    localStorage.setItem('welcomeJourneyCompletedAt', new Date().toISOString());
    if (onClose) {
      onClose();
    }
  };

  // Handle manual close of the modal
  const handleClose = () => {
    // Add a timestamp to localStorage to remember when the journey was dismissed
    localStorage.setItem('welcomeJourneyClosedAt', new Date().toISOString());
    if (onClose) {
      onClose();
    }
  };

  // Styles for the modal content
  const contentStyles = {
    padding: '10px 0'
  };

  // Styles for the header section with illustrations
  const headerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    padding: '20px 10px',
    background: `linear-gradient(to right, ${theme.colors.lightGray}, rgba(240, 248, 255, 0.5))`,
    borderRadius: theme.borderRadius.medium,
    position: 'relative',
    overflow: 'hidden'
  };

  // Decorative background pattern
  const patternStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.2,
    background: `
      radial-gradient(circle at 20% 30%, rgba(76, 175, 80, 0.2) 0%, transparent 20%),
      radial-gradient(circle at 70% 60%, rgba(33, 150, 243, 0.2) 0%, transparent 20%),
      radial-gradient(circle at 40% 80%, rgba(255, 193, 7, 0.2) 0%, transparent 15%)
    `
  };

  // Title styles
  const titleStyles = {
    fontSize: '24px',
    fontWeight: '700',
    color: theme.colors.primary,
    marginBottom: '10px',
    textAlign: 'center',
    zIndex: 1
  };

  // Subtitle styles
  const subtitleStyles = {
    fontSize: '16px',
    color: theme.colors.darkGray,
    textAlign: 'center',
    maxWidth: '80%',
    margin: '0 auto 20px',
    lineHeight: '1.4',
    zIndex: 1
  };

  // Icon container styles
  const iconContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    marginBottom: '10px'
  };

  // Icon styles
  const iconStyles = {
    fontSize: '32px',
    color: theme.colors.primary,
    margin: '0 5px'
  };

  return (
    <Modal 
      isOpen={isOpen}
      onClose={handleClose}
      maxWidth="550px"
      animation="slide-down"
      closeOnOverlayClick={false} // Force users to interact with the modal
    >
      <div style={contentStyles}>
        <div style={headerStyles}>
          <div style={patternStyles}></div>
          <div style={{ zIndex: 1 }}>
            <div style={iconContainerStyles}>
              <span style={iconStyles}>🚀</span>
              <span style={iconStyles}>💪</span>
              <span style={iconStyles}>🏆</span>
            </div>
            <h2 style={titleStyles}>Welcome to Your Fitness Journey!</h2>
            <p style={subtitleStyles}>
              Complete these quick steps to get started and make the most of your personalized fitness experience.
            </p>
          </div>
        </div>

        <WelcomeJourney 
          journey={journey} 
          onAllCompleted={handleAllCompleted}
        />
      </div>
    </Modal>
  );
};

export default WelcomeJourneyModal;
