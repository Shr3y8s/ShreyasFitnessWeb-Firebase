import React, { useState } from 'react';
import { theme } from '../../styles/theme';

const WorkoutCalendar = ({ upcomingSessions, completedSessions }) => {
  const [activeTab, setActiveTab] = useState('upcoming');
  
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

  // Header styles
  const headerStyles = {
    fontSize: '18px',
    fontWeight: '600',
    color: theme.colors.secondary,
    marginBottom: theme.spacing.md,
  };
  
  // Tab container styles
  const tabContainerStyles = {
    display: 'flex',
    marginBottom: theme.spacing.md,
    borderRadius: theme.borderRadius.pill,
    backgroundColor: theme.colors.lightestGray,
    padding: '4px',
  };
  
  // Tab styles
  const tabStyles = (isActive) => ({
    flex: 1,
    padding: '10px 20px',
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: theme.borderRadius.pill,
    backgroundColor: isActive ? theme.colors.primary : 'transparent',
    color: isActive ? theme.colors.white : theme.colors.darkGray,
    fontWeight: '500',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  });
  
  // Session item styles
  const sessionItemStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.sm,
    backgroundColor: theme.colors.lightestGray || '#f9f9f9',
    marginBottom: theme.spacing.sm,
    borderRadius: theme.borderRadius.small,
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    borderLeft: '0px solid transparent',
  };
  
  // Session item hover styles - enhanced with left border and more distinct background
  const sessionItemHoverStyles = {
    backgroundColor: theme.colors.lightGray || '#e9ecef',
    borderLeft: `3px solid ${theme.colors.primary}`,
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
  };

  // Session content styles
  const sessionContentStyles = {
    flex: 1,
  };
  
  // Session title styles
  const sessionTitleStyles = {
    fontSize: '16px',
    fontWeight: '500',
    color: theme.colors.secondary,
    marginBottom: '4px',
  };
  
  // Session date styles
  const sessionDateStyles = {
    fontSize: '14px',
    color: theme.colors.darkGray,
  };
  
  // Menu button styles
  const menuButtonStyles = {
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    cursor: 'pointer',
    color: theme.colors.darkGray,
    backgroundColor: 'rgba(255,255,255,0.5)',
    transition: 'all 0.2s ease',
  };
  
  // Menu button hover styles
  const menuButtonHoverStyles = {
    backgroundColor: 'rgba(255,255,255,0.9)',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  };
  
  // Empty state styles
  const emptyStateStyles = {
    padding: theme.spacing.lg,
    textAlign: 'center',
    color: theme.colors.darkGray,
    fontSize: '14px',
  };
  
  // Return the sessions based on active tab
  const getActiveSessions = () => {
    return activeTab === 'upcoming' ? upcomingSessions : completedSessions;
  };
  
  // Format date time string to be more readable
  const formatDateTime = (dateTimeStr) => {
    if (!dateTimeStr) return '';
    
    // For upcoming sessions format
    if (dateTimeStr.includes(' at ')) {
      const [date, time] = dateTimeStr.split(' at ');
      return (
        <span style={sessionDateStyles}>
          {date} at <strong>{time}</strong>
        </span>
      );
    }
    
    // For completed sessions format
    return <span style={sessionDateStyles}>{dateTimeStr}</span>;
  };
  
  // Format session title for completed sessions
  const getSessionTitle = (session) => {
    if (activeTab === 'upcoming') {
      return session.title;
    } else {
      // For completed sessions
      return `${session.workout} · ${session.duration}`;
    }
  };
  
  // Get session date for different session formats
  const getSessionDate = (session) => {
    if (activeTab === 'upcoming') {
      return formatDateTime(session.dateTime);
    } else {
      // For completed sessions
      return formatDateTime(session.date);
    }
  };
  
  // Render icon for tab
  const TabIcon = ({ icon, isActive }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {icon === 'upcoming' ? (
        <>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </>
      ) : (
        <path d="M9 11l3 3L22 4" />
      )}
    </svg>
  );
  
  // Menu dots icon
  const MenuDotsIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="18" 
      height="18" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  );
  
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
      <h3 style={headerStyles}>Workout Calendar</h3>
      
      {/* Tabs */}
      <div style={tabContainerStyles}>
        <div 
          style={tabStyles(activeTab === 'upcoming')}
          onClick={() => setActiveTab('upcoming')}
        >
          <TabIcon icon="upcoming" />
          Upcoming
        </div>
        <div 
          style={tabStyles(activeTab === 'completed')}
          onClick={() => setActiveTab('completed')}
        >
          <TabIcon icon="completed" />
          Completed
        </div>
      </div>
      
      {/* Sessions list */}
      <div>
        {getActiveSessions() && getActiveSessions().length > 0 ? (
          getActiveSessions().map((session, index) => (
            <div 
              key={index} 
              style={{
                ...sessionItemStyles,
                marginBottom: index === getActiveSessions().length - 1 ? '0' : theme.spacing.sm
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = sessionItemHoverStyles.backgroundColor;
                e.currentTarget.style.borderLeft = sessionItemHoverStyles.borderLeft;
                e.currentTarget.style.boxShadow = sessionItemHoverStyles.boxShadow;
                e.currentTarget.style.paddingLeft = '12px'; // Adjust padding to accommodate border
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.lightestGray || '#f9f9f9';
                e.currentTarget.style.borderLeft = '0px solid transparent';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.paddingLeft = theme.spacing.sm;
              }}
            >
              <div style={sessionContentStyles}>
                <div style={sessionTitleStyles}>{getSessionTitle(session)}</div>
                {getSessionDate(session)}
              </div>
              <div 
                style={menuButtonStyles}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = menuButtonHoverStyles.backgroundColor;
                  e.currentTarget.style.boxShadow = menuButtonHoverStyles.boxShadow;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = menuButtonStyles.backgroundColor;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <MenuDotsIcon />
              </div>
            </div>
          ))
        ) : (
          <div style={emptyStateStyles}>
            No {activeTab} workouts found.
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutCalendar;
