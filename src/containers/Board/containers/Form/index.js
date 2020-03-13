import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import types from 'types/board';
import PropTypes from 'prop-types';
import './styles.scss';

const Error = ({ errors, value }) => (
  <>
    {errors[value] && errors[value].type === 'max' && (
      <span styleName="error">Number must smaller than 20</span>
    )}
    {errors[value] && errors[value].type === 'min' && (
      <span styleName="error">Number must greater than 5</span>
    )}
    {errors[value] && errors[value].type === 'required' && (
      <span styleName="error">This value is required</span>
    )}
  </>
);

Error.propTypes = {
  errors: PropTypes.object,
  value: PropTypes.string
};

export const Form = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = ({ x, y }) => {
    dispatch({
      type: types.SAVE_DIMENSIONS,
      dimensions: { x: parseInt(x), y: parseInt(y) }
    });
  };

  return (
    <>
      <h2>Select your board dimensions:</h2>
      <form onSubmit={handleSubmit(onSubmit)} styleName="form">
        <div styleName="wrapper">
          <label styleName="label" htmlFor="dimensionX">
            X:
          </label>
          <input
            id="dimensionX"
            type="number"
            name="x"
            styleName="input"
            defaultValue={20}
            ref={register({ min: 15, max: 30, required: true })}
          />
          <Error errors={errors} value="x" />
        </div>
        <div styleName="wrapper">
          <label styleName="label" htmlFor="dimensionY">
            Y:
          </label>
          <input
            id="dimensionY"
            type="number"
            name="y"
            styleName="input"
            defaultValue={20}
            ref={register({ min: 15, max: 30, required: true })}
          />
          <Error errors={errors} value="y" />
        </div>
        <input type="submit" className="button primary" />
      </form>
    </>
  );
};
