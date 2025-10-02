import { theme } from './theme';

/**
 * Section styles for the dashboard
 * These styles define the layout and appearance of the different dashboard sections
 */

// Common grid layout styles for all sections
export const sectionGridBase = {
  display: 'grid',
  gap: '24px',
  width: '100%',
  marginBottom: '32px'
};

// Today's Focus section - highest priority items for immediate attention
export const todaysFocusStyles = {
  ...sectionGridBase,
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  backgroundColor: 'rgba(76, 175, 80, 0.02)',
  padding: '8px 0',
  borderRadius: theme.borderRadius.large
};

// Progress Hub section - metrics and achievements
export const progressHubStyles = {
  ...sectionGridBase,
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
};

// Plan & Resources section - planning and reference information
export const planResourcesStyles = {
  ...sectionGridBase,
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
};

// Full width section for important components that need the entire width
export const fullWidthSectionStyles = {
  ...sectionGridBase,
  gridColumn: '1 / -1'
};

// Two column section for desktop
export const twoColumnSectionStyles = {
  ...sectionGridBase,
  gridTemplateColumns: '1fr 1fr'
};

// Refined breakpoints for more precise responsive design
const breakpoints = {
  smallMobile: 480,  // Small phones
  mobile: 768,       // Standard mobile devices
  tablet: 1024,      // Tablets and small laptops
  desktop: 1280,     // Standard desktop screens
  largeDesktop: 1440 // Large desktop screens
};

// Responsive styles for different screen sizes
export const getResponsiveStyles = (windowWidth) => {
  // Determine device type based on window width
  const isSmallMobile = windowWidth <= breakpoints.smallMobile;
  const isMobile = windowWidth <= breakpoints.mobile;
  const isTablet = windowWidth > breakpoints.mobile && windowWidth <= breakpoints.tablet;
  const isDesktop = windowWidth > breakpoints.tablet && windowWidth <= breakpoints.desktop;
  const isLargeDesktop = windowWidth > breakpoints.desktop;
  
  if (isSmallMobile) {
    // Extra small mobile styles - compact layout with reduced padding and margins
    return {
      todaysFocus: {
        ...sectionGridBase,
        gridTemplateColumns: '1fr',
        gap: '12px',
        marginBottom: '24px',
        padding: '4px 0'
      },
      progressHub: {
        ...sectionGridBase,
        gridTemplateColumns: '1fr',
        gap: '12px',
        marginBottom: '24px'
      },
      planResources: {
        ...sectionGridBase,
        gridTemplateColumns: '1fr',
        gap: '12px',
        marginBottom: '24px'
      },
      twoColumn: {
        ...sectionGridBase,
        gridTemplateColumns: '1fr',
        gap: '12px'
      }
    };
  }
  
  if (isMobile && !isSmallMobile) {
    // Standard mobile styles - stack everything vertically with better spacing
    return {
      todaysFocus: {
        ...sectionGridBase,
        gridTemplateColumns: '1fr',
        gap: '16px',
        padding: '6px 0',
        // Add priority-based ordering for important items on mobile
        priorityOrder: {
          high: 1,
          medium: 2,
          low: 3
        }
      },
      progressHub: {
        ...sectionGridBase,
        gridTemplateColumns: '1fr',
        gap: '16px'
      },
      planResources: {
        ...sectionGridBase,
        gridTemplateColumns: '1fr',
        gap: '16px'
      },
      twoColumn: {
        ...sectionGridBase,
        gridTemplateColumns: '1fr',
        gap: '16px'
      }
    };
  }
  
  if (isTablet) {
    // Tablet styles - 2 columns at most with adjusted sizes
    return {
      todaysFocus: {
        ...todaysFocusStyles,
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px'
      },
      progressHub: {
        ...progressHubStyles,
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px'
      },
      planResources: {
        ...planResourcesStyles,
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px'
      },
      twoColumn: {
        ...twoColumnSectionStyles,
        gap: '20px'
      }
    };
  }
  
  if (isDesktop) {
    // Standard desktop styles - optimal layout
    return {
      todaysFocus: todaysFocusStyles,
      progressHub: progressHubStyles,
      planResources: planResourcesStyles,
      twoColumn: twoColumnSectionStyles
    };
  }
  
  // Large desktop styles - more space for content
  return {
    todaysFocus: {
      ...todaysFocusStyles,
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))'
    },
    progressHub: {
      ...progressHubStyles,
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'
    },
    planResources: {
      ...planResourcesStyles,
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'
    },
    twoColumn: twoColumnSectionStyles
  };
};

// Section card styles - for cards within sections
export const sectionCardStyles = {
  // High priority card (important, needs attention)
  high: {
    borderLeft: `3px solid ${theme.colors.primary}`,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
  },
  
  // Medium priority card (standard importance)
  medium: {
    borderLeft: `3px solid ${theme.colors.secondary}`,
    boxShadow: theme.boxShadow
  },
  
  // Low priority card (reference, informational)
  low: {
    borderLeft: '3px solid transparent',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
  }
};

// Row styles for grid layout components
export const rowsGridStyles = {
  display: 'grid',
  gridTemplateRows: 'minmax(120px, auto) 1fr',
  gap: '24px',
  height: '100%'
};

// Mobile-specific component styles
export const mobileComponentStyles = {
  // Special styles for cards on mobile
  dashboardCard: {
    padding: '16px',
    margin: '0 0 16px 0'
  },
  
  // Compact header styles for mobile
  sectionHeader: {
    fontSize: '18px',
    padding: '12px 16px',
    margin: '0 0 12px 0'
  },
  
  // Fullscreen focus mode styles for mobile
  focusMode: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    padding: '16px',
    backgroundColor: '#fff',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column'
  }
};
