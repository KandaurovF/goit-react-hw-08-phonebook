import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/authReducer';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { schema, INITIAL_VALUES } from '../../constants/LoginConfig';
import css from './LoginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(loginUser(values));
    resetForm();
  };

  return (
    <div className={css.spaceBackground}>
      <div className={css.container}>
        <h1 className={css.form__heading}>Login to your account</h1>
        <Formik
          initialValues={INITIAL_VALUES}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          <Form className={css.form}>
            <label className={css.label} htmlFor="userEmail">
              <Field
                className={css.input}
                name="email"
                id="userEmail"
                type="text"
                autoComplete="off"
                placeholder=" "
              />
              <span>Email:</span>
              <ErrorMessage
                className={css.errorMessage}
                name="email"
                component="p"
              />
            </label>
            <label className={css.label} htmlFor="userPassword">
              <Field
                className={css.input}
                name="password"
                id="userPassword"
                type="password"
                placeholder=" "
                autoComplete="off"
              />
              <span>Password:</span>
              <ErrorMessage
                className={css.errorMessage}
                name="password"
                component="p"
              />
            </label>
            <button className={css.submitBtn} type="submit">
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
