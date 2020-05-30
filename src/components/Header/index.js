import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';
import Navigation from 'components/Navigation';

const Header = ({ location }) => {
  return (
    <header styleName="header" data-test="component-header">
      <div className="wrapper" styleName="inner">
        <h1 styleName="title">
          {location && location.pathname !== '/' && (
            <Link to="/" styleName="link" data-test="link">
              Reactive Snake
            </Link>
          )}
          {location && location.pathname === '/' && 'Reactive Snake'}
        </h1>
        <Navigation />
      </div>
    </header>
  );
};

Header.propTypes = {
  location: PropTypes.object
};

export default Header;
