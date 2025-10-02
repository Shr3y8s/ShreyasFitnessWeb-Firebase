import React from 'react';
import { theme } from '../../styles/theme';

const CurrentGoals = ({ goals }) => {
  // Container styles with transition for hover effect
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
  
  // Goal item styles
  const goalItemStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.md,
  };
  
  const bulletPointStyles = {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: theme.colors.primary,
    marginRight: theme.spacing.sm,
    marginTop: '8px',
  };
  
  const goalContentStyles = {
    flex: 1,
  };
  
  const goalTitleStyles = {
    fontSize: '16px',
    fontWeight: '600',
    color: theme.colors.secondary,
    marginBottom: '4px',
  };
  
  const goalDescriptionStyles = {
    fontSize: '14px',
    color: theme.colors.darkGray,
  };
  
  // Icon SVG component
  const GoalIcon = () => (
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
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2"></circle>
    </svg>
  );

  return (
    <div style={containerStyles}>
      <div style={headerStyles}>
        <div style={headerIconStyles}>
          <GoalIcon />
        </div>
        <div style={headerTextStyles}>Current Goals</div>
      </div>
      
      <p style={subheaderStyles}>
        Your primary objectives. Let's work towards them together!
      </p>
      
      {goals && goals.map((goal, index) => (
        <div key={index} style={goalItemStyles}>
          <div style={bulletPointStyles}></div>
          <div style={goalContentStyles}>
            <div style={goalTitleStyles}>{goal.title}</div>
            <div style={goalDescriptionStyles}>
              {goal.description || `Complete ${goal.currentValue} of ${goal.targetValue} ${goal.dueDate ? `(${goal.dueDate})` : ''}`}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CurrentGoals;
