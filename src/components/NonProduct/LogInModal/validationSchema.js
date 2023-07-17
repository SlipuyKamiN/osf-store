import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('No email provided.')
    .matches(
      '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
      'Email can contain letters, digits and may contain "@" and "." example@mail.com'
    ),
  password: yup
    .string()
    .required('No password provided.')
    .min(6, 'Password is too short - should be 6 characters length at least.')
    .matches(
      '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$',
      'Password should be: At least 6 characters length, contain 1 numeric, 1 uppercase letter, 1 special character'
    ),
});
