/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useHistory} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { signupUser } from "../../actions/auth";

const Signup = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    history.push("/protected_route")
    dispatch(signupUser(data));
  };
  
    return (
      <form
      onSubmit={ handleSubmit(onSubmit) }
        className='w-11/12 max-w-2xl mx-auto mt-8'
      >
        <h1 className='font-bold text-3xl mb-2'>Sign Up</h1>
       
        <fieldset>
          <label className='block uppercase mb-2' htmlFor='name'>
            Name:
          </label>
          <input
            type='text'
            name='name'
            id='name'
            className='w-full border-2 focus:outline-none focus:ring-2 p-4 mb-4'
            {...register('name', { required: true })}
           
          />
        </fieldset>
        <fieldset>
          <label className='block uppercase mb-2' htmlFor='email'>
            Email:
          </label>
          <input
            type='text'
            name='email'
            id='email'
            className='w-full border-2 focus:outline-none focus:ring-2 p-4 mb-4'
            {...register('email', { required: true })}
            
          />
        </fieldset>
        <fieldset>
          <label className='block uppercase mb-2' htmlFor='password'>
            Password:
          </label>
          <input
            type='password'
            name='password'
            id='password'
            className='w-full border-2 focus:outline-none focus:ring-2 p-4 mb-4'
            {...register('password', { required: true })}
           
          />
        </fieldset>
        <fieldset>
          <label className='block uppercase mb-2' htmlFor='password_confirmation'>
            password_confirmation:
          </label>
          <input
            type='password_confirmation'
            name='password_confirmation'
            id='password_confirmation'
            className='w-full border-2 focus:outline-none focus:ring-2 p-4 mb-4'
            {...register('name', { required: true })}
            
          />
        </fieldset>
        <input
          className='w-full text-center uppercase p-4 bg-blue-300 cursor-pointer mt-4'
          type='submit'
          value='Sign Up'
        />
      </form>
    );
};

export default Signup;