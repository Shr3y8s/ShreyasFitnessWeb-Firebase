import React, { useState } from 'react';
import { theme } from '../../styles/theme';

const DailyChecklist = ({ tasks }) => {
  // State to track which tasks are completed
  const [completedTasks, setCompletedTasks] = useState({});
  
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
  
  // Task item styles
  const taskItemContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing.sm,
    backgroundColor: theme.colors.lightestGray || '#f9f9f9',
    marginBottom: theme.spacing.sm,
    borderRadius: theme.borderRadius.small,
  };
  
  const taskIconStyles = {
    color: theme.colors.primary,
    fontSize: '16px',
    marginRight: theme.spacing.md,
  };
  
  const taskTextStyles = {
    fontSize: '14px',
    color: theme.colors.secondary,
    flex: 1,
  };
  
  // Checkbox styles
  const checkboxStyles = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: `1px solid ${theme.colors.primary}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundColor: 'white',
  };
  
  const checkedStyles = {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: theme.colors.primary,
  };
  
  // Progress styles
  const progressContainerStyles = {
    marginTop: theme.spacing.md,
  };
  
  const progressTextStyles = {
    fontSize: '14px',
    color: theme.colors.darkGray,
    marginBottom: theme.spacing.xs,
  };
  
  const progressBarContainerStyles = {
    height: '6px',
    backgroundColor: theme.colors.lightGray,
    borderRadius: theme.borderRadius.small,
    overflow: 'hidden',
  };
  
  const progressBarStyles = {
    height: '100%',
    backgroundColor: theme.colors.primary,
    width: `${calculateProgress()}%`,
  };
  
  // Toggle task completion
  const toggleTask = (taskId) => {
    setCompletedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };
  
  // Calculate progress percentage
  function calculateProgress() {
    if (!tasks || tasks.length === 0) return 0;
    const completedCount = Object.values(completedTasks).filter(Boolean).length;
    return Math.round((completedCount / tasks.length) * 100);
  }
  
  // Get appropriate icon for task type
  const getTaskIcon = (task) => {
    if (task.includes('workout')) return '💪';
    if (task.includes('steps')) return '👣';
    if (task.includes('nutrition')) return '🥗';
    if (task.includes('weight')) return '⚖️';
    if (task.includes('check-in')) return '📅';
    return '✓';
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
        <span style={headerIconStyles}>📋</span>
        <div style={headerTextStyles}>Daily Checklist</div>
      </div>
      
      <p style={descriptionStyles}>Stay on track with your daily and weekly goals.</p>
      
      {tasks && tasks.map((task, index) => (
        <div key={index} style={taskItemContainerStyles}>
          <span style={taskIconStyles}>{getTaskIcon(task)}</span>
          <span style={taskTextStyles}>{task}</span>
          <div 
            style={checkboxStyles} 
            onClick={() => toggleTask(index)}
          >
            {completedTasks[index] && <div style={checkedStyles}></div>}
          </div>
        </div>
      ))}
      
      <div style={progressContainerStyles}>
        <div style={progressTextStyles}>Progress {calculateProgress()}%</div>
        <div style={progressBarContainerStyles}>
          <div style={progressBarStyles}></div>
        </div>
      </div>
    </div>
  );
};

export default DailyChecklist;
