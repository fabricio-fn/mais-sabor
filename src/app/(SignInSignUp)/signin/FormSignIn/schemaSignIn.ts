import * as Yup from 'yup';

export const schemaSignIn = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Required field'),

  password: Yup.string()
    .required('Required field')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Use a strong password'
    ),

  rememberMe: Yup.boolean().optional(),
});
