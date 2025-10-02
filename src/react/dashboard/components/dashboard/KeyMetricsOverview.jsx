import React from 'react';
import { theme } from '../../styles/theme';

const KeyMetricsOverview = ({ metrics }) => {
  // Styles for the overall container
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.md,
    border: `1px solid ${theme.colors.lightGray}`,
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
  };
  
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
  
  const subtitleStyles = {
    fontSize: '14px',
    color: theme.colors.darkGray,
    marginBottom: theme.spacing.md
  };
  
  const metricsContainerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '16px',
  };
  
  // Function to determine color - always green as per requirement
  const getMetricColor = (metric) => {
    return theme.colors.primary; // Always return green color
  };
  
  // Function to render the trend indicator - always green
  const renderTrendIndicator = (trend, type) => {
    if (!trend) return null;
    
    // Always use green regardless of trend direction
    const backgroundColor = 'rgba(76, 175, 80, 0.15)';
    const color = theme.colors.primary;
    
    const indicatorStyles = {
      fontSize: '14px',
      marginLeft: '8px',
      color: color,
      backgroundColor: backgroundColor,
      padding: '2px 6px',
      borderRadius: '12px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.2s ease'
    };
    
    return (
      <span 
        style={indicatorStyles}
        title="This metric is improving"
      >
        {trend === 'up' ? '↑' : '↓'} Good
      </span>
    );
  };
  
  // Styles for individual metric items
  const getMetricItemStyles = (metric) => {
  // Always use green for border
    const borderColor = 'rgba(76, 175, 80, 0.4)';
    const borderWidth = '2px';
    
    return {
      backgroundColor: 'rgba(249, 249, 249, 0.8)',
      borderRadius: theme.borderRadius.medium,
      padding: '18px 15px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      border: `${borderWidth} solid ${borderColor}`,
      boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      // Removed non-working hover styles (will use event handlers instead)
    };
  };
  
  // Metric item hover styles
  const metricItemHoverStyles = {
    transform: 'translateY(-2px) scale(1.02)',
    boxShadow: '0 4px 12px rgba(76, 175, 80, 0.15)',
    backgroundColor: 'rgba(249, 249, 249, 0.95)',
    borderColor: theme.colors.primary,
  };
  
  // Value container styles
  const valueContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: '5px'
  };
  
  // Value styles
  const getValueStyles = (metric) => ({
    fontSize: '28px',
    fontWeight: '700',
    color: getMetricColor(metric),
    lineHeight: '1.1',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    padding: '0 8px'
  });
  
  // Label styles
  const labelStyles = {
    fontSize: '13px',
    fontWeight: '500',
    color: theme.colors.darkGray,
    textAlign: 'center'
  };
  
  // Group label styles
  const groupLabelStyles = {
    gridColumn: '1 / -1',
    fontSize: '12px',
    fontWeight: '600',
    color: theme.colors.darkGray,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginTop: '5px',
    marginBottom: '-10px',
    display: 'none' // Hide the group label since we have card titles now
  };
  
  // Background decoration for metric items
  const decorationStyles = {
    position: 'absolute',
    right: '-15px',
    bottom: '-15px',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    opacity: 0.05,
    zIndex: 0
  };

  // Get tooltip text based on metric - all positive
  const getTooltipText = (metric) => {
    // Custom messages based on metric type - all positive
    if (metric.label === 'Weight Change') {
      return `Good progress! You're on track with your weight goals.`;
    } else if (metric.label === 'Strength Gain') {
      return `Your strength is improving! Keep up the good work.`;
    } else if (metric.label === 'Body Fat') {
      return `You're losing body fat! Great progress.`;
    }
    
    return 'Positive trend';
  };

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
      <div style={headerStyles}>
        <span style={headerIconStyles}>📈</span>
        <div style={headerTextStyles}>Key Metrics Overview</div>
      </div>
      
      <div style={subtitleStyles}>
        A snapshot of your progress over time.
      </div>
      
      <div style={metricsContainerStyles}>
        {/* Map through fitness metrics */}
        {metrics.map((metric, index) => (
        <div 
          key={index} 
          style={getMetricItemStyles(metric)}
          title={getTooltipText(metric)}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = metricItemHoverStyles.transform;
            e.currentTarget.style.boxShadow = metricItemHoverStyles.boxShadow;
            e.currentTarget.style.backgroundColor = metricItemHoverStyles.backgroundColor;
            e.currentTarget.style.borderColor = theme.colors.primary;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.06)';
            e.currentTarget.style.backgroundColor = 'rgba(249, 249, 249, 0.8)';
            e.currentTarget.style.borderColor = 'rgba(76, 175, 80, 0.4)';
          }}
        >
          <div 
            style={{
              ...decorationStyles,
              backgroundColor: getMetricColor(metric)
            }}
          />
          
          <div style={valueContainerStyles}>
            <div style={getValueStyles(metric)}>
              {metric.value}
      {renderTrendIndicator(metric.trend, 'positive')} {/* Always treat as positive */}
            </div>
          </div>
          
          <div style={labelStyles}>{metric.label}</div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default KeyMetricsOverview;
