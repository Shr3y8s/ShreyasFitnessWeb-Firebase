import React from 'react';
import { theme } from '../../styles/theme';

const MetricItem = ({ label, value }) => {
  const metricItemStyles = {
    textAlign: 'center',
    padding: '16px 12px',
    borderRadius: theme.borderRadius.medium,
    backgroundColor: theme.colors.lightGray,
    minHeight: '90px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

  const metricValueStyles = {
    fontSize: '24px',
    fontWeight: '700',
    color: theme.colors.primary,
    marginBottom: '6px',
    lineHeight: '1.1'
  };

  const metricLabelStyles = {
    fontSize: '14px',
    fontWeight: '500',
    color: theme.colors.darkGray
  };

  return (
    <div style={metricItemStyles}>
      <div style={metricValueStyles}>{value}</div>
      <div style={metricLabelStyles}>{label}</div>
    </div>
  );
};

export default MetricItem;
