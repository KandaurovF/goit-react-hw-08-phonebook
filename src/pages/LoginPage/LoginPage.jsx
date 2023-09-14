import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/authReducer';
import css from './LoginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };

    dispatch(loginUser(formData));
  };

  return (
    <div className={css.spaceBackground}>
      <div className={css.container}>
        <h1 className={css.form__heading}>Login to your account</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="email"
              name="userEmail"
              placeholder=" "
              autoComplete="off"
              required
            />
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
