import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@edx/paragon';

import './index.scss';

const AlertMessage = ({
  variant,
  heading,
  message,
  children,
}) => (
  <Alert variant={variant} className="error-container">
    <Alert.Heading>{heading}</Alert.Heading>
    {message && (
      <>
        <hr />
        <p className="mb-0">{message}</p>
      </>
    )}
    {children}
    <hr />
  </Alert>
);

AlertMessage.propTypes = {
  variant: PropTypes.oneOf(['danger', 'success', 'warning']),
  heading: PropTypes.string.isRequired,
  message: PropTypes.string,
  children: PropTypes.node,
};

AlertMessage.defaultProps = {
  variant: 'danger',
  message: null,
  children: null,
};

export default AlertMessage;
