import React from 'react';
import './styles.scss';

const technologies = [
  { key: 0, value: 'React 16.12 (and React DOM)' },
  { key: 1, value: 'React Redux' },
  { key: 2, value: 'React Saga' },
  { key: 3, value: 'React Router' },
  { key: 4, value: 'Webpack' },
  { key: 5, value: 'CSS Modules' },
  { key: 6, value: 'React Transition Group' },
  { key: 7, value: 'Sass (SCSS)' },
  { key: 8, value: 'Eslint' },
  { key: 9, value: 'Jest' },
  { key: 10, value: 'Enzyme' }
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
          <li key={item.key} styleName="item">
            {item.value}
          </li>
        ))}
      </ul>
      <h3 styleName="title">Link to the repository:</h3>
      <a
        href="https://github.com/wnatalia/reactive-snake"
        target="_blank"
        rel="noopener noreferrer"
        styleName="link"
      >
        Reactive Snake
      </a>
    </div>
  </div>
);
