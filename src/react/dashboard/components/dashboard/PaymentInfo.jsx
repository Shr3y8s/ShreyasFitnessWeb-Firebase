import React from 'react';
import { theme } from '../../styles/theme';

const PaymentInfo = ({ payment }) => {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  };
  
  const monthStyles = {
    fontSize: '16px',
    fontWeight: '500',
    color: theme.colors.darkGray,
    textTransform: 'uppercase'
  };
  
  const dayStyles = {
    fontSize: '48px',
    fontWeight: '700',
    color: theme.colors.primary,
    lineHeight: '1'
  };
  
  return (
    <div style={containerStyles}>
      <div style={monthStyles}>{payment.month}</div>
      <div style={dayStyles}>{payment.day}</div>
    </div>
  );
};

export default PaymentInfo;
