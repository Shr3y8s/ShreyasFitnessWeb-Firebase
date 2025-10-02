import React from 'react';
import { theme } from '../../styles/theme';

const TrainerNote = ({ trainerName, note, initial }) => {
  // Container styles
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.md,
    border: `1px solid ${theme.colors.lightGray}`,
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    marginTop: theme.spacing.md,
  };
  
  // Header styles with avatar
  const headerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.sm,
  };
  
  const avatarContainerStyles = {
    display: 'flex',
    alignItems: 'center',
  };
  
  const avatarStyles = {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    marginRight: theme.spacing.sm,
  };
  
  const titleContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
  };
  
  const titleStyles = {
    fontSize: '16px',
    fontWeight: '600',
    color: theme.colors.secondary,
  };
  
  const subtitleStyles = {
    fontSize: '14px',
    color: theme.colors.darkGray,
  };
  
  const trophyIconStyles = {
    color: theme.colors.primary,
    fontSize: '20px',
  };
  
  // Note content styles
  const noteStyles = {
    fontSize: '14px',
    color: theme.colors.secondary,
    fontStyle: 'italic',
    lineHeight: '1.5',
    margin: 0,
  };
  
  return (
    <div 
      style={containerStyles}
      onMouseOver={(e) => {
        e.currentTarget.style.boxShadow = theme.boxShadowGreenHover;
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div style={headerStyles}>
        <div style={avatarContainerStyles}>
          <div style={avatarStyles}>
            {initial || trainerName.charAt(0)}
          </div>
          <div style={titleContainerStyles}>
            <div style={titleStyles}>A Note From {trainerName}</div>
            <div style={subtitleStyles}>Your weekly check-in & motivation</div>
          </div>
        </div>
        <div style={trophyIconStyles}>🏆</div>
      </div>
      
      <p style={noteStyles}>"{note}"</p>
    </div>
  );
};

export default TrainerNote;
