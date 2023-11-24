import * as Yup from 'yup';

export const schemaSignUp = Yup.object().shape({
  name: Yup.string().required('Required field'),

  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Required field'),

  password: Yup.string()
    .required('Required field')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Use a strong password'
    ),

  acceptTerms: Yup.bool().oneOf([true], 'You need to accept the terms'),
});
