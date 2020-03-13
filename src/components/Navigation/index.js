import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Navigation = () => (
  <nav styleName="navigation">
    <ul styleName="list">
      <li styleName="item">
        <Link to="about-the-project" styleName="link">
          About the project
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
