import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { theme } from '../../styles/theme';

const Modal = ({ 
  isOpen, 
  onClose, 
  children, 
  title,
  showCloseButton = true,
  closeOnOverlayClick = true,
  maxWidth = '600px',
  animation = 'fade' // 'fade', 'slide-down', 'zoom'
}) => {
  // Handle escape key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27 && isOpen) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEsc);
    
    // Lock body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    
    // Clean up
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);
  
  // Don't render anything if modal is not open
  if (!isOpen) return null;
  
  // Define animation styles
  const getAnimationStyles = () => {
    switch (animation) {
      case 'slide-down':
        return {
          animation: 'slideDown 0.3s ease-out forwards',
          '@keyframes slideDown': {
            '0%': { transform: 'translateY(-50px)', opacity: 0 },
            '100%': { transform: 'translateY(0)', opacity: 1 }
          }
        };
      case 'zoom':
        return {
          animation: 'zoomIn 0.3s ease-out forwards',
          '@keyframes zoomIn': {
            '0%': { transform: 'scale(0.8)', opacity: 0 },
            '100%': { transform: 'scale(1)', opacity: 1 }
          }
        };
      case 'fade':
      default:
        return {
          animation: 'fadeIn 0.3s ease-out forwards',
          '@keyframes fadeIn': {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 }
          }
        };
    }
  };
  
  // Styles
  const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '50px',
    zIndex: 1000,
    animation: 'fadeIn 0.2s ease-out forwards',
  };
  
  const modalStyles = {
    backgroundColor: '#fff',
    borderRadius: theme.borderRadius.large,
    boxShadow: '0 5px 20px rgba(0,0,0,0.2)',
    padding: '20px',
    width: '100%',
    maxWidth: maxWidth,
    maxHeight: '80vh',
    overflowY: 'auto',
    zIndex: 1001,
    position: 'relative',
    ...getAnimationStyles()
  };
  
  const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px'
  };
  
  const titleStyles = {
    fontSize: '20px',
    fontWeight: '600',
    color: theme.colors.secondary,
    margin: 0
  };
  
  const closeButtonStyles = {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '20px',
    color: theme.colors.darkGray,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    transition: 'all 0.2s ease',
    padding: 0
  };
  
  const handleOverlayClick = (e) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  // Use React Portal to render the modal outside the DOM hierarchy
  return ReactDOM.createPortal(
    <div style={overlayStyles} onClick={handleOverlayClick}>
      <div style={modalStyles}>
        {title && (
          <div style={headerStyles}>
            <h3 style={titleStyles}>{title}</h3>
            {showCloseButton && (
              <button 
                style={closeButtonStyles}
                onClick={onClose}
                aria-label="Close modal"
              >
                ✕
              </button>
            )}
          </div>
        )}
        {!title && showCloseButton && (
          <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <button 
              style={closeButtonStyles}
              onClick={onClose}
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        )}
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
