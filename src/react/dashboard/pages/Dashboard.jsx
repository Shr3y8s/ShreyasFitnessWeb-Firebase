import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { theme } from '../styles/theme';
import { 
  todaysFocusStyles,
  progressHubStyles, 
  planResourcesStyles, 
  getResponsiveStyles 
} from '../styles/sectionStyles';

// Simple emoji icons as placeholders 
const Icons = {
  journey: '🚀',
  upcoming: '📅',
  metrics: '📊',
  sessions: '🏋️',
  weeks: '📆',
  checkin: '🔍',
  payment: '💳',
  ai: '🤖',
  plan: '📝',
  progress: '📈',
  upcomingSessions: '⏰',
  completedSessions: '✅',
  nutrition: '🍎'
};

// Import dashboard components
import {
  AIRecommendations,
  AccountSummary,
  CheckInPrompt,
  CompletedSessions,
  CurrentGoals,
  CurrentPlan,
  DailyChecklist,
  DashboardCard,
  DashboardSection,
  KeyMetricsOverview,
  MetricDisplay,
  MetricItem,
  MetricsDashboard,
  NutritionSummary,
  PaymentInfo,
  PersonalRecords,
  ProgressChart,
  ProgressOverview,
  ProgressSummary,
  QuickActions,
  SessionsOverview,
  StatsOverview,
  TrainerNote,
  UpcomingSessionHighlight,
  UpcomingSessions,
  WeeklyCheckIn,
  WelcomeJourney,
  WelcomeJourneyModal,
  WorkoutCalendar
} from '../components/dashboard';

