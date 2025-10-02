import React, { useState, useEffect } from 'react';
import { theme } from '../../styles/theme';

const WelcomeJourney = ({ journey, onAllCompleted, onClose }) => {
  // Initialize checklist items with localStorage data or default values
  const [checklistItems, setChecklistItems] = useState(() => {
    const savedItems = localStorage.getItem('welcomeChecklistItems');
    if (savedItems) {
      return JSON.parse(savedItems);
    }
    return [
      { id: 1, text: "Complete profile information", completed: false },
      { id: 2, text: "Schedule initial consultation", completed: false },
      { id: 3, text: "Review recommended plan", completed: false }
    ];
  });
  
  // Update checklist items text when journey prop changes
  useEffect(() => {
    if (journey) {
      setChecklistItems(items => items.map((item, index) => {
        const journeyStep = journey[`step${index + 1}`];
        return journeyStep ? { ...item, text: journeyStep } : item;
      }));
    }
  }, [journey]);
  
  // Calculate overall progress
  const completedCount = checklistItems.filter(item => item.completed).length;
  const progress = (completedCount / checklistItems.length) * 100;
  
  // Save to localStorage whenever checklist changes and check if all completed
  useEffect(() => {
    localStorage.setItem('welcomeChecklistItems', JSON.stringify(checklistItems));
    
    // If all items are completed, notify parent component
    const allCompleted = checklistItems.every(item => item.completed);
    if (allCompleted && onAllCompleted) {
      onAllCompleted();
    }
  }, [checklistItems, onAllCompleted]);
  
  // Toggle completion status of an item
  const toggleItem = (id) => {
    setChecklistItems(items => 
      items.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };
  // Styles for minimalist design matching screenshot
  const containerStyles = {
    backgroundColor: theme.colors.welcomeCard.background,
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.md,
    border: `1px solid ${theme.colors.welcomeCard.border}`,
    position: 'relative', // Added for absolute positioning of close button
  };
  
  const titleStyles = {
    fontSize: '18px',
    fontWeight: '600',
    color: theme.colors.secondary,
    marginBottom: theme.spacing.sm,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.xs
  };
  
  const titleIconStyles = {
    color: theme.colors.welcomeCard.icon,
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  
  const closeButtonStyles = {
    position: 'absolute',
    top: '12px',
    right: '12px',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    color: theme.colors.secondary, // Changed to darker color for better visibility
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '50%',
    transition: 'all 0.2s ease',
    padding: 0,
    ':hover': {
      color: theme.colors.black || '#000',
      backgroundColor: theme.colors.lightGray,
    }
  };
  
  const messageStyles = {
    fontSize: '14px',
    color: theme.colors.darkGray,
    marginBottom: theme.spacing.sm
  };
  
  const progressContainerStyles = {
    height: '4px',
    backgroundColor: theme.colors.lightGray,
    borderRadius: '4px',
    marginBottom: theme.spacing.xs,
    overflow: 'hidden'
  };
  
  const progressBarStyles = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: theme.colors.primary,
    transition: 'width 0.3s ease'
  };
  
  const progressTextStyles = {
    fontSize: '14px',
    color: theme.colors.darkGray,
    marginBottom: theme.spacing.xs,
    textAlign: 'right'
  };
  
  const stepsContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    marginTop: theme.spacing.xs,
    marginBottom: theme.spacing.xs
  };
  
  const checklistItemStyles = (completed) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '5px 0',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  });
  
  const checkboxStyles = (completed) => ({
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: `2px solid ${completed ? theme.colors.welcomeCard.accent : theme.colors.secondary}`,
    backgroundColor: completed ? theme.colors.welcomeCard.accent : 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '12px',
    color: theme.colors.white,
    transition: 'all 0.2s ease',
    flexShrink: 0
  });
  
  const checklistTextStyles = (completed) => ({
    fontSize: '15px',
    fontWeight: '500',
    color: completed ? theme.colors.secondary : theme.colors.secondary,
    textDecoration: completed ? 'line-through' : 'none',
    opacity: completed ? 0.7 : 1,
    flex: 1
  });
  
  const checkmarkStyles = {
    fontSize: '12px',
    fontWeight: 'bold'
  };
  
  const buttonStyles = {
    display: 'inline-block',
    background: theme.colors.welcomeCard.accent,
    color: theme.colors.white,
    border: 'none',
    padding: '10px 16px',
    borderRadius: theme.borderRadius.pill,
    fontWeight: '600',
    cursor: 'pointer',
    textAlign: 'center',
    boxShadow: theme.boxShadow,
    transition: theme.transition,
    fontSize: '15px',
    marginTop: theme.spacing.xs
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
      {onClose && (
        <button 
          onClick={onClose} 
          style={closeButtonStyles}
          aria-label="Close"
        >
          ×
        </button>
      )}
      <div style={titleStyles}>
        <span style={titleIconStyles}>📋</span>
        Welcome to Your Fitness Journey!
      </div>
      
      <div style={messageStyles}>
        The next step is to schedule your 30-minute planning consultation. During this session, we'll create your personalized fitness plan and set you up for success.
      </div>
      
      <div style={progressTextStyles}>
        {completedCount} of {checklistItems.length} tasks completed
      </div>
      
      <div style={progressContainerStyles}>
        <div style={progressBarStyles}></div>
      </div>
      
      <div style={stepsContainerStyles}>
        {checklistItems.map(item => (
          <div 
            key={item.id} 
            style={checklistItemStyles(item.completed)}
            onClick={() => toggleItem(item.id)}
          >
            <div style={checkboxStyles(item.completed)}>
              {item.completed && <span style={checkmarkStyles}>✓</span>}
            </div>
            <div style={checklistTextStyles(item.completed)}>
              {item.text}
            </div>
          </div>
        ))}
      </div>
      
      <button style={buttonStyles}>
        Schedule Your Consultation &nbsp;→
      </button>
    </div>
  );
};

export default WelcomeJourney;
