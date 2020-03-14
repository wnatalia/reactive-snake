import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';
import Navigation from 'components/Navigation';

const Header = ({ location }) => {
  return (
    <header styleName="header">
      <div className="wrapper" styleName="inner">
        <h1 styleName="title">
          {location.pathname !== '/' && (
            <Link to="/" styleName="link">
              Reactive Snake
            </Link>
          )}
          {location.pathname === '/' && 'React Snake'}
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
