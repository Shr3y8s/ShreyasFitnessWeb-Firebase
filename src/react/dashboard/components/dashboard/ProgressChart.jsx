import React, { useState } from 'react';
import { theme } from '../../styles/theme';

const ProgressChart = ({ data }) => {
  const [activePoint, setActivePoint] = useState(null);
  const containerStyles = {
    padding: '5px'
  };
  
  const chartStyles = {
    height: '220px',
    backgroundColor: theme.colors.lightGray,
    borderRadius: theme.borderRadius.medium,
    padding: '15px 20px 10px',
    position: 'relative',
    marginBottom: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
  };
  
  const chartTitleStyles = {
    fontSize: '14px',
    color: theme.colors.secondary,
    marginBottom: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };
  
  const tooltipStyles = {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    border: `1px solid ${theme.colors.lightGray}`,
    borderRadius: theme.borderRadius.small,
    padding: '8px 12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    fontSize: '12px',
    zIndex: 10,
    pointerEvents: 'none',
    transition: 'all 0.2s ease',
    minWidth: '120px'
  };
  
  const tooltipTitleStyles = {
    fontWeight: '600',
    marginBottom: '5px',
    color: theme.colors.secondary
  };
  
  const tooltipItemStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '3px 0'
  };
  
  const chartContentStyles = {
    display: 'flex',
    height: '180px',
    position: 'relative'
  };
  
  const yAxisStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginRight: '10px',
    fontSize: '12px',
    color: theme.colors.darkGray
  };
  
  const xAxisStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
    fontSize: '12px',
    color: theme.colors.darkGray
  };
  
  const legendStyles = {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '16px',
    marginTop: '0'
  };
  
  const legendItemStyles = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    color: theme.colors.darkGray
  };
  
  const legendColorStyles = (color) => ({
    width: '12px',
    height: '12px',
    backgroundColor: color,
    marginRight: '5px',
    borderRadius: '2px'
  });
  
  // Generate target values
  const targetWeight = 190; // Target weight in lbs
  const targetBodyFat = 15; // Target body fat percentage
  
  // Convert values to chart positions
  const weightToPosition = (weight) => {
    // Map weight range (230 to 185) to y position (0 to 180)
    return 180 - ((weight - 185) / (230 - 185)) * 180;
  };
  
  const bodyFatToPosition = (bodyFat) => {
    // Map body fat range (30 to 10) to y position (0 to 180)
    return 180 - ((bodyFat - 10) / (30 - 10)) * 180;
  };
  
  // Target line y positions
  const targetWeightY = weightToPosition(targetWeight);
  const targetBodyFatY = bodyFatToPosition(targetBodyFat);
  
  // Handle mouse over data point
  const handleMouseOver = (index, type) => {
    setActivePoint({
      index,
      type,
      x: 50 + index * 100,
      y: type === 'weight' ? 
        [120, 100, 80, 60, 40, 30][index] : 
        [140, 130, 120, 100, 110, 105][index]
    });
  };
  
  // Handle mouse leave
  const handleMouseLeave = () => {
    setActivePoint(null);
  };
  
  // In a real implementation, this would use a chart library like Chart.js
  // This is a simplified placeholder version
  return (
    <div style={containerStyles}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '5px'
      }}>
        <div style={chartTitleStyles}>
          <span>Your body composition changes over the last 6 months</span>
        </div>
        <div style={legendStyles}>
          <div style={legendItemStyles}>
            <div style={legendColorStyles(theme.colors.primary)}></div>
            <span>Weight</span>
          </div>
          <div style={legendItemStyles}>
            <div style={legendColorStyles('#fd7e14')}></div>
            <span>Body Fat</span>
          </div>
        </div>
      </div>
      <div style={{fontSize: '12px', color: theme.colors.darkGray, marginBottom: '5px', textAlign: 'right'}}>
        <span style={{color: theme.colors.primary, fontWeight: '600'}}>Target Weight: {targetWeight} lbs</span> | 
        <span style={{color: '#fd7e14', fontWeight: '600', marginLeft: '6px'}}>Target Body Fat: {targetBodyFat}%</span>
      </div>
      <div style={chartStyles}>
        <div style={chartContentStyles}>
          <div style={yAxisStyles}>
            <span>230 lbs</span>
            <span>215 lbs</span>
            <span>200 lbs</span>
            <span>185 lbs</span>
          </div>
          <div style={{ flex: 1, position: 'relative' }}>
            <svg width="100%" height="100%" viewBox="0 0 600 180" preserveAspectRatio="none">
              {/* Grid lines */}
              <line x1="0" y1="45" x2="600" y2="45" stroke={theme.colors.lightGray} strokeWidth="1" />
              <line x1="0" y1="90" x2="600" y2="90" stroke={theme.colors.lightGray} strokeWidth="1" />
              <line x1="0" y1="135" x2="600" y2="135" stroke={theme.colors.lightGray} strokeWidth="1" />
              
              {/* Target lines */}
              <line 
                x1="0" 
                y1={targetWeightY} 
                x2="600" 
                y2={targetWeightY} 
                stroke={theme.colors.primary} 
                strokeWidth="1" 
                strokeDasharray="5,5" 
              />
              <text 
                x="5" 
                y={targetWeightY - 5} 
                fontSize="10" 
                fill={theme.colors.primary}
                fontWeight="bold"
              >
                Target: {targetWeight} lbs
              </text>
              
              <line 
                x1="0" 
                y1={targetBodyFatY} 
                x2="600" 
                y2={targetBodyFatY} 
                stroke="#fd7e14" 
                strokeWidth="1" 
                strokeDasharray="5,5" 
              />
              <text 
                x="5" 
                y={targetBodyFatY - 5} 
                fontSize="10" 
                fill="#fd7e14"
                fontWeight="bold"
              >
                Target: {targetBodyFat}%
              </text>
              
              {/* Weight line (green) */}
              <path 
                d="M50,120 L150,100 L250,80 L350,60 L450,40 L550,30"
                fill="none"
                stroke={theme.colors.primary}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {/* Body fat line (orange) */}
              <path 
                d="M50,140 L150,130 L250,120 L350,100 L450,110 L550,105"
                fill="none"
                stroke="#fd7e14"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {/* Data points for weight with hover effects */}
              {[
                {cx: 50, cy: 120, value: 193},
                {cx: 150, cy: 100, value: 200},
                {cx: 250, cy: 80, value: 207},
                {cx: 350, cy: 60, value: 214},
                {cx: 450, cy: 40, value: 218},
                {cx: 550, cy: 30, value: 220}
              ].map((point, i) => (
                <g key={`weight-${i}`}>
                  <circle 
                    cx={point.cx} 
                    cy={point.cy} 
                    r={activePoint && activePoint.index === i && activePoint.type === 'weight' ? 7 : 5} 
                    fill={theme.colors.primary}
                    opacity={activePoint && activePoint.index === i && activePoint.type === 'weight' ? 1 : 0.8}
                    onMouseOver={() => handleMouseOver(i, 'weight')}
                    onMouseLeave={handleMouseLeave}
                    style={{cursor: 'pointer', transition: 'all 0.2s ease'}}
                  />
                  {point.cy < targetWeightY && (
                    <circle 
                      cx={point.cx} 
                      cy={point.cy} 
                      r="10"
                      fill="transparent"
                      stroke={theme.colors.primary}
                      strokeWidth="2"
                      opacity="0.3"
                    />
                  )}
                </g>
              ))}
              
              {/* Data points for body fat with hover effects */}
              {[
                {cx: 50, cy: 140, value: 18},
                {cx: 150, cy: 130, value: 19},
                {cx: 250, cy: 120, value: 21},
                {cx: 350, cy: 100, value: 23},
                {cx: 450, cy: 110, value: 25},
                {cx: 550, cy: 105, value: 27}
              ].map((point, i) => (
                <g key={`fat-${i}`}>
                  <circle 
                    cx={point.cx} 
                    cy={point.cy} 
                    r={activePoint && activePoint.index === i && activePoint.type === 'bodyFat' ? 7 : 5} 
                    fill="#fd7e14"
                    opacity={activePoint && activePoint.index === i && activePoint.type === 'bodyFat' ? 1 : 0.8}
                    onMouseOver={() => handleMouseOver(i, 'bodyFat')}
                    onMouseLeave={handleMouseLeave}
                    style={{cursor: 'pointer', transition: 'all 0.2s ease'}}
                  />
                  {point.cy < targetBodyFatY && (
                    <circle 
                      cx={point.cx} 
                      cy={point.cy} 
                      r="10"
                      fill="transparent"
                      stroke="#fd7e14"
                      strokeWidth="2"
                      opacity="0.3"
                    />
                  )}
                </g>
              ))}
            </svg>
          </div>
        </div>
        <div style={xAxisStyles}>
          {data.labels.map((label, index) => (
            <span key={index}>{label}</span>
          ))}
        </div>
      </div>
      
      {/* Tooltip */}
      {activePoint && (
        <div 
          style={{
            ...tooltipStyles, 
            left: `${activePoint.x + 10}px`,
            top: `${activePoint.y - 70}px`
          }}
        >
          <div style={tooltipTitleStyles}>{data.labels[activePoint.index]}</div>
          <div style={tooltipItemStyles}>
            <span>Weight:</span>
            <span style={{color: theme.colors.primary, fontWeight: '600'}}>
              {activePoint.type === 'weight' ? 
                data.weightData[activePoint.index] : 
                data.bodyFatData[activePoint.index]} 
              {activePoint.type === 'weight' ? ' lbs' : '%'}
            </span>
          </div>
          {activePoint.type === 'weight' ? (
            <div style={tooltipItemStyles}>
              <span>vs Target:</span>
              <span style={{
                color: data.weightData[activePoint.index] <= targetWeight ? theme.colors.primary : '#ff9800',
                fontWeight: '600'
              }}>
                {data.weightData[activePoint.index] - targetWeight > 0 ? '+' : ''}
                {data.weightData[activePoint.index] - targetWeight} lbs
              </span>
            </div>
          ) : (
            <div style={tooltipItemStyles}>
              <span>vs Target:</span>
              <span style={{
                color: data.bodyFatData[activePoint.index] <= targetBodyFat ? theme.colors.primary : '#ff9800',
                fontWeight: '600'
              }}>
                {data.bodyFatData[activePoint.index] - targetBodyFat > 0 ? '+' : ''}
                {data.bodyFatData[activePoint.index] - targetBodyFat}%
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProgressChart;
