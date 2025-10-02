import React from 'react';
import { theme } from '../../styles/theme';

const PersonalRecords = ({ records }) => {
  // Container styles with transition for hover effect
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.md,
    border: `1px solid ${theme.colors.lightGray}`,
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    height: '100%',
  };
  
  // Header styles
  const headerStyles = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  };
  
  const headerIconStyles = {
    marginRight: theme.spacing.sm,
    display: 'flex',
    alignItems: 'center',
  };
  
  const headerTextStyles = {
    fontSize: '18px',
    fontWeight: '600',
    color: theme.colors.secondary,
  };
  
  const subheaderStyles = {
    fontSize: '14px',
    color: theme.colors.darkGray,
    marginBottom: theme.spacing.md,
  };
  
  // Record item styles
  const recordItemStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.sm,
    backgroundColor: theme.colors.lightestGray || '#f9f9f9',
    marginBottom: theme.spacing.sm,
    borderRadius: theme.borderRadius.small,
  };
  
  const recordLeftStyles = {
    display: 'flex',
    alignItems: 'center',
  };
  
  const recordIconStyles = (color) => ({
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: color || '#FFD700',
    marginRight: theme.spacing.sm,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });
  
  const recordTextStyles = {
    flex: 1,
  };
  
  const recordTitleStyles = {
    fontSize: '16px',
    fontWeight: '600',
    color: theme.colors.secondary,
    marginBottom: '4px',
  };
  
  const recordDateStyles = {
    fontSize: '13px',
    color: theme.colors.darkGray,
  };
  
  const recordValueStyles = {
    fontSize: '16px',
    fontWeight: '700',
    color: theme.colors.primary,
  };
  
  // Trophy SVG icon
  const TrophyIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      style={{ color: theme.colors.primary }}
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
      <path d="M4 22h16"></path>
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
    </svg>
  );
  
  // Get icon for each record type
  const getIconContent = (recordType) => {
    if (recordType === 'deadlift') {
      return '🏋️';
    } else if (recordType === 'run') {
      return '🏃';
    } else if (recordType === 'streak') {
      return '🔥';
    } else {
      return '🏆';
    }
  };
  
  const getIconColor = (recordType) => {
    if (recordType === 'deadlift') {
      return '#FFD700'; // Gold
    } else if (recordType === 'run') {
      return '#00B4D8'; // Blue
    } else if (recordType === 'streak') {
      return '#FF5733'; // Red/Orange
    } else {
      return '#FFD700'; // Default gold
    }
  };
  
  return (
    <div style={containerStyles}>
      <div style={headerStyles}>
        <div style={headerIconStyles}>
          <TrophyIcon />
        </div>
        <div style={headerTextStyles}>Personal Records</div>
      </div>
      
      <p style={subheaderStyles}>
        Celebrating your recent achievements and milestones.
      </p>
      
      {records && records.map((record, index) => (
        <div key={index} style={recordItemStyles}>
          <div style={recordLeftStyles}>
            <div style={recordIconStyles(getIconColor(record.type))}>
              {getIconContent(record.type)}
            </div>
            <div style={recordTextStyles}>
              <div style={recordTitleStyles}>{record.title}</div>
              <div style={recordDateStyles}>{record.date}</div>
            </div>
          </div>
          <div style={recordValueStyles}>{record.value}</div>
        </div>
      ))}
    </div>
  );
};

export default PersonalRecords;
