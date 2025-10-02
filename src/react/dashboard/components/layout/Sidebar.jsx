import React from 'react';
import { theme } from '../../styles/theme';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Sidebar = ({ collapsed, userProfile, toggleSidebar, isMobileView, mobileVisible }) => {
  const location = useLocation();
  const { signOut } = useAuth();
  
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await signOut();
      window.location.href = '/account.html'; // Redirect to login page
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
  
  // Menu categories and items for dashboard
  const menuCategories = [
    {
      name: 'General',
      items: [
        {
          title: 'Dashboard',
          icon: '📊',
          path: '/dashboard',
          exact: true
        }
      ]
    },
    {
      name: 'Tracking',
      items: [
        {
          title: 'My Workouts',
          icon: '🏋️',
          path: '/dashboard/workouts',
          notifications: 1
        },
        {
          title: 'Progress & Analytics',
          icon: '📈',
          path: '/dashboard/progress',
          notifications: 1
        },
        {
          title: 'Sessions & Schedule',
          icon: '📅',
          path: '/dashboard/sessions'
        },
        {
          title: 'Nutrition Hub',
          icon: '🍎',
          path: '/dashboard/nutrition'
        },
        {
          title: 'Goals & Milestones',
          icon: '🏆',
          path: '/dashboard/goals'
        }
      ]
    },
    {
      name: 'Support',
      items: [
        {
          title: 'Communication',
          icon: '💬',
          path: '/dashboard/communication'
        },
        {
          title: 'Resources',
          icon: '📚',
          path: '/dashboard/resources'
        }
      ]
    },
    {
      name: 'Account',
      items: [
        {
          title: 'Profile',
          icon: '👤',
          path: '/dashboard/profile'
        },
        {
          title: 'Billing',
          icon: '💳',
          path: '/dashboard/billing'
        },
        {
          title: 'Settings',
          icon: '⚙️',
          path: '/dashboard/settings'
        },
        {
          title: 'Integrations',
          icon: '🔄',
          path: '/dashboard/integrations',
          comingSoon: true
        },
        {
          title: 'Mobile App',
          icon: '📱',
          path: '/dashboard/app',
          comingSoon: true
        }
      ]
    }
  ];

  // Sidebar styles - enhanced for mobile
  const sidebarStyles = {
    position: 'fixed',
    top: 0,
    left: isMobileView ? (mobileVisible ? 0 : '-280px') : 0,
    height: '100vh',
    width: isMobileView ? '280px' : (collapsed ? '80px' : '250px'),
    backgroundColor: '#1e1e2d',
    color: '#ffffff',
    transition: isMobileView ? 'left 0.3s ease-in-out' : 'width 0.3s ease-in-out',
    zIndex: 200,
    boxShadow: '2px 0 10px rgba(0, 0, 0, 0.2)',
    overflowX: 'hidden',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column'
  };

  const logoStyles = {
    display: 'flex',
    justifyContent: (collapsed && !isMobileView) ? 'center' : 'flex-start',
    alignItems: 'center',
    padding: (collapsed && !isMobileView) ? '20px 0' : '20px',
    borderBottom: '1px solid #2d2d3f',
    height: '64px',
    position: 'relative'
  };

  const hamburgerStyles = {
    cursor: 'pointer',
    padding: '10px',
    display: isMobileView ? 'none' : 'flex', // Hide hamburger on mobile as we use the floating button instead
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '24px',
    height: '18px',
    position: 'absolute',
    right: collapsed ? '10px' : '20px'
  };

  const barStyles = {
    height: '2px',
    width: '100%',
    backgroundColor: '#e4e6ef',
    borderRadius: '5px',
    transition: 'all 0.3s ease'
  };

  const logoTextStyles = {
    fontSize: '18px',
    fontWeight: 'bold',
    display: (collapsed && !isMobileView) ? 'none' : 'block',
    whiteSpace: 'nowrap',
    letterSpacing: '1px'
  };

  const logoIconStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.gradients.primary,
    color: theme.colors.white,
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    marginRight: (collapsed && !isMobileView) ? '0' : '10px',
    fontWeight: 'bold'
  };

  const menuStyles = {
    padding: collapsed ? '10px 0' : '10px 0',
    flex: 1,
    overflowY: 'auto'
  };

  const categoryStyles = {
    padding: (collapsed && !isMobileView) ? '0' : '0 20px',
    marginTop: '15px',
    marginBottom: '5px'
  };

  const categoryLabelStyles = {
    fontSize: '12px',
    textTransform: 'uppercase',
    color: '#6c757d',
    fontWeight: '600',
    letterSpacing: '1px',
    display: (collapsed && !isMobileView) ? 'none' : 'block'
  };

  const menuItemStyles = (isActive) => ({
    display: 'flex',
    alignItems: 'center',
    padding: (collapsed && !isMobileView) ? '15px 0' : '10px 20px',
    marginBottom: '2px',
    color: isActive ? theme.colors.primary : '#e4e6ef',
    textDecoration: 'none',
    borderLeft: isActive ? `3px solid ${theme.colors.primary}` : '3px solid transparent',
    backgroundColor: isActive ? 'rgba(76, 175, 80, 0.1)' : 'transparent',
    justifyContent: (collapsed && !isMobileView) ? 'center' : 'space-between',
    transition: theme.transition,
    borderRadius: '0 4px 4px 0',
    position: 'relative'
  });

  const menuItemContentStyles = {
    display: 'flex',
    alignItems: 'center'
  };

  const iconStyles = {
    fontSize: '16px',
    marginRight: (collapsed && !isMobileView) ? '0' : '10px',
    width: '20px',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const notificationBadgeStyles = {
    position: 'absolute',
    right: collapsed ? '8px' : '20px',
    backgroundColor: theme.colors.primaryLight,
    color: theme.colors.white,
    borderRadius: '10px',
    minWidth: '20px',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '11px',
    fontWeight: 'bold',
    padding: '0 6px'
  };

  const comingSoonStyles = {
    fontSize: '10px',
    color: '#6c757d',
    backgroundColor: 'rgba(108, 117, 125, 0.1)',
    padding: '2px 6px',
    borderRadius: '4px',
    marginLeft: (collapsed && !isMobileView) ? '0' : '5px',
    whiteSpace: 'nowrap',
    display: (collapsed && !isMobileView) ? 'none' : 'inline-block'
  };

  const logoutSectionStyles = {
    padding: (collapsed && !isMobileView) ? '15px 0' : '15px 20px',
    borderTop: '1px solid #2d2d3f',
    marginTop: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#1e1e2d'
  };
  
  const userSectionStyles = {
    padding: (collapsed && !isMobileView) ? '15px 0' : '15px 20px',
    borderTop: '1px solid #2d2d3f',
    display: 'flex',
    alignItems: 'center',
    justifyContent: (collapsed && !isMobileView) ? 'center' : 'flex-start',
    width: '100%',
    backgroundColor: '#1e1e2d',
    position: 'relative'
  };

  const userAvatarStyles = {
    width: '36px',
    height: '36px',
    borderRadius: '8px',
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: (collapsed && !isMobileView) ? '0' : '10px',
    fontSize: '16px',
    fontWeight: 'bold'
  };

  const userInfoStyles = {
    display: (collapsed && !isMobileView) ? 'none' : 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    flex: '1'
  };

  const userNameStyles = {
    fontSize: '14px',
    fontWeight: '600',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  };

  const userRoleStyles = {
    fontSize: '12px',
    color: '#6c757d',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    backgroundColor: 'rgba(108, 117, 125, 0.1)',
    padding: '2px 6px',
    borderRadius: '4px',
    alignSelf: 'flex-start',
    marginTop: '4px'
  };
  
  const logoutButtonStyles = {
    backgroundColor: 'transparent',
    color: '#e4e6ef',
    border: '1px solid #2d2d3f',
    borderRadius: '4px',
    padding: '6px 10px',
    cursor: 'pointer',
    fontSize: '12px',
    transition: 'all 0.2s ease',
    display: (collapsed && !isMobileView) ? 'none' : 'block',
    width: '80%'
  };
  
  const logoutIconStyles = {
    display: (collapsed && !isMobileView) ? 'flex' : 'none',
    color: '#e4e6ef',
    cursor: 'pointer',
    fontSize: '14px',
    width: '24px',
    height: '24px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    transition: 'all 0.2s ease',
    backgroundColor: 'rgba(108, 117, 125, 0.1)'
  };
  
  // Mobile close button
  const mobileCloseButtonStyles = {
    position: 'absolute',
    top: '15px',
    right: '15px',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    display: isMobileView ? 'flex' : 'none',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer'
  };

  // Get initials from name for avatar
  const getInitials = (name) => {
    if (!name) return 'C';
    return name.split(' ').map(part => part[0]).join('').toUpperCase().substring(0, 2);
  };

  return (
    <div style={sidebarStyles} className={`sidebar ${isMobileView ? 'mobile' : ''} ${mobileVisible ? 'visible' : ''}`}>
      {/* Mobile close button */}
      {isMobileView && (
        <div style={mobileCloseButtonStyles} onClick={toggleSidebar}>
          ×
        </div>
      )}
      <div style={logoStyles} className="logo">
        <div style={logoIconStyles}>SF</div>
        <div style={logoTextStyles}>SFSHREY.FIT</div>
        <div style={hamburgerStyles} onClick={toggleSidebar} className="hamburger">
          <div style={barStyles}></div>
          <div style={barStyles}></div>
          <div style={barStyles}></div>
        </div>
      </div>
      <div style={menuStyles} className="menu">
        {menuCategories.map((category, catIndex) => (
          <div key={catIndex}>
            <div style={categoryStyles} className="category">
              <div style={categoryLabelStyles}>{category.name}</div>
            </div>
            {category.items.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  style={menuItemStyles(isActive)}
                  className={`menu-item ${isActive ? 'active' : ''}`}
                >
                  <div style={menuItemContentStyles}>
                    <span style={iconStyles}>{item.icon}</span>
                    {!collapsed && (
                      <>
                        <span>{item.title}</span>
                        {item.comingSoon && (
                          <span style={comingSoonStyles}>Coming Soon</span>
                        )}
                      </>
                    )}
                  </div>
                  {item.notifications && (
                    <span style={notificationBadgeStyles}>{item.notifications}</span>
                  )}
                </Link>
              );
            })}
          </div>
        ))}
      </div>
      <div style={logoutSectionStyles} className="logout-section">
        <button 
          style={logoutButtonStyles} 
          onClick={handleLogout}
          className="logout-btn"
        >
          Logout
        </button>
        <div 
          style={logoutIconStyles} 
          onClick={handleLogout}
          className="logout-icon"
        >
          🚪
        </div>
      </div>
      <div style={userSectionStyles} className="user-section">
        <div style={userAvatarStyles}>
          {getInitials(userProfile?.name || 'Client')}
        </div>
        <div style={userInfoStyles} className="user-info">
          <div style={userNameStyles}>{userProfile?.name || 'Shreyas Annapureddy'}</div>
          <div style={userRoleStyles}>{userProfile?.tier || 'in-person-training'}</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
