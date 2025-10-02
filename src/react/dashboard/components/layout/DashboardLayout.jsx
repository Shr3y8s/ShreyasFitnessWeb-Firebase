import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Sidebar from './Sidebar';
import { mobileComponentStyles } from '../../styles/sectionStyles';

// Breakpoints for responsive design
const breakpoints = {
  smallMobile: 480,
  mobile: 768,
  tablet: 1024
};

const DashboardLayout = ({ children }) => {
  const { currentUser, userProfile } = useAuth();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= breakpoints.mobile);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  
  // Handle window resize events
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobileView(width <= breakpoints.mobile);
      
      // Auto-collapse sidebar on mobile, expand on desktop
      if (width <= breakpoints.mobile && !sidebarCollapsed) {
        setSidebarCollapsed(true);
      } else if (width > breakpoints.tablet && sidebarCollapsed) {
        setSidebarCollapsed(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [sidebarCollapsed]);
  
  // Toggle sidebar visibility
  const toggleSidebar = () => {
    if (isMobileView) {
      setSidebarVisible(!sidebarVisible);
    } else {
      setSidebarCollapsed(!sidebarCollapsed);
    }
  };
  
  // Close sidebar when clicking outside on mobile
  const handleContentClick = () => {
    if (isMobileView && sidebarVisible) {
      setSidebarVisible(false);
    }
  };

  // Main layout styles - responsive
  const layoutStyles = {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#f6faf6',
    position: 'relative',
    overflow: 'hidden'
  };

  // Main content styles - responsive based on screen size
  const contentStyles = {
    flex: 1,
    transition: 'margin-left 0.3s ease-in-out, padding 0.3s ease',
    marginLeft: isMobileView ? '0' : (sidebarCollapsed ? '80px' : '250px'),
    padding: isMobileView ? '16px' : '24px',
    position: 'relative'
  };
  
  // Mobile menu button styles
  const mobileMenuButtonStyles = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#4CAF50',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    cursor: 'pointer',
    zIndex: 100,
    border: 'none',
    transition: 'transform 0.2s ease',
    transform: sidebarVisible ? 'rotate(90deg)' : 'rotate(0deg)'
  };
  
  // Overlay for mobile when sidebar is open
  const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 90,
    display: isMobileView && sidebarVisible ? 'block' : 'none'
  };

  return (
    <div style={layoutStyles} className="dashboard-layout">
      <Sidebar 
        collapsed={sidebarCollapsed} 
        userProfile={userProfile}
        toggleSidebar={toggleSidebar}
        isMobileView={isMobileView}
        mobileVisible={sidebarVisible}
      />
      
      {/* Overlay for mobile - closes sidebar when clicked */}
      <div style={overlayStyles} onClick={handleContentClick}></div>
      
      <div 
        style={contentStyles} 
        className="dashboard-content"
        onClick={handleContentClick}
      >
        <main>
          {children}
        </main>
        
        {/* Mobile-only menu button */}
        {isMobileView && (
          <button 
            style={mobileMenuButtonStyles} 
            onClick={toggleSidebar}
            aria-label="Toggle menu"
          >
            {sidebarVisible ? '×' : '☰'}
          </button>
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;
