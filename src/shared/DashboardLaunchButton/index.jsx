import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';
import { logError } from '@edx/frontend-platform/logging';
import { Button } from 'react-paragon-topaz';

import AlertMessage from 'shared/AlertMessage';
import { xtremeLabsUrl, defaultErrorMessage } from 'constants';
import { eventManager } from 'helpers';

import './index.scss';

const COURSE_TAB_URL = `${xtremeLabsUrl}/course-tab/api/v1`;

const DashboardLaunchButton = ({ courseId, title }) => {
  const [errorMessage, setErrorMessage] = useState(null);

  /**
   * Handles button click event to open a URL
   */
  const buttonLaunch = async () => {
    setErrorMessage(null);
    try {
      const response = await getAuthenticatedHttpClient().post(`${COURSE_TAB_URL}/instructor-dashboard-launch/`, {
        class_id: courseId,
      });
      const {
        redirect_to: redirectTo,
        user_email: userEmail,
        message,
      } = response.data;

      if (redirectTo && !message) {
        window.open(redirectTo, '_blank', 'noopener,noreferrer');
      } else {
        setErrorMessage({
          courseId,
          message,
          userEmail,
          redirectTo,
        });
      }
    } catch (error) {
      logError('Error fetching URL:', error);
      setErrorMessage({
        courseId,
        message: defaultErrorMessage,
      });
    }
  };

  const openXtremeLabsDashboard = eventManager(buttonLaunch);

  return (
    <div className="dashboard-launch-container">
      <div className="main-header">
        <h2>{title}</h2>
        <Button
          className="instructor-dashboard-button"
          variant="outline-primary"
          onClick={openXtremeLabsDashboard}
        >
          <i className="fa-solid fa-arrow-up-right-from-square" />
          &nbsp; Go To Instructor Dashboard
        </Button>
      </div>
      {errorMessage && (
        <div className="error-container">
          <AlertMessage
            heading={(
              <span>
                You are not currently registered with Xtreme Labs. Please{' '}
                <a
                  href={errorMessage.redirectTo || '#'}
                  target={errorMessage.redirectTo ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                >
                  login here
                </a>{' '}
                to register with {errorMessage.userEmail || 'your email'}.
                After registering please return to this page and refresh.
              </span>
            )}
          >
            <ul>
              <li>
                <b>Course id: </b>
                {errorMessage.courseId}
              </li>
              <li>
                <b>Error message: </b>
                {errorMessage.message}
              </li>
            </ul>
            <hr />
            <p className="mb-0">
              Please retry and/or contact our support team for assistance in resolving this issue.
            </p>
          </AlertMessage>
        </div>
      )}
    </div>
  );
};

DashboardLaunchButton.propTypes = {
  courseId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default DashboardLaunchButton;
