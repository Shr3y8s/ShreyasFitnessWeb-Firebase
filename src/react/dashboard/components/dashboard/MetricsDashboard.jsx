import React from 'react';
import { theme } from '../../styles/theme';

const MetricsDashboard = ({ metrics }) => {
  // Styles for the overall container
  const containerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '16px',
    padding: '10px 5px'
  };
  
  // Function to determine color based on metric type and trend
  const getMetricColor = (metric) => {
    if (metric.trend === 'up') {
      return metric.type === 'positive' ? theme.colors.primary : '#ff9800';
    } else if (metric.trend === 'down') {
      return metric.type === 'positive' ? '#ff9800' : theme.colors.primary;
    }
    return theme.colors.primary; // Default color
  };
  
  // Function to render the trend indicator
  const renderTrendIndicator = (trend, type) => {
    const isPositive = (trend === 'up' && type === 'positive') || 
                       (trend === 'down' && type === 'negative');
                       
    if (!trend) return null;
    
    const indicatorStyles = {
      fontSize: '14px',
      marginLeft: '5px',
      color: isPositive ? theme.colors.primary : '#ff9800'
    };
    
    return (
      <span style={indicatorStyles}>
        {trend === 'up' ? '↑' : '↓'}
      </span>
    );
  };
  
  // Styles for individual metric items
  const getMetricItemStyles = (metric) => ({
    backgroundColor: 'rgba(249, 249, 249, 0.8)',
    borderRadius: theme.borderRadius.medium,
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    border: `1px solid ${theme.colors.lightGray}`,
    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
    position: 'relative',
    overflow: 'hidden'
  });
  
  // Value container with badge for administrative metrics
  const getValueContainerStyles = (isAdmin) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: '5px'
  });
  
  // Value styles
  const getValueStyles = (metric) => ({
    fontSize: metric.size === 'large' ? '36px' : '24px',
    fontWeight: '700',
    color: getMetricColor(metric),
    lineHeight: '1.1',
    display: 'flex',
    alignItems: 'center'
  });
  
  // Label styles
  const labelStyles = {
    fontSize: '13px',
    fontWeight: '500',
    color: theme.colors.darkGray,
    textAlign: 'center'
  };
  
  // Badge indicator for administrative metrics
  const getBadgeStyles = (type) => ({
    position: 'absolute',
    top: '-6px',
    right: '-6px',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: type === 'admin' ? '#2196f3' : 'transparent'
  });
  
  // Group label styles
  const groupLabelStyles = {
    gridColumn: '1 / -1',
    fontSize: '12px',
    fontWeight: '600',
    color: theme.colors.darkGray,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginTop: '5px',
    marginBottom: '-10px'
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

  // Organize metrics by groups
  const fitnessMetrics = metrics.filter(m => m.group === 'fitness');
  const progressMetrics = metrics.filter(m => m.group === 'progress');

  return (
    <div style={containerStyles}>
      {/* Fitness Metrics Section */}
      {fitnessMetrics.length > 0 && (
        <div style={groupLabelStyles}>Fitness Progress</div>
      )}
      
      {fitnessMetrics.map((metric, index) => (
        <div key={`fitness-${index}`} style={getMetricItemStyles(metric)}>
          <div 
            style={{
              ...decorationStyles,
              backgroundColor: getMetricColor(metric)
            }}
          />
          
          <div style={getBadgeStyles(metric.type)} />
          
          <div style={getValueContainerStyles(metric.type === 'admin')}>
            <div style={getValueStyles(metric)}>
              {metric.value}
              {renderTrendIndicator(metric.trend, metric.type)}
            </div>
          </div>
          
          <div style={labelStyles}>{metric.label}</div>
        </div>
      ))}
      
      {/* Progress Metrics Section */}
      {progressMetrics.length > 0 && (
        <div style={groupLabelStyles}>Progress Stats</div>
      )}
      
      {progressMetrics.map((metric, index) => (
        <div key={`progress-${index}`} style={getMetricItemStyles(metric)}>
          <div 
            style={{
              ...decorationStyles,
              backgroundColor: metric.type === 'admin' ? '#2196f3' : getMetricColor(metric)
            }}
          />
          
          <div style={getBadgeStyles(metric.type)} />
          
          <div style={getValueContainerStyles(metric.type === 'admin')}>
            <div style={getValueStyles(metric)}>
              {metric.prefix && <span style={{ fontSize: '16px', marginRight: '2px' }}>{metric.prefix}</span>}
              {metric.value}
              {metric.suffix && <span style={{ fontSize: '16px', marginLeft: '2px' }}>{metric.suffix}</span>}
            </div>
          </div>
          
          <div style={labelStyles}>{metric.label}</div>
        </div>
      ))}
    </div>
  );
};

export default MetricsDashboard;
