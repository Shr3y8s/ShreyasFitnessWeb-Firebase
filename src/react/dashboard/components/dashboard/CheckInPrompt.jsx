import React from 'react';
import { theme } from '../../styles/theme';

const CheckInPrompt = () => {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  };
  
  const messageStyles = {
    textAlign: 'center',
    color: theme.colors.darkGray,
    marginBottom: '20px'
  };
  
  const buttonStyles = {
    display: 'inline-block',
    background: theme.gradients.primary,
    color: theme.colors.white,
    border: 'none',
    padding: '10px 20px',
    borderRadius: theme.borderRadius.small,
    fontWeight: '500',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'center',
    boxShadow: theme.boxShadow
  };
  
  return (
    <div style={containerStyles}>
      <p style={messageStyles}>Discuss progress and adjust your plan.</p>
      <button style={buttonStyles}>Schedule Now</button>
    </div>
  );
};

export default CheckInPrompt;
