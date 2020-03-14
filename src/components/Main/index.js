import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ children }) => (
  <main>
    <div className="wrapper">{children}</div>
  </main>
);

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
