import React from 'react';
import { theme } from '../../styles/theme';

const CurrentPlan = ({ plan }) => {
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
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  };
  
  const headerIconStyles = {
    color: theme.colors.primary,
    fontSize: '20px',
    marginRight: theme.spacing.xs
  };
  
  const headerTextStyles = {
    fontSize: '18px',
    fontWeight: '600',
    color: theme.colors.secondary,
  };
  
  const descriptionStyles = {
    fontSize: '14px',
    color: theme.colors.darkGray,
    marginBottom: theme.spacing.md
  };
  
  const detailsContainerStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    gap: theme.spacing.md,
    padding: theme.spacing.md,
    backgroundColor: theme.colors.lightestGray || '#f9f9f9',
    borderRadius: theme.borderRadius.medium,
    marginBottom: theme.spacing.md
  };
  
  const detailItemStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };
  
  const iconStyles = {
    color: theme.colors.primary,
    fontSize: '20px',
    marginBottom: theme.spacing.xs,
  };
  
  const detailLabelStyles = {
    fontSize: '13px',
    color: theme.colors.darkGray,
    marginBottom: '6px',
    fontWeight: '500'
  };
  
  const detailValueStyles = {
    fontSize: '18px',
    fontWeight: '700',
    color: theme.colors.secondary
  };
  
  const progressContainerStyles = {
    marginTop: theme.spacing.sm
  };
  
  const progressLabelStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    fontWeight: '500',
    color: theme.colors.darkGray,
    marginBottom: theme.spacing.xs
  };
  
  const progressBarContainerStyles = {
    height: '8px',
    backgroundColor: theme.colors.lightGray,
    borderRadius: theme.borderRadius.small,
    overflow: 'hidden',
    marginBottom: '6px'
  };
  
  const progressBarStyles = {
    height: '100%',
    width: `${(plan.currentWeek / plan.totalWeeks) * 100}%`,
    backgroundColor: theme.colors.primary,
    transition: theme.transition
  };
  
  const footerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xs
  };
  
  const progressTextStyles = {
    fontSize: '14px',
    fontWeight: '500',
    color: theme.colors.darkGray,
  };
  
  const viewLinkStyles = {
    color: theme.colors.primary,
    fontSize: '14px',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    cursor: 'pointer'
  };
  
  // Function to get icon for each metric type
  const getMetricIcon = (type) => {
    switch(type) {
      case 'Duration': return '📅';
      case 'Focus': return '🎯';
      case 'Frequency': return '🔄';
      case 'Volume': return '📊';
      default: return '📋';
    }
  };
  
  return (
    <div style={containerStyles}>
      <div style={headerStyles}>
        <span style={headerIconStyles}>🎯</span>
        <div style={headerTextStyles}>Current Plan: {plan.name}</div>
      </div>
      
      <p style={descriptionStyles}>{plan.description}</p>
      
      <div style={detailsContainerStyles}>
        <div style={detailItemStyles}>
          <span style={iconStyles}>{getMetricIcon('Duration')}</span>
          <span style={detailLabelStyles}>Duration</span>
          <span style={detailValueStyles}>{plan.duration}</span>
        </div>
        
        <div style={detailItemStyles}>
          <span style={iconStyles}>{getMetricIcon('Focus')}</span>
          <span style={detailLabelStyles}>Focus</span>
          <span style={detailValueStyles}>{plan.focus}</span>
        </div>
        
        <div style={detailItemStyles}>
          <span style={iconStyles}>{getMetricIcon('Frequency')}</span>
          <span style={detailLabelStyles}>Frequency</span>
          <span style={detailValueStyles}>{plan.frequency}</span>
        </div>
        
        <div style={detailItemStyles}>
          <span style={iconStyles}>{getMetricIcon('Volume')}</span>
          <span style={detailLabelStyles}>Volume</span>
          <span style={detailValueStyles}>{plan.volume}</span>
        </div>
      </div>
      
      <div style={progressContainerStyles}>
        <div style={progressLabelStyles}>
          <span>Progress</span>
        </div>
        <div style={progressBarContainerStyles}>
          <div style={progressBarStyles}></div>
        </div>
        <div style={footerStyles}>
          <div style={progressTextStyles}>Week {plan.currentWeek} of {plan.totalWeeks}</div>
          <div style={viewLinkStyles}>
            View Full Plan <span style={{marginLeft: '4px'}}>→</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentPlan;
