import React from 'react';
import { theme } from '../../styles/theme';

const NutritionSummary = ({ nutrition }) => {
  // Container styles with transition for hover effect
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.md,
    border: `1px solid ${theme.colors.lightGray}`,
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    height: '100%',
  };
  
  // Header styles
  const headerContainerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  };
  
  const headerLeftStyles = {
    display: 'flex',
    alignItems: 'center',
  };
  
  const headerIconStyles = {
    marginRight: theme.spacing.sm,
    display: 'flex',
    alignItems: 'center',
  };
  
  const headerTextStyles = {
    fontSize: '18px',
    fontWeight: '600',
    color: theme.colors.secondary,
  };
  
  const viewLinkStyles = {
    display: 'flex',
    alignItems: 'center',
    color: theme.colors.primary,
    fontSize: '14px',
    textDecoration: 'none',
    fontWeight: '500',
  };
  
  const subheaderStyles = {
    fontSize: '14px',
    color: theme.colors.darkGray,
    marginBottom: theme.spacing.md,
  };
  
  // Calories section styles
  const caloriesContainerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.md,
  };
  
  const calorieBoxStyles = {
    textAlign: 'center',
    flex: 1,
  };
  
  const calorieValueStyles = {
    fontSize: '24px',
    fontWeight: '700',
    color: theme.colors.secondary,
    marginBottom: '4px',
  };
  
  const calorieLabelStyles = {
    fontSize: '14px',
    color: theme.colors.darkGray,
  };
  
  const targetMetContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 8px',
  };
  
  const targetMetIconStyles = {
    color: '#28a745',
    marginBottom: '4px',
  };
  
  // Progress bar styles
  const progressContainerStyles = {
    marginBottom: theme.spacing.md,
  };
  
  const progressBarStyles = {
    width: '100%',
    height: '6px',
    backgroundColor: '#e9ecef',
    borderRadius: '3px',
    marginTop: '8px',
    marginBottom: '4px',
  };
  
  const progressFillStyles = (percent) => ({
    width: `${percent}%`,
    height: '100%',
    backgroundColor: '#28a745',
    borderRadius: '3px',
  });
  
  const progressLabelStyles = {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: '14px',
    color: theme.colors.darkGray,
  };
  
  // Macros section styles
  const sectionTitleStyles = {
    fontSize: '16px',
    fontWeight: '600',
    color: theme.colors.secondary,
    marginBottom: '8px',
  };
  
  const macrosBarContainerStyles = {
    height: '24px',
    backgroundColor: '#e9ecef',
    borderRadius: '12px',
    overflow: 'hidden',
    display: 'flex',
    marginBottom: '8px',
  };
  
  const macroBarStyles = (width, color) => ({
    width: `${width}%`,
    height: '100%',
    backgroundColor: color,
  });
  
  const macrosLegendStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.md,
  };
  
  const macroLegendItemStyles = {
    display: 'flex',
    alignItems: 'center',
  };
  
  const macroColorDotStyles = (color) => ({
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: color,
    marginRight: '4px',
  });
  
  const macroLabelStyles = {
    fontSize: '12px',
    color: theme.colors.darkGray,
  };
  
  // Water intake styles
  const waterSectionStyles = {
    marginBottom: theme.spacing.md,
  };
  
  const waterInfoStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
  };
  
  const waterTitleStyles = {
    fontSize: '16px',
    fontWeight: '600',
    color: theme.colors.secondary,
  };
  
  const waterAmountStyles = {
    fontSize: '14px',
    color: theme.colors.darkGray,
  };
  
  const waterBarContainerStyles = {
    height: '8px',
    backgroundColor: '#e9ecef',
    borderRadius: '4px',
    overflow: 'hidden',
  };
  
  const waterBarStyles = (percent) => ({
    width: `${percent}%`,
    height: '100%',
    backgroundColor: '#17a2b8',
    borderRadius: '4px',
  });
  
  // Action buttons styles
  const buttonContainerStyles = {
    display: 'flex',
    gap: '10px',
    marginTop: 'auto',
  };
  
  const primaryButtonStyles = {
    flex: 1,
    padding: '10px',
    backgroundColor: theme.colors.primary,
    color: 'white',
    border: 'none',
    borderRadius: theme.borderRadius.small,
    fontWeight: '500',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
  };
  
  const secondaryButtonStyles = {
    flex: 1,
    padding: '10px',
    backgroundColor: 'white',
    color: theme.colors.primary,
    border: `1px solid ${theme.colors.primary}`,
    borderRadius: theme.borderRadius.small,
    fontWeight: '500',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
  };
  
  // Calculate percentages for progress bars
  const caloriesPercent = (nutrition.caloriesConsumed / nutrition.caloriesTarget) * 100;
  const waterPercent = (nutrition.waterIntake.current / nutrition.waterIntake.target) * 100;
  const isTargetMet = nutrition.caloriesConsumed >= nutrition.caloriesTarget;
  
  // Icon SVG components
  const NutritionIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      style={{ color: theme.colors.primary }}
    >
      <path d="M11 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
      <path d="M3 21h18"></path>
      <path d="M5 21v-10.5a4 4 0 1 1 8 0v10.5"></path>
      <path d="M19 21v-2a4 4 0 0 0 -4 -4h-6a4 4 0 0 0 -4 4v2"></path>
    </svg>
  );
  
  const ArrowRightIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  );
  
  const CheckmarkIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      style={{ color: '#28a745' }}
    >
      <path d="M20 6 9 17l-5-5"></path>
    </svg>
  );
  
  const WaterDropIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      style={{ color: '#17a2b8' }}
    >
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
    </svg>
  );
  
  const UtensildIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
      <path d="M7 2v20"></path>
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
    </svg>
  );
  
  const PlusIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M12 5v14"></path>
      <path d="M5 12h14"></path>
    </svg>
  );

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
      {/* Header with View Nutrition link */}
      <div style={headerContainerStyles}>
        <div style={headerLeftStyles}>
          <div style={headerIconStyles}>
            <NutritionIcon />
          </div>
          <div style={headerTextStyles}>Nutrition Summary</div>
        </div>
        <a href="#" style={viewLinkStyles}>
          View Nutrition <ArrowRightIcon />
        </a>
      </div>
      
      <p style={subheaderStyles}>
        Your daily intake at a glance.
      </p>
      
      {/* Calories section */}
      <div style={caloriesContainerStyles}>
        <div style={calorieBoxStyles}>
          <div style={calorieValueStyles}>{nutrition.caloriesConsumed}</div>
          <div style={calorieLabelStyles}>Consumed</div>
        </div>
        
        <div style={calorieBoxStyles}>
          <div style={calorieValueStyles}>{nutrition.caloriesTarget}</div>
          <div style={calorieLabelStyles}>Target</div>
        </div>
        
        <div style={targetMetContainerStyles}>
          <div style={targetMetIconStyles}>
            <CheckmarkIcon />
          </div>
          <div style={calorieLabelStyles}>Target Met</div>
        </div>
      </div>
      
      {/* Calories progress bar */}
      <div style={progressContainerStyles}>
        <div style={progressBarStyles}>
          <div style={progressFillStyles(100)}></div>
        </div>
        <div style={progressLabelStyles}>100%</div>
      </div>
      
      {/* Macros distribution */}
      <div style={{ marginBottom: theme.spacing.md }}>
        <div style={sectionTitleStyles}>Macros Distribution</div>
        <div style={macrosBarContainerStyles}>
          <div style={macroBarStyles(nutrition.macros.protein, '#17a2b8')}></div>
          <div style={macroBarStyles(nutrition.macros.carbs, '#ffc107')}></div>
          <div style={macroBarStyles(nutrition.macros.fat, '#fd7e14')}></div>
        </div>
        <div style={macrosLegendStyles}>
          <div style={macroLegendItemStyles}>
            <div style={macroColorDotStyles('#17a2b8')}></div>
            <div style={macroLabelStyles}>Protein {nutrition.macros.protein}%</div>
          </div>
          <div style={macroLegendItemStyles}>
            <div style={macroColorDotStyles('#ffc107')}></div>
            <div style={macroLabelStyles}>Carbs {nutrition.macros.carbs}%</div>
          </div>
          <div style={macroLegendItemStyles}>
            <div style={macroColorDotStyles('#fd7e14')}></div>
            <div style={macroLabelStyles}>Fat {nutrition.macros.fat}%</div>
          </div>
        </div>
      </div>
      
      {/* Water intake */}
      <div style={waterSectionStyles}>
        <div style={waterInfoStyles}>
          <div style={waterTitleStyles}>Water Intake</div>
          <div style={waterAmountStyles}>
            {nutrition.waterIntake.current} / {nutrition.waterIntake.target} oz
          </div>
        </div>
        <div style={waterBarContainerStyles}>
          <div style={waterBarStyles(waterPercent)}></div>
        </div>
      </div>
      
      {/* Action buttons */}
      <div style={buttonContainerStyles}>
        <button style={primaryButtonStyles}>
          <UtensildIcon /> Log Meal
        </button>
        <button style={secondaryButtonStyles}>
          <PlusIcon /> Add Water
        </button>
      </div>
    </div>
  );
};

export default NutritionSummary;
