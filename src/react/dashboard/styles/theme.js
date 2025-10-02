// Theme constants matching the minimalist design in screenshot
export const theme = {
  colors: {
    primary: '#4CAF50', // Keeping green as primary
    primaryDark: '#388E3C',
    primaryLight: '#E8F5E9', // Lighter green for backgrounds
    secondary: '#212121', // Darker text for better contrast
    subtleGreen: '#f6faf6', // Lighter subtle green background
    lightGray: '#f8f9fa', // Lighter background
    mediumGray: '#e9ecef', // Softer medium gray
    darkGray: '#6c757d', // Softer dark gray for subtexts
    white: '#ffffff',
    
    // Additional colors for comprehensive styling
    danger: '#dc3545', // Red
    warning: '#FF9800', // Orange for alert cards
    warningLight: '#FFF3E0', // Light orange background
    success: '#4CAF50', // Green
    successLight: '#E8F5E9', // Light green background
    info: '#2196F3', // Blue
    infoLight: '#E3F2FD', // Light blue background
    light: '#f8f9fa', // Light gray
    dark: '#343a40', // Dark gray
    black: '#000000',
    border: '#e9ecef', // Lighter border color
    
    // Section color themes updated for minimalist design
    todaysFocus: {
      background: '#ffffff',
      border: '#e9ecef',
      accent: '#4CAF50'
    },
    alertCard: {
      background: '#FFF3E0', // Light orange background
      border: '#FFCC80', // Subtle orange border
      accent: '#FF9800', // Orange accent
      icon: '#F57C00' // Darker orange for icons
    },
    welcomeCard: {
      background: '#E8F5E9', // Light green background
      border: '#A5D6A7', // Subtle green border
      accent: '#4CAF50', // Green accent
      icon: '#388E3C' // Darker green for icons
    },
    progressHub: {
      background: '#ffffff',
      border: '#e9ecef',
      accent: '#2196F3'
    },
    planResources: {
      background: '#ffffff',
      border: '#e9ecef',
      accent: '#9C27B0'
    }
  },
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  boxShadowHover: '0 4px 12px rgba(0, 0, 0, 0.1)',
  boxShadowActive: '0 2px 6px rgba(0, 0, 0, 0.15)',
  transition: 'all 0.3s ease',
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
    pill: '50px', // For pill-shaped buttons and elements
  },
  gradients: {
    primary: 'linear-gradient(135deg, #4CAF50, #388E3C)'
  },
  
  // Animation presets
  animations: {
    fadeIn: 'fade-in 0.3s ease-in-out',
    slideIn: 'slide-in 0.3s ease-in-out',
    pulse: 'pulse 2s infinite ease-in-out',
    bounce: 'bounce 1s infinite ease-in-out'
  },
  
  // Media queries for responsive design
  media: {
    smallMobile: '@media (max-width: 480px)',
    mobile: '@media (max-width: 768px)',
    tablet: '@media (max-width: 1024px)',
    desktop: '@media (min-width: 1025px)'
  },
  
  // Spacing system with additional values
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '64px' // Extra large spacing
  },
  
  // Typography presets
  typography: {
    greeting: {
      fontSize: '32px',
      fontWeight: '700',
      lineHeight: '1.2',
      color: '#212121'
    },
    subGreeting: {
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '1.5',
      color: '#6c757d'
    },
    cardTitle: {
      fontSize: '18px',
      fontWeight: '600',
      lineHeight: '1.4',
      color: '#212121'
    },
    cardSubtitle: {
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '1.5',
      color: '#6c757d'
    },
    body: {
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '1.5',
      color: '#212121'
    },
    small: {
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '1.5',
      color: '#6c757d'
    }
  }
};

export default theme;
