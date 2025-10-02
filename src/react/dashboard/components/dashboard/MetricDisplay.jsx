import React, { useState, useEffect } from 'react';
import { theme } from '../../styles/theme';

const MetricDisplay = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const targetValue = parseInt(value) || 0;
  
  // Animate the counter
  useEffect(() => {
    const duration = 1000; // ms
    const frameDuration = 1000/60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;
    
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentValue = Math.round(ease(progress) * targetValue);
      
      setDisplayValue(currentValue);
      
      if (frame === totalFrames) {
        clearInterval(timer);
      }
    }, frameDuration);
    
    return () => clearInterval(timer);
  }, [targetValue]);
  
  // Easing function for smoother animation
  const ease = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }
  
  const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: '10px',
    position: 'relative'
  };
  
  const valueStyles = {
    fontSize: '52px',
    fontWeight: '700',
    color: theme.colors.primary,
    lineHeight: '1',
    textAlign: 'center',
    position: 'relative',
    zIndex: 2,
    textShadow: '0 2px 5px rgba(0,0,0,0.05)'
  };
  
  const backgroundCircleStyle = {
    position: 'absolute',
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    background: `radial-gradient(circle, rgba(76, 175, 80, 0.08) 0%, rgba(255,255,255,0) 70%)`,
    zIndex: 1
  };
  
  return (
    <div style={containerStyles}>
      <div style={backgroundCircleStyle}></div>
      <div style={valueStyles}>{displayValue}</div>
    </div>
  );
};

export default MetricDisplay;
