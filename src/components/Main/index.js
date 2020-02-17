import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Main = ({ children }) => (
  <main styleName="main">
    <div className="wrapper">{children}</div>
  </main>
);

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
