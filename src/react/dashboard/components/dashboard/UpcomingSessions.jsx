import React from 'react';
import { theme } from '../../styles/theme';

const UpcomingSessions = ({ sessions }) => {
  const sessionItemStyles = {
    padding: '15px',
    backgroundColor: theme.colors.lightGray,
    borderRadius: theme.borderRadius.medium,
    marginBottom: '10px',
    transition: 'all 0.2s ease',
    overflow: 'hidden',
    wordWrap: 'break-word' // Ensure text wraps on small screens
  };
  
  const sessionTitleStyles = {
    fontSize: '16px',
    fontWeight: '500',
    color: theme.colors.secondary,
    marginBottom: '5px',
    lineHeight: '1.3' // Better readability for potentially long titles
  };
  
  const sessionTimeStyles = {
    fontSize: '14px',
    color: theme.colors.darkGray,
    marginBottom: '10px'
  };
  
  const actionsStyles = {
    fontSize: '14px',
    color: theme.colors.primary,
    cursor: 'pointer'
  };
  
  const viewAllStyles = {
    textAlign: 'center',
    marginTop: '15px',
    padding: '5px'
  };
  
  const viewAllLinkStyles = {
    color: theme.colors.primary,
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: theme.transition
  };
  
  return (
    <div>
      {sessions.map(session => (
        <div key={session.id} style={sessionItemStyles}>
          <div style={sessionTitleStyles}>{session.title}</div>
          <div style={sessionTimeStyles}>{session.dateTime}</div>
          <div style={actionsStyles}>Actions</div>
        </div>
      ))}
      <div style={viewAllStyles}>
        <a href="#" style={viewAllLinkStyles}>View All</a>
      </div>
    </div>
  );
};

export default UpcomingSessions;
