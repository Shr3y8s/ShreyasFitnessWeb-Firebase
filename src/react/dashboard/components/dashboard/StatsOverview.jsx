import React from 'react';
import { theme } from '../../styles/theme';

const StatsOverview = ({ metrics }) => {
  // Primary color for stats metrics - using the primary theme color
  const statsPrimaryColor = theme.colors.primary;
  
  // Styles for the overall container
  const containerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    padding: '5px',
    marginBottom: '24px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    }
  };
  
  // Check if we're on mobile (will be overridden by the isMobile prop from Dashboard)
  const isMobile = window.innerWidth <= 768;
  
  if (isMobile) {
    containerStyles.gridTemplateColumns = 'repeat(auto-fit, minmax(150px, 1fr))';
  }
  
  // Styles for individual metric items
  const metricItemStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: theme.borderRadius.medium,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    border: `1px solid rgba(230, 230, 230, 0.8)`,
    boxShadow: '0 3px 8px rgba(0,0,0,0.05)',
    position: 'relative',
    overflow: 'hidden'
  };
  
  // Value styles - using primary accent color
  const valueStyles = {
    fontSize: '36px',
    fontWeight: '700',
    color: statsPrimaryColor,
    lineHeight: '1',
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center'
  };
  
  // Label styles
  const labelStyles = {
    fontSize: '14px',
    fontWeight: '500',
    color: theme.colors.darkGray,
    textAlign: 'center'
  };
  
  // Background decoration for metric items
  const decorationStyles = {
    position: 'absolute',
    right: '-25px',
    bottom: '-25px',
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    background: `radial-gradient(circle, rgba(76, 175, 80, 0.08) 0%, transparent 70%)`,
    opacity: 0.8,
    zIndex: 0
  };
  
  // Special styling for payment date
  const dateStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };
  
  const monthStyles = {
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '-5px',
    color: statsPrimaryColor
  };
  
  const dayStyles = {
    fontSize: '36px',
    fontWeight: '700',
    color: statsPrimaryColor,
    lineHeight: '1'
  };
  
  // Icons for the metrics
  const icons = {
    sessions: '🏋️',
    weeks: '📆',
    payment: '💳'
  };
  
  // Icon styles
  const iconStyles = {
    position: 'absolute',
    top: '12px',
    right: '12px',
    fontSize: '20px',
    opacity: 0.7
  };

  return (
    <div style={containerStyles}>
      {metrics.map((metric, index) => (
        <div key={index} style={metricItemStyles}>
          <div style={decorationStyles} />
          
          {/* Icon in the corner */}
          <div style={iconStyles}>
            {metric.label.toLowerCase().includes('session') ? icons.sessions :
             metric.label.toLowerCase().includes('week') ? icons.weeks :
             icons.payment}
          </div>
          
          {metric.prefix && metric.type === 'admin' ? (
            // Special case for payment date display
            <div style={dateStyles}>
              <span style={monthStyles}>{metric.prefix}</span>
              <span style={dayStyles}>{metric.value}</span>
              <div style={labelStyles}>Payment Due</div>
            </div>
          ) : (
            <>
              <div style={valueStyles}>
                {metric.prefix && <span style={{ fontSize: '18px', marginRight: '2px' }}>{metric.prefix}</span>}
                {metric.value}
                {metric.suffix && <span style={{ fontSize: '18px', marginLeft: '2px' }}>{metric.suffix}</span>}
              </div>
              <div style={labelStyles}>{metric.label}</div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;
