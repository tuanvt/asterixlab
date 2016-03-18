import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LandingPage from './LandingPage';

const App = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