const Dashboard = () => {
  const { currentUser, userProfile } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showWelcomeJourney, setShowWelcomeJourney] = useState(true);
  // Keeping modal state for future use but not displaying it now
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [greeting, setGreeting] = useState('');
  
  // Handle closing or completing the welcome journey
  const handleWelcomeJourneyClose = () => {
    // Save in localStorage that the journey was closed
    localStorage.setItem('welcomeJourneyClosedAt', new Date().toISOString());
    setShowWelcomeJourney(false);
  };

  const handleWelcomeJourneyCompleted = () => {
    // Save in localStorage that the journey was completed
    localStorage.setItem('welcomeJourneyCompletedAt', new Date().toISOString());
    setShowWelcomeJourney(false);
  };
  
  // Track window size for responsive layouts
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Get responsive styles based on screen width
  const responsiveStyles = getResponsiveStyles(windowWidth);
  
  // Check if we're on mobile view
  const isMobile = windowWidth <= 768;
  
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
  
  const [dashboardData, setDashboardData] = useState({
    metrics: {
      weightChange: '-2',
      strengthGain: '+15%',
      bodyFatChange: '-1.5%',
      sessionsCompleted: 12,
      weeksActive: 8
    },
    personalRecords: [
      {
        title: "New Deadlift PR",
        value: "315 lbs",
        date: "Aug 12, 2024",
        type: "deadlift"
      },
      {
        title: "Fastest 5k Run",
        value: "24:32",
        date: "Aug 10, 2024",
        type: "run"
      },
      {
        title: "Workout Streak",
        value: "14 Days",
        date: "Ongoing",
        type: "streak"
      }
    ],
    nextPayment: {
      month: 'Aug',
      day: 28
    },
    currentPlan: {
      name: 'Hypertrophy Phase',
      description: 'Your focus for the next 4 weeks is building muscle mass.',
      duration: '12 Weeks',
      focus: 'Strength',
      frequency: '4/week',
      volume: 'High',
      currentWeek: 8,
      totalWeeks: 12
    },
    progressChart: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      weightData: [193, 200, 207, 214, 218, 220],
      bodyFatData: [18, 19, 21, 23, 25, 27]
    },
    upcomingSessions: [
      {
        id: 1,
        title: 'Full Body Strength',
        dateTime: '2024-08-15 at 09:00 AM'
      },
      {
        id: 2,
        title: 'Cardio & Core',
        dateTime: '2024-08-17 at 10:00 AM'
      },
      {
        id: 3,
        title: 'Upper Body Focus',
        dateTime: '2024-08-19 at 09:00 AM'
      }
    ],
    completedSessions: [
      { date: '2024-08-12', workout: 'Full Body Strength', duration: '60 min' },
      { date: '2024-08-10', workout: 'Lower Body Focus', duration: '55 min' },
      { date: '2024-08-08', workout: 'Active Recovery', duration: '30 min' }
    ],
    upcomingSession: {
      title: 'In-Person Strength Training',
      date: 'Tomorrow, August 15th at 9:00 AM',
      location: 'City Gym, 123 Fitness St.'
    },
    welcomeJourney: {
      step1: 'Schedule your 30-minute planning consultation',
      step2: 'Complete your consultation',
      step3: 'Receive your personalized fitness plan'
    },
    nutritionSummary: {
      caloriesConsumed: 2200,
      caloriesTarget: 2200,
      macros: {
        protein: 40,
        carbs: 35,
        fat: 25
      },
      waterIntake: {
        current: 64,
        target: 128
      }
    },
    dailyChecklist: [
      { task: "Complete today's workout", completed: false },
      { task: "Hit 8k-10k steps", completed: false },
      { task: "Follow nutrition plan", completed: false },
      { task: "Log your weight", completed: false },
      { task: "Schedule weekly check-in", completed: false }
    ],
    aiRecommendations: [
      {
        title: 'Increase Cardio',
        description: 'Aim for 3 sessions of 30 minutes per week to improve endurance.'
      },
      {
        title: 'Focus on Compound Lifts',
        description: 'Prioritize squats, deadlifts, and bench presses to build overall strength.'
      }
    ],
    currentGoals: [
      {
        title: 'Increase Cardio Endurance',
        description: 'Complete 3 sessions of 30+ minutes of cardio each week.'
      },
      {
        title: 'Build Full-Body Strength',
        description: 'Focus on progressive overload in compound lifts like squats and deadlifts.'
      },
      {
        title: 'Improve Nutritional Habits',
        description: 'Consistently hit daily protein and water intake targets.'
      }
    ]
  });

  // Check localStorage to determine if welcome journey should be shown
  useEffect(() => {
    // Only show the welcome journey on first visit or if not recently shown
    const journeyClosedAt = localStorage.getItem('welcomeJourneyClosedAt');
    const journeyCompletedAt = localStorage.getItem('welcomeJourneyCompletedAt');
    
    // If the journey was closed or completed, hide it
    if (journeyClosedAt || journeyCompletedAt) {
      // Don't show if completed or closed within the last 30 days
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      
      const lastClosedDate = journeyClosedAt ? new Date(journeyClosedAt) : null;
      const lastCompletedDate = journeyCompletedAt ? new Date(journeyCompletedAt) : null;
      
      // If both dates exist, take the most recent one
      let lastInteractionDate = null;
      if (lastClosedDate && lastCompletedDate) {
        lastInteractionDate = lastClosedDate > lastCompletedDate ? lastClosedDate : lastCompletedDate;
      } else {
        lastInteractionDate = lastClosedDate || lastCompletedDate;
      }
      
      // Only hide if the last interaction was less than 30 days ago
      if (lastInteractionDate && lastInteractionDate > thirtyDaysAgo) {
        setShowWelcomeJourney(false);
      }
    }
  }, []);
  
  useEffect(() => {
    // In a real implementation, we would fetch data from Firestore here
    // For now, we're using the mock data defined above
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [currentUser?.uid]);

  // Responsive styles - simplified for minimalist design
  const pageStyles = {
    padding: theme.spacing.lg,
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: theme.colors.subtleGreen,
    minHeight: '100vh',
  };
  
  // Add the missing styles that are referenced in the code
  const fullWidthSectionStyles = {
    gridColumn: '1 / -1',
    marginBottom: '24px'
  };
  
  const multiColumnSectionStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginBottom: '24px'
  };

  const columnSpan2Styles = {
    gridColumn: 'span 2'
  };

  const columnSpan1Styles = {
    gridColumn: 'span 1'
  };

  const metricsGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '20px'
  };

  const rowsGridStyles = {
    display: 'grid',
    gridTemplateRows: 'minmax(120px, auto) 1fr',
    gap: '24px',
    height: '100%'
  };

  // Loading state
  if (isLoading) {
    return <div>Loading dashboard data...</div>;
  }

  // Floating greeting styles - updated for minimalist design
  const greetingContainerStyles = {
    marginBottom: theme.spacing.xl
  };
  
  const mainGreetingStyles = {
    ...theme.typography.greeting,
    marginBottom: theme.spacing.xs
  };
  
  const nameHighlightStyles = {
    color: theme.colors.primary
  };
  
  const subGreetingStyles = {
    ...theme.typography.subGreeting
  };

  // Custom section styles for a more unified look
  const sectionStyleBase = {
    marginTop: '24px',
    marginBottom: '16px',
    background: 'none',
    padding: '0'
  };

  return (
    <div style={pageStyles}>
      {/* Welcome Journey Modal removed for now */}
      
      {/* Floating greeting */}
      <section style={greetingContainerStyles}>
        <h1 style={mainGreetingStyles}>
          {greeting}, <span style={nameHighlightStyles}>{userProfile?.name || 'Client'}</span>
        </h1>
        <p style={subGreetingStyles}>
          Ready to crush your goals today? Let's get started.
        </p>
      </section>
      
      {/* Side-by-side components between greeting and stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : showWelcomeJourney ? '1fr 1fr' : '1fr',
        gap: theme.spacing.md,
        marginBottom: theme.spacing.md
      }}>
        {/* Upcoming Session Highlight */}
        <div style={{ 
          height: '100%',
          // If welcome journey is not shown, upcoming session spans full width
          gridColumn: !showWelcomeJourney ? '1 / -1' : 'auto'
        }}>
          <UpcomingSessionHighlight session={dashboardData.upcomingSession} />
        </div>
        
        {/* Welcome Journey (conditionally rendered) */}
        {showWelcomeJourney && (
          <div>
            <WelcomeJourney 
              journey={dashboardData.welcomeJourney} 
              onAllCompleted={handleWelcomeJourneyCompleted} 
              onClose={handleWelcomeJourneyClose}
            />
          </div>
        )}
      </div>
      
      {/* Side-by-side metrics layout - with KeyMetricsOverview taking more space */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr',
        gap: theme.spacing.md,
        marginBottom: theme.spacing.lg
      }}>
        {/* Left column with KeyMetricsOverview and CurrentPlan stacked */}
        <div>
          {/* Key Metrics Overview at the top */}
          <KeyMetricsOverview
            metrics={[
              {
                label: 'Weight Change',
                value: '-2 lbs',
                trend: 'down',
                type: 'positive'
              },
              {
                label: 'Strength Gain',
                value: '+15%',
                trend: 'up',
                type: 'positive'
              },
              {
                label: 'Body Fat',
                value: '-1.5%',
                trend: 'down',
                type: 'positive'
              }
            ]}
          />
          
          {/* Current Plan - underneath Key Metrics Overview */}
          <CurrentPlan plan={dashboardData.currentPlan} />
          
          {/* Progress Overview - underneath Current Plan */}
          <ProgressOverview progressData={dashboardData.progressChart} />
          
          {/* Workout Calendar - underneath Progress Overview */}
          <WorkoutCalendar 
            upcomingSessions={dashboardData.upcomingSessions}
            completedSessions={dashboardData.completedSessions}
          />
          
          {/* Side-by-side PersonalRecords and NutritionSummary */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: theme.spacing.md,
            marginTop: theme.spacing.md
          }}>
            <PersonalRecords records={dashboardData.personalRecords} />
            <NutritionSummary nutrition={dashboardData.nutritionSummary} />
          </div>
        </div>
        
        {/* Account Summary and other components - right side */}
        <div>
          <AccountSummary
            metrics={[
              {
                value: dashboardData.metrics.sessionsCompleted,
                label: 'Sessions Completed',
                size: 'large'
              },
              {
                value: dashboardData.metrics.weeksActive,
                label: 'Weeks Active'
              },
              {
                value: '28',
                prefix: 'AUG',
                label: 'Next Payment',
                type: 'admin'
              }
            ]}
          />
          
          {/* Trainer Note - underneath Account Summary */}
          <TrainerNote 
            trainerName="Shreyas"
            initial="S"
            note="Amazing job on your last deadlift session, Alex! Your form is looking solid. Let's focus on adding a bit more weight next week. Keep up the fantastic work!"
          />
          
          {/* Weekly Check-in - underneath Trainer Note */}
          <WeeklyCheckIn 
            onSchedule={() => console.log('Schedule check-in clicked')}
          />
          
          {/* Daily Checklist - underneath Weekly Check-in */}
          <DailyChecklist 
            tasks={[
              "Complete today's workout",
              "Hit 8k-10k steps",
              "Follow nutrition plan",
              "Log your weight",
              "Schedule weekly check-in"
            ]}
          />
          
          {/* Current Goals - underneath Daily Checklist */}
          <CurrentGoals 
            goals={dashboardData.currentGoals}
          />
        </div>
      </div>
      
      {/* Hidden for minimalist design focus */}
    </div>
  );
};

export default Dashboard;
