import * as Yup from 'yup';

export const schemaNewsletter = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Required field'),
});
