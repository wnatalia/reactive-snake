import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import types from 'types/board';

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
      <h2>Select your board dimensions</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="dimensionX">X:</label>
        <input
          id="dimensionX"
          type="number"
          name="x"
          defaultValue={10}
          ref={register({ min: 5, max: 20, required: true })}
        />
        {errors.x && errors.x.type === 'max' && (
          <span>Number must smaller than 20</span>
        )}
        {errors.x && errors.x.type === 'min' && (
          <span>Number must greater than 5</span>
        )}
        {errors.x && errors.x.type === 'required' && (
          <span>This value is required</span>
        )}
        <label htmlFor="dimensionY">Y:</label>
        <input
          id="dimensionY"
          type="number"
          name="y"
          defaultValue={10}
          ref={register({ min: 5, max: 20, required: true })}
        />
        {errors.y && errors.y.type === 'max' && (
          <span>Number must smaller than 20</span>
        )}
        {errors.y && errors.y.type === 'min' && (
          <span>Number must greater than 5</span>
        )}
        {errors.y && errors.y.type === 'required' && (
          <span>This value is required</span>
        )}
        <input type="submit" />
      </form>
    </>
  );
};
