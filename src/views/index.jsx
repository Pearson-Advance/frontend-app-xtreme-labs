import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, useLocation } from 'react-router-dom';

import { course } from 'constants';

import DashboardLaunchButton from 'shared/DashboardLaunchButton';

import './index.scss';

const App = () => {
  useEffect(() => {
    const sendHeight = () => {
      // Send height to the parent window
      const height = document.body.scrollHeight;
      const message = { type: 'iframeHeight', height };
      const originUrl = window.location.origin;
      window.parent.postMessage(message, originUrl);
    };

    const observer = new MutationObserver(() => {
      sendHeight();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, [useLocation()]);

  return (
    <Route
      exact
      path={`${course}`}
      render={(props) => (
        <DashboardLaunchButton
          {...props}
          courseId={props.match.params.courseId}
          title="Instructor Launch"
        />
      )}
    />
  );
};

App.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      courseId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default App;
