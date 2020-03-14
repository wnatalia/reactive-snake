import React from 'react';
import shortid from 'shortid';
import './styles.scss';

const technologies = [
  'React 16.12 (and React DOM)',
  'React Redux',
  'React Saga',
  'React Router',
  'Webpack',
  'CSS Modules',
  'React Transition Group',
  'Sass (SCSS)',
  'Eslint'
];

export const About = () => (
  <div styleName="about">
    <div styleName="container">
      <h2 styleName="heading">About the project</h2>
      <p>
        This is a simple game I created to practice React Hooks and Redux Saga.
      </p>
      <h3 styleName="title">Major technologies used in this project:</h3>
      <ul styleName="list">
        {technologies.map(item => (
          <li key={shortid.generate()} styleName="item">
            {item}
          </li>
        ))}
      </ul>
      <h3 styleName="title">Link to the repository:</h3>
      <a
        href="https://github.com/wnatalia/react-snake-game.git"
        target="_blank"
        rel="noopener noreferrer"
        styleName="link"
      >
        React Snake Game
      </a>
    </div>
  </div>
);
