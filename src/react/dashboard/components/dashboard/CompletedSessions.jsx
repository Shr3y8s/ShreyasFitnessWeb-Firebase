import React from 'react';
import { theme } from '../../styles/theme';

const CompletedSessions = ({ sessions }) => {
  // Card-like styles matching UpcomingSessions
  const sessionItemStyles = {
    padding: '15px',
    backgroundColor: theme.colors.lightGray,
    borderRadius: theme.borderRadius.medium,
    marginBottom: '10px'
  };
  
  const dateStyles = {
    fontSize: '14px',
    color: theme.colors.darkGray,
    marginBottom: '5px'
  };
  
  const workoutStyles = {
    fontSize: '16px',
    fontWeight: '500',
    color: theme.colors.secondary,
    marginBottom: '5px'
  };
  
  const durationStyles = {
    fontSize: '14px',
    color: theme.colors.darkGray,
    marginBottom: '0'
  };
  
  // Matching the View All link style from UpcomingSessions
  const viewAllStyles = {
    textAlign: 'center',
    marginTop: '15px'
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
      {sessions.map((session, index) => (
        <div key={index} style={sessionItemStyles}>
          <div style={dateStyles}>{session.date}</div>
          <div style={workoutStyles}>{session.workout}</div>
          <div style={durationStyles}>{session.duration}</div>
        </div>
      ))}
      
      <div style={viewAllStyles}>
        <a href="#" style={viewAllLinkStyles}>View All History</a>
      </div>
    </div>
  );
};

export default CompletedSessions;
