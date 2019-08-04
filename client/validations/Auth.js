import * as Yup from 'yup';

export const RegisterValidator = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Email is required'),
  firstname: Yup.string().required('First name is required'),
  lastname: Yup.string().required('Last name is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be greater than 8 characters'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required')
});

export const SignInValidator = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be greater than 8 characters')
});
