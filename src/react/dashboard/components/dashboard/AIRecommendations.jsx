import React from 'react';
import { theme } from '../../styles/theme';

const AIRecommendations = ({ recommendations }) => {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  };
  
  const recommendationListStyles = {
    marginBottom: '20px'
  };
  
  const recommendationItemStyles = {
    backgroundColor: theme.colors.lightGray,
    borderRadius: theme.borderRadius.medium,
    padding: '15px',
    marginBottom: '10px'
  };
  
  const recommendationTitleStyles = {
    fontSize: '15px',
    fontWeight: '600',
    color: theme.colors.secondary,
    marginBottom: '5px'
  };
  
  const recommendationDescriptionStyles = {
    fontSize: '14px',
    color: theme.colors.darkGray
  };
  
  const buttonStyles = {
    display: 'inline-block',
    backgroundColor: 'transparent',
    border: `1px solid ${theme.colors.primary}`,
    color: theme.colors.primary,
    padding: '8px 16px',
    borderRadius: theme.borderRadius.small,
    fontWeight: '500',
    cursor: 'pointer',
    marginTop: 'auto',
    width: '100%',
    textAlign: 'center',
    transition: theme.transition
  };
  
  return (
    <div style={containerStyles}>
      <div style={recommendationListStyles}>
        {recommendations.map((rec, index) => (
          <div key={index} style={recommendationItemStyles}>
            <div style={recommendationTitleStyles}>{rec.title}</div>
            <div style={recommendationDescriptionStyles}>{rec.description}</div>
          </div>
        ))}
      </div>
      
      <button style={buttonStyles}>Generate New Suggestions</button>
    </div>
  );
};

export default AIRecommendations;
