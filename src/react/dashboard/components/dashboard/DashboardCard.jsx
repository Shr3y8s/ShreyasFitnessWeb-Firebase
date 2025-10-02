import React, { useState, useRef, useEffect } from 'react';
import { theme } from '../../styles/theme';

// Card type options: default, primary, success, info, warning
const DashboardCard = ({ 
  title, 
  children, 
  accent = false,
  type = 'default',
  icon = null,
  highlight = false,
  noPadding = false,
  closable = false,
  onClose = () => {},
  // New props for expandable functionality
  expandable = false,
  defaultExpanded = true,
  minHeight = 200, // Increased from 100 to show more content by default
  // New prop for focus mode
  focusable = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [isFocused, setIsFocused] = useState(false);
  const [contentHeight, setContentHeight] = useState('auto');
  
  // Refs for measuring content
  const contentRef = useRef(null);
  // Define color scheme based on card type
  const getTypeColors = () => {
    switch (type) {
      case 'primary':
        return { 
          headerBg: 'rgba(76, 175, 80, 0.08)',
          border: theme.colors.primary,
          title: theme.colors.primary,
          iconColor: theme.colors.primary 
        };
      case 'info':
        return { 
          headerBg: 'rgba(33, 150, 243, 0.08)',
          border: '#2196f3',
          title: '#2196f3',
          iconColor: '#2196f3'
        };
      case 'success':
        return { 
          headerBg: 'rgba(76, 175, 80, 0.08)', 
          border: theme.colors.primary,
          title: theme.colors.primary,
          iconColor: theme.colors.primary
        };
      case 'warning':
        return { 
          headerBg: 'rgba(255, 152, 0, 0.08)',
          border: '#ff9800',
          title: '#ff9800',
          iconColor: '#ff9800'
        };
      default:
        return { 
          headerBg: accent ? 'rgba(76, 175, 80, 0.05)' : theme.colors.lightGray, 
          border: accent ? theme.colors.primary : 'transparent',
          title: accent ? theme.colors.primary : theme.colors.secondary,
          iconColor: accent ? theme.colors.primary : theme.colors.darkGray
        };
    }
  };
  
  const typeColors = getTypeColors();
  
  // Measure content height for expand/collapse transitions
  useEffect(() => {
    if (expandable && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [expandable, children]);
  
  // Handle expand/collapse toggle with improved behavior
  const toggleExpand = (e) => {
    e.stopPropagation();
    setIsExpanded(prev => !prev);
    
    // Auto-scroll to show more content when expanded
    if (!isExpanded && contentRef.current) {
      setTimeout(() => {
        contentRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start'
        });
      }, 100);
    }
  };
  
  // Handle focus mode toggle
  const toggleFocus = (e) => {
    e.stopPropagation();
    setIsFocused(prev => !prev);
  };
  
  const cardStyles = {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.large,
    overflow: 'hidden',
    boxShadow: isHovered 
      ? '0 10px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.06)'
      : isFocused 
        ? '0 0 0 3000px rgba(0,0,0,0.5), 0 10px 50px rgba(0,0,0,0.3)'
        : theme.boxShadow,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderLeft: `3px solid ${typeColors.border}`,
    transition: 'all 0.3s ease, box-shadow 0.5s ease',
    transform: isHovered && highlight ? 'translateY(-5px)' : 'none',
    position: isFocused ? 'relative' : 'static',
    zIndex: isFocused ? 100 : 1,
  };

  const headerStyles = {
    backgroundColor: typeColors.headerBg,
    padding: '16px 20px',
    borderBottom: `1px solid rgba(0, 0, 0, 0.05)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    overflow: 'hidden',
    cursor: expandable ? 'pointer' : 'default'
  };

  const titleStyles = {
    margin: 0,
    fontSize: '16px',
    fontWeight: '600',
    color: typeColors.title,
    letterSpacing: '0.01em',
    flexGrow: 1
  };
  
  const controlButtonStyles = {
    position: 'relative',
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 2,
    fontSize: '18px',
    fontWeight: 'bold',
    color: typeColors.title,
    opacity: 0.6,
    transition: 'opacity 0.2s ease, transform 0.3s ease',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '50%',
    marginLeft: '8px'
  };
  
  const expandButtonStyles = {
    ...controlButtonStyles,
    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
    backgroundColor: expandable ? 'rgba(0, 0, 0, 0.05)' : 'transparent', // More visible button
    opacity: 0.8, // Higher default opacity for better visibility
  };
  
  const focusButtonStyles = {
    ...controlButtonStyles,
    opacity: isFocused ? 0.9 : 0.6
  };
  
  const iconStyles = {
    marginRight: '12px',
    fontSize: '18px',
    color: typeColors.iconColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  
  // Decorative accent shape for the header background
  const accentShapeStyles = {
    position: 'absolute',
    right: '-10px',
    top: '-10px',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    background: `radial-gradient(circle, ${typeColors.headerBg} 0%, transparent 70%)`,
    opacity: 0.5,
    zIndex: 1
  };

  // Modified content styles for better preview when collapsed
  const contentStyles = {
    padding: noPadding ? '0' : '20px',
    flex: 1,
    overflowY: 'auto',
    transition: 'max-height 0.5s ease',
    maxHeight: isExpanded || !expandable ? '2000px' : `${minHeight}px`,
    position: 'relative'
  };
  
  // Subtler gradient that shows more content
  const contentPreviewStyles = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30px', // Reduced from 50px
    background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 100%)', // More transparent
    display: isExpanded || !expandable ? 'none' : 'block',
    pointerEvents: 'none'
  };
  
  // New hint text to indicate expandable content
  const expandHintStyles = {
    position: 'absolute',
    bottom: '5px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '12px',
    color: typeColors.title,
    opacity: 0.7,
    padding: '2px 10px',
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: '12px',
    pointerEvents: 'none',
    display: expandable && !isExpanded ? 'block' : 'none',
    zIndex: 2
  };

  return (
    <div 
      style={cardStyles} 
      className="dashboard-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        style={headerStyles} 
        onClick={expandable ? toggleExpand : undefined}
      >
        {icon && <div style={iconStyles}>{icon}</div>}
        <h3 style={titleStyles}>{title}</h3>
        
        {/* Control buttons */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {focusable && (
            <button 
              style={focusButtonStyles} 
              onClick={toggleFocus}
              onMouseEnter={(e) => e.target.style.opacity = 1}
              onMouseLeave={(e) => e.target.style.opacity = isFocused ? 0.9 : 0.6}
              aria-label={isFocused ? "Exit Focus Mode" : "Focus Mode"}
            >
              {isFocused ? '⊖' : '⊕'}
            </button>
          )}
          
          {expandable && (
            <button 
              style={expandButtonStyles} 
              onClick={toggleExpand}
              onMouseEnter={(e) => e.target.style.opacity = 1}
              onMouseLeave={(e) => e.target.style.opacity = 0.8} // Maintain higher opacity
              aria-label={isExpanded ? "Collapse" : "Expand"}
            >
              {isExpanded ? '▲' : '▼'} {/* Different icons for expanded/collapsed states */}
            </button>
          )}
          
          {closable && (
            <button 
              style={controlButtonStyles} 
              onClick={onClose}
              onMouseEnter={(e) => e.target.style.opacity = 1}
              onMouseLeave={(e) => e.target.style.opacity = 0.6}
              aria-label="Close"
            >
              ×
            </button>
          )}
        </div>
        
        <div style={accentShapeStyles}></div>
      </div>
      <div 
        style={contentStyles} 
        ref={contentRef}
      >
        {children}
        {expandable && !isExpanded && (
          <>
            <div style={contentPreviewStyles}></div>
            <div style={expandHintStyles}>Click to show more</div>
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardCard;
