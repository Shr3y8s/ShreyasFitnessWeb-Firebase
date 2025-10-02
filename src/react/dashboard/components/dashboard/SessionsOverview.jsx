import React, { useState } from 'react';
import { theme } from '../../styles/theme';

const SessionsOverview = ({ upcomingSessions, completedSessions }) => {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  // Shared styles for session items
  const sessionItemStyles = {
    padding: '15px',
    backgroundColor: theme.colors.lightGray,
    borderRadius: theme.borderRadius.medium,
    marginBottom: '10px',
    transition: 'all 0.2s ease',
    overflow: 'hidden',
    wordWrap: 'break-word'
  };
  
  // Tabs container styles
  const tabsContainerStyles = {
    display: 'flex',
    marginBottom: '15px',
    borderBottom: `1px solid ${theme.colors.lightGray}`
  };
  
  // Tab button styles
  const getTabStyles = (isActive) => ({
    padding: '8px 16px',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: isActive ? `2px solid ${theme.colors.primary}` : '2px solid transparent',
    color: isActive ? theme.colors.primary : theme.colors.darkGray,
    fontWeight: isActive ? '600' : '500',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    marginRight: '10px',
    outline: 'none'
  });
  
  // Session title styles
  const titleStyles = {
    fontSize: '16px',
    fontWeight: '500',
    color: theme.colors.secondary,
    marginBottom: '5px',
    lineHeight: '1.3'
  };
  
  // Session details (time or date) styles
  const detailStyles = {
    fontSize: '14px',
    color: theme.colors.darkGray,
    marginBottom: '5px'
  };
  
  // Additional info styles (actions or duration)
  const additionalInfoStyles = {
    fontSize: '14px',
    color: activeTab === 'upcoming' ? theme.colors.primary : theme.colors.darkGray,
    cursor: activeTab === 'upcoming' ? 'pointer' : 'default'
  };
  
  // View all link container styles
  const viewAllStyles = {
    textAlign: 'center',
    marginTop: '15px',
    padding: '5px'
  };
  
  // View all link styles
  const viewAllLinkStyles = {
    color: theme.colors.primary,
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: theme.transition
  };
  
  // Function to render the appropriate session items based on active tab
  const renderSessions = () => {
    const sessions = activeTab === 'upcoming' ? upcomingSessions : completedSessions;
    
    if (!sessions || sessions.length === 0) {
      return <div style={{ textAlign: 'center', padding: '20px', color: theme.colors.darkGray }}>
        No {activeTab} sessions found.
      </div>;
    }
    
    return sessions.map((session, index) => (
      <div key={index} style={sessionItemStyles}>
        {/* For upcoming sessions */}
        {activeTab === 'upcoming' && (
          <>
            <div style={titleStyles}>{session.title}</div>
            <div style={detailStyles}>{session.dateTime}</div>
            <div style={additionalInfoStyles}>Actions</div>
          </>
        )}
        
        {/* For completed sessions */}
        {activeTab === 'completed' && (
          <>
            <div style={detailStyles}>{session.date}</div>
            <div style={titleStyles}>{session.workout}</div>
            <div style={additionalInfoStyles}>{session.duration}</div>
          </>
        )}
      </div>
    ));
  };

  return (
    <div>
      {/* Tab navigation */}
      <div style={tabsContainerStyles}>
        <button 
          onClick={() => setActiveTab('upcoming')} 
          style={getTabStyles(activeTab === 'upcoming')}
        >
          Upcoming Sessions
        </button>
        <button 
          onClick={() => setActiveTab('completed')} 
          style={getTabStyles(activeTab === 'completed')}
        >
          Completed Sessions
        </button>
      </div>
      
      {/* Session items */}
      {renderSessions()}
      
      {/* View all link */}
      <div style={viewAllStyles}>
        <a href="#" style={viewAllLinkStyles}>
          {activeTab === 'upcoming' ? 'View All' : 'View All History'}
        </a>
      </div>
    </div>
  );
};

export default SessionsOverview;
