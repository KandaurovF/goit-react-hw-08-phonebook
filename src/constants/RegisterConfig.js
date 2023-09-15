import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string().required('Name is required!'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required!'),
  password: Yup.string()
    .min(7, 'Password must be at least 7 characters long')
    .required('Password is required!'),
});

export const INITIAL_VALUES = {
  name: '',
  email: '',
  password: '',
};
