import React from 'react';
import { theme } from '../../styles/theme';

/**
 * DashboardSection component
 * Provides a consistent container for grouping related dashboard cards
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to be displayed within the section
 * @param {string} props.title - Section title
 * @param {string} props.priority - Visual priority: 'high', 'medium', or 'low'
 * @param {string} props.icon - Optional icon to display next to the section title
 */
const DashboardSection = ({ 
  children, 
  title, 
  priority = 'medium', // default priority is medium
  icon = null 
}) => {
  // Style based on priority level
  const getPriorityStyles = () => {
    switch(priority) {
      case 'high':
        return {
          titleSize: '22px',
          titleWeight: '700',
          titleColor: theme.colors.secondary,
          borderColor: theme.colors.primary,
          marginBottom: '32px',
          backgroundColor: 'rgba(76, 175, 80, 0.03)'
        };
      case 'low':
        return {
          titleSize: '18px',
          titleWeight: '500',
          titleColor: theme.colors.darkGray,
          borderColor: 'transparent',
          marginBottom: '24px',
          backgroundColor: 'transparent'
        };
      case 'medium':
      default:
        return {
          titleSize: '20px',
          titleWeight: '600',
          titleColor: theme.colors.secondary,
          borderColor: '#e0e0e0',
          marginBottom: '28px',
          backgroundColor: 'transparent'
        };
    }
  };
  
  const priorityStyles = getPriorityStyles();
  
  const sectionStyles = {
    marginBottom: priorityStyles.marginBottom,
    backgroundColor: priorityStyles.backgroundColor,
    borderRadius: theme.borderRadius.large,
    padding: '4px 0',
    overflow: 'hidden'
  };
  
  const headerStyles = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
    paddingBottom: '12px',
    borderBottom: `1px solid ${priorityStyles.borderColor}`
  };
  
  const titleStyles = {
    fontSize: priorityStyles.titleSize,
    fontWeight: priorityStyles.titleWeight,
    color: priorityStyles.titleColor,
    margin: 0,
    flex: 1
  };
  
  const iconStyles = {
    fontSize: '20px',
    marginRight: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  
  return (
    <div className="dashboard-section" style={sectionStyles}>
      <div style={headerStyles}>
        {icon && <span style={iconStyles}>{icon}</span>}
        <h2 style={titleStyles}>{title}</h2>
      </div>
      <div className="section-content">
        {children}
      </div>
    </div>
  );
};

export default DashboardSection;
