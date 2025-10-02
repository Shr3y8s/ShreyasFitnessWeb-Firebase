import React from 'react';
import { theme } from '../../styles/theme';

const ProgressSummary = ({ data, targetWeight = 190, targetBodyFat = 15 }) => {
  // Calculate key metrics
  const weightStart = data.weightData[0];
  const weightCurrent = data.weightData[data.weightData.length - 1];
  const bodyFatStart = data.bodyFatData[0];
  const bodyFatCurrent = data.bodyFatData[data.bodyFatData.length - 1];
  
  const weightChange = weightCurrent - weightStart;
  const bodyFatChange = bodyFatCurrent - bodyFatStart;
  
  // Calculate distance from target
  const weightFromTarget = weightCurrent - targetWeight;
  const bodyFatFromTarget = bodyFatCurrent - targetBodyFat;
  
  // Calculate progress percentage
  const initialWeightFromTarget = weightStart - targetWeight;
  const initialBodyFatFromTarget = bodyFatStart - targetBodyFat;
  
  // Avoid division by zero
  const weightProgressPercent = initialWeightFromTarget !== 0 ? 
    Math.min(100, Math.max(0, 100 - (weightFromTarget / initialWeightFromTarget * 100))) : 
    weightFromTarget <= 0 ? 100 : 0;
  
  const bodyFatProgressPercent = initialBodyFatFromTarget !== 0 ? 
    Math.min(100, Math.max(0, 100 - (bodyFatFromTarget / initialBodyFatFromTarget * 100))) : 
    bodyFatFromTarget <= 0 ? 100 : 0;
  
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '10px'
  };
  
  const metricCardStyles = {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.medium,
    padding: '16px',
    marginBottom: '16px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
  };
  
  const metricTitleStyles = {
    fontSize: '14px',
    fontWeight: '600',
    color: theme.colors.secondary,
    marginBottom: '12px'
  };
  
  const metricValueStyles = {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'flex-end'
  };
  
  const changeStyles = (isPositive) => ({
    fontSize: '14px',
    color: isPositive ? theme.colors.success : theme.colors.danger,
    marginLeft: '8px',
    fontWeight: '600'
  });
  
  const targetStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px'
  };
  
  const progressBarContainerStyles = {
    height: '6px',
    backgroundColor: theme.colors.mediumGray,
    borderRadius: '3px',
    overflow: 'hidden'
  };
  
  const progressBarStyles = (percent) => ({
    height: '100%',
    width: `${percent}%`,
    backgroundColor: theme.colors.primary,
    borderRadius: '3px',
    transition: 'width 0.5s ease'
  });
  
  const insightStyles = {
    marginTop: '8px',
    fontSize: '13px',
    color: theme.colors.darkGray
  };
  
  const periodStyles = {
    fontSize: '12px',
    color: theme.colors.darkGray,
    marginBottom: '4px'
  };
  
  const highlightStyles = {
    fontWeight: '600', 
    color: theme.colors.primary
  };

  return (
    <div style={containerStyles}>
      <div style={metricCardStyles}>
        <div style={metricTitleStyles}>Weight Tracking</div>
        <div style={metricValueStyles}>
          {weightCurrent} lbs
          <span style={changeStyles(weightChange <= 0)}>
            {weightChange <= 0 ? '↓' : '↑'} {Math.abs(weightChange)} lbs
          </span>
        </div>
        <div style={targetStyles}>
          <span>Target: {targetWeight} lbs</span>
          <span>{Math.round(weightProgressPercent)}% complete</span>
        </div>
        <div style={progressBarContainerStyles}>
          <div style={progressBarStyles(weightProgressPercent)}></div>
        </div>
        <div style={insightStyles}>
          {weightFromTarget > 0 ? 
            `${weightFromTarget} lbs away from your target weight` :
            'You have reached your target weight! 🎉'}
        </div>
      </div>

      <div style={metricCardStyles}>
        <div style={metricTitleStyles}>Body Fat Percentage</div>
        <div style={metricValueStyles}>
          {bodyFatCurrent}%
          <span style={changeStyles(bodyFatChange <= 0)}>
            {bodyFatChange <= 0 ? '↓' : '↑'} {Math.abs(bodyFatChange)}%
          </span>
        </div>
        <div style={targetStyles}>
          <span>Target: {targetBodyFat}%</span>
          <span>{Math.round(bodyFatProgressPercent)}% complete</span>
        </div>
        <div style={progressBarContainerStyles}>
          <div style={progressBarStyles(bodyFatProgressPercent)}></div>
        </div>
        <div style={insightStyles}>
          {bodyFatFromTarget > 0 ? 
            `${bodyFatFromTarget}% away from your target body fat` :
            'You have reached your target body fat! 🎉'}
        </div>
      </div>

      <div style={metricCardStyles}>
        <div style={metricTitleStyles}>Summary Insights</div>
        <div style={periodStyles}>Over the past 6 months:</div>
        <ul style={{
          margin: '0 0 0 16px',
          padding: 0,
          fontSize: '14px',
          color: theme.colors.darkGray
        }}>
          <li>Your weight changed by <span style={highlightStyles}>{weightChange > 0 ? '+' : ''}{weightChange} lbs</span></li>
          <li>Your body fat changed by <span style={highlightStyles}>{bodyFatChange > 0 ? '+' : ''}{bodyFatChange}%</span></li>
          <li>Your weight is now <span style={highlightStyles}>{Math.abs(weightFromTarget)} lbs {weightFromTarget > 0 ? 'above' : 'below'}</span> your target</li>
          <li>Your body fat is <span style={highlightStyles}>{Math.abs(bodyFatFromTarget)}% {bodyFatFromTarget > 0 ? 'above' : 'below'}</span> your target</li>
        </ul>
        <div style={insightStyles}>
          {(weightFromTarget <= 0 && bodyFatFromTarget <= 0) ? 
            "Congratulations! You've hit both your weight and body fat targets!" : 
            "Keep up the good work to reach your fitness goals!"}
        </div>
      </div>
    </div>
  );
};

export default ProgressSummary;
