import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const TopBar = ({ toggleSidebar, sidebarCollapsed, userName }) => {
  const { signOut } = useAuth();
  const [greeting, setGreeting] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [notificationCount, setNotificationCount] = useState(2);

  // Set greeting based on time of day
  useEffect(() => {
    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) return 'Good morning';
      if (hour < 18) return 'Good afternoon';
      return 'Good evening';
    };
    setGreeting(getGreeting());
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await signOut();
      window.location.href = '/account.html'; // Redirect to login page
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    // In a real implementation, we would apply the theme change to the entire app
    // This would likely involve a context or state management system
  };

  const openNotifications = () => {
    // In a real implementation, this would show the notifications panel
    console.log('Opening notifications');
  };

  // TopBar styles
  const topBarStyles = {
    position: 'fixed',
    top: 0,
    right: 0,
    left: sidebarCollapsed ? '80px' : '250px',
    height: '64px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px',
    zIndex: 100,
    transition: 'left 0.3s ease-in-out'
  };

  const leftSectionStyles = {
    display: 'flex',
    alignItems: 'center'
  };

  const hamburgerStyles = {
    cursor: 'pointer',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '30px',
    height: '20px',
    marginRight: '15px'
  };

  const barStyles = {
    height: '2px',
    width: '100%',
    backgroundColor: '#007bff',
    borderRadius: '5px',
    transition: 'all 0.3s ease'
  };

  const pageHeaderStyles = {
    fontSize: '24px',
    fontWeight: '600',
    color: '#212529'
  };

  const rightSectionStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  };

  const iconButtonStyles = {
    width: '36px',
    height: '36px',
    borderRadius: '8px',
    backgroundColor: '#f8f9fa',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.2s ease'
  };

  const themeIconStyles = {
    fontSize: '18px'
  };

  const notificationButtonStyles = {
    ...iconButtonStyles,
    position: 'relative'
  };

  const notificationBadgeStyles = {
    position: 'absolute',
    top: '2px',
    right: '2px',
    backgroundColor: '#dc3545',
    color: 'white',
    borderRadius: '10px',
    minWidth: '18px',
    height: '18px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '10px',
    fontWeight: 'bold',
    padding: '0 5px'
  };

  const dividerStyles = {
    height: '36px',
    width: '1px',
    backgroundColor: '#e9ecef',
    margin: '0 10px'
  };

  const userSectionStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  };

  const userGreetingStyles = {
    fontSize: '16px',
    color: '#6c757d'
  };

  const userNameStyles = {
    fontWeight: 'bold',
    color: '#212529'
  };

  const logoutButtonStyles = {
    background: 'transparent',
    border: '1px solid #007bff',
    color: '#007bff',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    marginLeft: '15px',
    fontSize: '14px'
  };

  return (
    <div style={topBarStyles} className="topbar">
      <div style={leftSectionStyles}>
        <div style={hamburgerStyles} onClick={toggleSidebar} className="hamburger">
          <div style={barStyles}></div>
          <div style={barStyles}></div>
          <div style={barStyles}></div>
        </div>
        <div style={pageHeaderStyles}>
          {`${greeting}, ${userName}!`}
        </div>
      </div>
      
      <div style={rightSectionStyles}>
        <button 
          style={iconButtonStyles} 
          onClick={toggleTheme}
          title="Toggle theme"
        >
          <span style={themeIconStyles}>{isDarkTheme ? '☀️' : '🌙'}</span>
        </button>
        
        <button 
          style={notificationButtonStyles} 
          onClick={openNotifications}
          title="Open notifications"
        >
          <span>🔔</span>
          {notificationCount > 0 && (
            <span style={notificationBadgeStyles}>
              {notificationCount}
            </span>
          )}
        </button>
        
        <div style={dividerStyles}></div>
        
        <div style={userSectionStyles} className="user-section">
          <div style={userGreetingStyles}>
            <span style={userNameStyles}>{userName}</span>
          </div>
          <button 
            style={logoutButtonStyles} 
            onClick={handleLogout}
            className="logout-btn"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
