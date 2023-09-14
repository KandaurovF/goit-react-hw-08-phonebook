import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/authReducer';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const name = event.currentTarget.elements.userName.value;
    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    };

    dispatch(registerUser(formData));
  };

  return (
    <div className={css.spaceBackground}>
      <div className={css.container}>
        <h1 className={css.form__heading}>Sign up for an account</h1>
        <p className={css.heading__descr}>
          Signing up for an account is free and easy. Fill out the form below to
          get started.
        </p>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>
            <input type="text" name="userName" placeholder=" " required />
            <span>Username:</span>
          </label>
          <label>
            <input type="email" name="userEmail" placeholder=" " required />
            <span>Email:</span>
          </label>
          <label>
            <input
              type="password"
              name="userPassword"
              placeholder=" "
              minLength={7}
              required
            />
            <span>Password:</span>
          </label>
          <button className={css.submitBtn} type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
