import React from 'react';
import { theme } from '../../styles/theme';

const UpcomingSessionHighlight = ({ session }) => {
  
  const handleViewMap = () => {
    console.log('View location on map clicked');
    // In a real app, this would open a map view
  };
  
  // Styles for minimalist design
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.colors.alertCard.background,
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.lg,
    border: `1px solid ${theme.colors.alertCard.border}`,
  };

  const messageStyles = {
    fontSize: '14px',
    color: theme.colors.darkGray,
    marginBottom: theme.spacing.md
  };

  const headerContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing.sm
  };

  const iconStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: theme.colors.alertCard.icon,
    color: theme.colors.white,
    fontSize: '14px',
    marginRight: theme.spacing.sm
  };

  const sessionTitleStyles = {
    fontSize: '18px',
    fontWeight: '600',
    color: theme.colors.secondary
  };

  const infoContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.xs,
    marginBottom: theme.spacing.md
  };

  const infoItemStyles = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '15px',
    color: theme.colors.secondary
  };

  const infoIconStyles = {
    marginRight: theme.spacing.sm,
    color: theme.colors.alertCard.icon,
    width: '18px',
    display: 'flex',
    justifyContent: 'center'
  };
  
  // Divider styles
  const dividerStyles = {
    borderTop: `1px solid ${theme.colors.alertCard.border}`,
    margin: `${theme.spacing.md} 0`,
    opacity: 0.6
  };
  
  // Don't Forget section styles
  const dontForgetHeaderStyles = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing.sm
  };
  
  const dontForgetIconStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    color: theme.colors.alertCard.icon,
    fontSize: '14px',
    marginRight: theme.spacing.sm
  };
  
  const dontForgetTitleStyles = {
    fontSize: '16px',
    fontWeight: '600',
    color: theme.colors.alertCard.icon
  };
  
  const bulletListStyles = {
    paddingLeft: theme.spacing.md,
    marginTop: theme.spacing.xs,
    fontSize: '14px',
    color: theme.colors.secondary,
    lineHeight: 1.6
  };
  
  const bulletItemStyles = {
    marginBottom: theme.spacing.xs
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
      {/* Calendar icon and title in horizontal layout */}
      <div style={headerContainerStyles}>
        <span style={iconStyles}>📅</span>
        <div style={sessionTitleStyles}>{session.title}</div>
      </div>
      
      <div style={messageStyles}>
        Don't forget your next session is just around the corner.
      </div>
      
      {/* Simplified information display */}
      <div style={infoContainerStyles}>
        <div style={infoItemStyles}>
          <span style={infoIconStyles}>🕒</span>
          {session.date}
        </div>
        
        <div 
          style={{...infoItemStyles, cursor: 'pointer'}}
          onClick={handleViewMap}
        >
          <span style={infoIconStyles}>📍</span>
          {session.location}
        </div>
      </div>
      
      {/* Divider line */}
      <div style={dividerStyles}></div>
      
      {/* Don't Forget section */}
      <div>
        <div style={dontForgetHeaderStyles}>
          <span style={dontForgetIconStyles}>⚠️</span>
          <div style={dontForgetTitleStyles}>Don't Forget</div>
        </div>
        
        <ul style={bulletListStyles}>
          <li style={bulletItemStyles}>Water bottle to stay hydrated</li>
          <li style={bulletItemStyles}>Towel for your workout</li>
          <li style={bulletItemStyles}>Proper workout shoes</li>
        </ul>
      </div>
    </div>
  );
};

export default UpcomingSessionHighlight;
