import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/authReducer';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { schema, INITIAL_VALUES } from '../../constants/RegisterConfig';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(registerUser(values));
    resetForm();
  };

  return (
    <div className={css.spaceBackground}>
      <div className={css.container}>
        <h1 className={css.form__heading}>Sign up for an account</h1>
        <p className={css.heading__descr}>
          Signing up for an account is free and easy. Fill out the form below to
          get started.
        </p>
        <Formik
          initialValues={INITIAL_VALUES}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <Form autoComplete="off">
            <label className={css.label} htmlFor="userName">
              <Field
                className={css.input}
                name="name"
                type="text"
                id="userName"
                placeholder=" "
                autoComplete="off"
              />
              <span className={css.span}>name:</span>
              <ErrorMessage
                className={css.errorMessage}
                name="name"
                component="p"
              />
            </label>
            <label className={css.label} htmlFor="userEmail">
              <Field
                className={css.input}
                name="email"
                id="userEmail"
                type="text"
                placeholder=" "
                autoComplete="off"
              />
              <span className={css.span}>Email:</span>
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
                type="password"
                id="userPassword"
                placeholder=" "
                autoComplete="off"
              />
              <span className={css.span}>Password:</span>
              <ErrorMessage
                className={css.errorMessage}
                name="password"
                component="p"
              />
            </label>
            <button className={css.submitBtn} type="submit">
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegisterPage;
