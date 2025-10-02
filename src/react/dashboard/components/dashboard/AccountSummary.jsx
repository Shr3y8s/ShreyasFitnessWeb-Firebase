import React from 'react';
import { theme } from '../../styles/theme';

const AccountSummary = ({ metrics }) => {
  // Primary color for account metrics - green to match theme
  const accountPrimaryColor = theme.colors.primary;
  
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
  
  const metricsContainerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing.lg,
    marginTop: theme.spacing.md,
  };
  
  // Styles for individual metric items in a column layout
  const metricItemStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: theme.spacing.sm,
  };
  
  // Icon container styles
  const iconContainerStyles = {
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.primary,
    fontSize: '24px',
    marginBottom: theme.spacing.xs,
  };
  
  // Value styles
  const valueStyles = {
    fontSize: '22px',
    fontWeight: '700',
    color: theme.colors.secondary,
    lineHeight: '1',
  };
  
  // Label styles
  const labelStyles = {
    fontSize: '14px',
    fontWeight: '400',
    color: theme.colors.darkGray,
    marginTop: '4px',
  };
  
  // Function to get the appropriate icon based on metric type
  const getMetricIcon = (metric) => {
    if (metric.label.includes('Sessions')) {
      return '✓';
    } else if (metric.label.includes('Weeks')) {
      return '📅';
    } else if (metric.label.includes('Payment')) {
      return '💳';
    }
    return '📊';
  };

  return (
    <div style={containerStyles}>
      <div style={headerStyles}>
        <span style={headerIconStyles}>👤</span>
        <div style={headerTextStyles}>Account Summary</div>
      </div>
      
      <div style={metricsContainerStyles}>
        {/* Map through account metrics in horizontal layout */}
        {metrics.map((metric, index) => (
          <div key={index} style={metricItemStyles}>
            {/* Icon at the top */}
            <div style={iconContainerStyles}>
              {getMetricIcon(metric)}
            </div>
            
            {/* Value in the middle */}
            <div style={valueStyles}>
              {metric.label.includes('Payment') ? `${metric.prefix} ${metric.value}` : metric.value}
            </div>
            
            {/* Label at the bottom */}
            <div style={labelStyles}>{metric.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountSummary;
