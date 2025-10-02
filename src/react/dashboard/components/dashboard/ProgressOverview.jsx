import React from 'react';
import { theme } from '../../styles/theme';

const ProgressOverview = ({ progressData }) => {
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
    transition: 'all 0.3s ease',
    cursor: 'default',
  };
  
  // Header styles
  const headerStyles = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
    padding: theme.spacing.sm,
  };
  
  const headerTextStyles = {
    fontSize: '18px',
    fontWeight: '600',
    color: theme.colors.secondary,
    marginLeft: theme.spacing.sm,
  };
  
  const descriptionStyles = {
    fontSize: '14px',
    color: theme.colors.darkGray,
    marginBottom: theme.spacing.md,
    paddingLeft: theme.spacing.sm,
  };
  
  // Chart container
  const chartContainerStyles = {
    position: 'relative',
    height: '280px',
    width: '100%',
    backgroundColor: theme.colors.lightestGray || '#f9f9f9',
    borderRadius: theme.borderRadius.small,
    overflow: 'hidden',
    aspectRatio: '16/9',
  };
  
  // Chart styles
  const chartStyles = {
    position: 'relative',
    height: '100%',
    width: '100%',
    padding: '20px',
    zIndex: 2,
  };
  
  // Y-axis styles (Weight)
  const yAxisStyles = {
    position: 'absolute',
    left: '10px',
    top: 0,
    bottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    fontSize: '12px',
    color: theme.colors.darkGray,
  };
  
  const xAxisStyles = {
    position: 'absolute',
    left: '40px',
    right: '40px',
    bottom: 0,
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '12px',
    color: theme.colors.darkGray,
  };
  
  // SVG styles for chart
  const svgContainerStyles = {
    position: 'absolute',
    top: '20px',
    left: '40px',
    right: '40px',
    bottom: '20px',
  };
  
  // Data setup
  const weightData = [220, 215, 210, 205, 200, 193];
  const weightMin = 190;
  const weightMax = 225;
  
  // Generate SVG line path
  const generateLinePath = (data, maxValue, minValue) => {
    if (!data || data.length === 0) return '';
    
    const width = 100 / (data.length - 1);
    
    return data.map((value, index) => {
      const x = index * width;
      // Normalize the value to fit within the chart height
      const normalizedValue = ((value - minValue) / (maxValue - minValue)) * 100;
      const y = 100 - normalizedValue;
      
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  };
  
  // Generate area path (for gradient fill)
  const generateAreaPath = (data, maxValue, minValue) => {
    if (!data || data.length === 0) return '';
    
    const width = 100 / (data.length - 1);
    let path = '';
    
    // Start with the line from left to right
    data.forEach((value, index) => {
      const x = index * width;
      const normalizedValue = ((value - minValue) / (maxValue - minValue)) * 100;
      const y = 100 - normalizedValue;
      
      if (index === 0) {
        path += `M ${x} ${y}`;
      } else {
        path += ` L ${x} ${y}`;
      }
    });
    
    // Add the bottom line from right to left to close the shape
    path += ` L 100 100 L 0 100 Z`;
    
    return path;
  };
  
  // Create data points for the SVG chart
  const generateDataPoints = (data, maxValue, minValue) => {
    if (!data || data.length === 0) return [];
    
    const width = 100 / (data.length - 1);
    
    return data.map((value, index) => {
      const x = index * width;
      // Normalize the value to fit within the chart height
      const normalizedValue = ((value - minValue) / (maxValue - minValue)) * 100;
      const y = 100 - normalizedValue;
      
      return { x, y, value };
    });
  };
  
  // Generate grid lines
  const generateGridLines = () => {
    const lines = [];
    const gridCount = 3; // Number of horizontal grid lines
    
    for (let i = 0; i <= gridCount; i++) {
      const y = (i / gridCount) * 100;
      lines.push(
        <line
          key={`grid-${i}`}
          x1="0"
          y1={y}
          x2="100"
          y2={y}
          stroke="#ccc"
          strokeWidth="0.5"
          strokeDasharray="3,3"
        />
      );
    }
    
    return lines;
  };
  
  const weightPath = generateLinePath(weightData, weightMax, weightMin);
  const weightAreaPath = generateAreaPath(weightData, weightMax, weightMin);
  const weightPoints = generateDataPoints(weightData, weightMax, weightMin);
  
  // Month labels
  const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  
  // Activity icon SVG
  const ActivityIcon = () => (
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
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
    </svg>
  );
  
  // Legend styles
  const legendContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing.md,
    paddingTop: theme.spacing.xs,
  };
  
  const legendItemStyles = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    color: theme.colors.darkGray,
  };
  
  const legendColorBlockStyles = (color) => ({
    width: '12px',
    height: '12px',
    borderRadius: '2px',
    backgroundColor: color,
    marginRight: '0.5rem',
  });
  
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
        <ActivityIcon />
        <div style={headerTextStyles}>Progress Overview</div>
      </div>
      
      <p style={descriptionStyles}>Your body composition changes over the last 6 months.</p>
      
      <div style={chartContainerStyles}>
        <div style={chartStyles}>
          {/* Y-Axis (Weight) */}
          <div style={yAxisStyles}>
            <div>{weightMax} lbs</div>
            <div>{Math.round((weightMax + weightMin) / 2)} lbs</div>
            <div>{weightMin} lbs</div>
          </div>
          
          {/* X-Axis (Months) */}
          <div style={xAxisStyles}>
            {monthLabels.map((month, index) => (
              <div key={index}>{month}</div>
            ))}
          </div>
          
          {/* SVG Chart */}
          <div style={svgContainerStyles}>
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Definitions for gradients */}
              <defs>
                <linearGradient id="weightGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={theme.colors.primary} stopOpacity="0.8"/>
                  <stop offset="95%" stopColor={theme.colors.primary} stopOpacity="0.1"/>
                </linearGradient>
              </defs>
              
              {/* Grid Lines */}
              {generateGridLines()}
              
              {/* Weight Area (with gradient) */}
              <path
                d={weightAreaPath}
                fill="url(#weightGradient)"
                opacity="0.6"
              />
              
              {/* Weight Line */}
              <path
                d={weightPath}
                fill="none"
                stroke={theme.colors.primary}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {/* Weight Data Points */}
              {weightPoints.map((point, index) => (
                <circle
                  key={`weight-${index}`}
                  cx={point.x}
                  cy={point.y}
                  r="1.5"
                  fill="white"
                  stroke={theme.colors.primary}
                  strokeWidth="0.5"
                />
              ))}
            </svg>
          </div>
        </div>
      </div>
      
      {/* Legend */}
      <div style={legendContainerStyles}>
        <div style={legendItemStyles}>
          <div style={legendColorBlockStyles(theme.colors.primary)}></div>
          <span>Weight (lbs)</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressOverview;
