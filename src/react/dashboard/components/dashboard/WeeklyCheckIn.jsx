import React from 'react';
import { theme } from '../../styles/theme';

const WeeklyCheckIn = ({ onSchedule }) => {
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
  
  // Header with icon styles
  const headerContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  };
  
  const iconStyles = {
    color: theme.colors.primary,
    fontSize: '20px',
    marginRight: theme.spacing.sm,
  };
  
  const titleStyles = {
    fontSize: '16px',
    fontWeight: '600',
    color: theme.colors.secondary,
  };
  
  // Description styles
  const descriptionStyles = {
    fontSize: '14px',
    color: theme.colors.darkGray,
    marginBottom: theme.spacing.md,
  };
  
  // Button styles
  const buttonStyles = {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    fontSize: '16px',
    fontWeight: '500',
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    border: 'none',
    borderRadius: theme.borderRadius.small,
    cursor: 'pointer',
    width: '100%',
    textAlign: 'center',
    transition: theme.transition,
    ':hover': {
      backgroundColor: theme.colors.primaryDark || '#388e3c',
    },
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
      <div style={headerContainerStyles}>
        <div style={iconStyles}>📅</div>
        <div style={titleStyles}>Weekly Check-in</div>
      </div>
      
      <div style={descriptionStyles}>
        Discuss progress and adjust your plan.
      </div>
      
      <button 
        style={buttonStyles}
        onClick={onSchedule}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = theme.colors.primaryDark;
          e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(76, 175, 80, 0.25)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = theme.colors.primary;
          e.currentTarget.style.transform = 'none';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        Schedule Now
      </button>
    </div>
  );
};

export default WeeklyCheckIn;
