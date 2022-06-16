import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { loginUser } from "../../actions/auth";

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {

    history.push("/protected_route");
    setTimeout(() => {
      window.location.reload(true);
    }, 1400);
    dispatch(loginUser(data));
  };
    return (
      <form
      onSubmit={handleSubmit(onSubmit)}
        className='w-11/12 max-w-2xl mx-auto mt-8'
      >
        <h1 className='font-bold text-3xl'>Log In</h1>
        
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
            className="w-full border-2 focus:outline-none focus:ring-2 p-4 mb-4"
            {...register('password', { required: true })}
            
          />
        </fieldset>
        <input
          className='w-full text-center uppercase p-4 bg-blue-300 cursor-pointer mt-4'
          type='submit'
          value='Log In'
        />
      </form>
    );
  }

  export default Login;
