import React from 'react';
import { theme } from '../../styles/theme';

/**
 * QuickActions component
 * Provides quick access buttons for common user actions
 */
const QuickActions = ({ onActionClick }) => {
  const containerStyles = {
    padding: '5px'
  };
  
  const actionsGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
    gap: '12px'
  };
  
  const actionButtonStyles = (color) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 10px',
    backgroundColor: 'white',
    borderRadius: theme.borderRadius.medium,
    border: `1px solid ${theme.colors.lightGray}`,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    height: '100%',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      backgroundColor: color + '08' // Add very light version of color on hover
    }
  });
  
  const iconStyles = (color) => ({
    fontSize: '22px',
    color: color,
    marginBottom: '8px'
  });
  
  const labelStyles = {
    fontSize: '13px',
    fontWeight: '500',
    color: theme.colors.secondary,
    textAlign: 'center'
  };
  
  // Quick action definitions with icons, labels and colors
  const actions = [
    { 
      icon: '📝', 
      label: 'Log Workout', 
      action: 'logWorkout', 
      color: theme.colors.primary
    },
    { 
      icon: '🍎', 
      label: 'Track Nutrition', 
      action: 'trackNutrition', 
      color: '#ff9800' 
    },
    { 
      icon: '⚖️', 
      label: 'Record Weight', 
      action: 'recordWeight', 
      color: '#2196f3' 
    },
    { 
      icon: '📊', 
      label: 'View Stats', 
      action: 'viewStats', 
      color: '#673ab7' 
    },
    { 
      icon: '📅', 
      label: 'Schedule Session', 
      action: 'scheduleSession', 
      color: theme.colors.primary 
    },
    { 
      icon: '🔄', 
      label: 'Sync Data', 
      action: 'syncData', 
      color: '#009688' 
    }
  ];
  
  // Handle action button click
  const handleActionClick = (actionType) => {
    if (onActionClick) {
      onActionClick(actionType);
    } else {
      console.log(`Action clicked: ${actionType}`);
    }
  };
  
  return (
    <div style={containerStyles}>
      <div style={actionsGridStyles}>
        {actions.map((action, index) => (
          <div 
            key={index}
            style={actionButtonStyles(action.color)}
            onClick={() => handleActionClick(action.action)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
              e.currentTarget.style.backgroundColor = `${action.color}08`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
              e.currentTarget.style.backgroundColor = 'white';
            }}
          >
            <span style={iconStyles(action.color)}>{action.icon}</span>
            <span style={labelStyles}>{action.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
