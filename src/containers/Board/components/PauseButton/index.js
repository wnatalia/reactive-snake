import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const PauseIcon = () => (
  /* Generated by IcoMoon.io */
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="768"
    height="768"
    viewBox="0 0 768 768"
    styleName="icon"
  >
    <title />
    <g id="icomoon-ignore" />
    <path d="M736 384c0-97.184-39.424-185.248-103.104-248.896s-151.712-103.104-248.896-103.104-185.248 39.424-248.896 103.104-103.104 151.712-103.104 248.896 39.424 185.248 103.104 248.896 151.712 103.104 248.896 103.104 185.248-39.424 248.896-103.104 103.104-151.712 103.104-248.896zM672 384c0 79.552-32.192 151.488-84.352 203.648s-124.096 84.352-203.648 84.352-151.488-32.192-203.648-84.352-84.352-124.096-84.352-203.648 32.192-151.488 84.352-203.648 124.096-84.352 203.648-84.352 151.488 32.192 203.648 84.352 84.352 124.096 84.352 203.648zM352 480v-192c0-17.664-14.336-32-32-32s-32 14.336-32 32v192c0 17.664 14.336 32 32 32s32-14.336 32-32zM480 480v-192c0-17.664-14.336-32-32-32s-32 14.336-32 32v192c0 17.664 14.336 32 32 32s32-14.336 32-32z" />
  </svg>
);

const PlayIcon = () => (
  /* Generated by IcoMoon.io */
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="768"
    height="768"
    viewBox="0 0 768 768"
    styleName="icon"
  >
    <title />
    <g id="icomoon-ignore" />
    <path d="M736 384c0-97.184-39.424-185.248-103.104-248.896s-151.712-103.104-248.896-103.104-185.248 39.424-248.896 103.104-103.104 151.712-103.104 248.896 39.424 185.248 103.104 248.896 151.712 103.104 248.896 103.104 185.248-39.424 248.896-103.104 103.104-151.712 103.104-248.896zM672 384c0 79.552-32.192 151.488-84.352 203.648s-124.096 84.352-203.648 84.352-151.488-32.192-203.648-84.352-84.352-124.096-84.352-203.648 32.192-151.488 84.352-203.648 124.096-84.352 203.648-84.352 151.488 32.192 203.648 84.352 84.352 124.096 84.352 203.648zM337.76 229.376c-4.992-3.36-11.136-5.376-17.76-5.376-17.664 0-32 14.336-32 32v256c-0.032 6.016 1.696 12.256 5.376 17.76 9.792 14.72 29.664 18.688 44.384 8.864l192-128c3.296-2.176 6.4-5.184 8.864-8.864 9.792-14.72 5.824-34.56-8.864-44.384zM352 315.808l102.304 68.192-102.304 68.192z" />
  </svg>
);

const PauseButton = ({ isGamePaused, isGameOver, handleChange }) => {
  const handleButtonClick = () => {
    button.current.blur();
    isGamePaused ? handleChange('RESUME') : handleChange('PAUSE');
  };

  let button = useRef(null);

  return (
    <button
      styleName="pause-button"
      ref={button}
      onClick={event => handleButtonClick(event)}
      disabled={isGameOver}
    >
      {isGamePaused && (
        <>
          <span>Resume</span>
          <PlayIcon />
        </>
      )}
      {!isGamePaused && (
        <>
          <span>Pause</span>
          <PauseIcon />
        </>
      )}
    </button>
  );
};

PauseButton.propTypes = {
  isGamePaused: PropTypes.bool,
  isGameOver: PropTypes.bool,
  handleChange: PropTypes.func
};

export default PauseButton;
