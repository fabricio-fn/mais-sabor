import { Form, Formik } from 'formik';
import { schemaSignUp } from './schemaSignUp';
import { StyleForm } from '@/app/(SignInSignUp)/signin/FormSignIn/StyleForm';
import { Field, StyleTypography, Button, Box, StyleLink } from '@/components';

export default function FormSignIn() {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        acceptTerms: false,
      }}
      validationSchema={schemaSignUp}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <StyleForm>
          <Form>
            <Field
              variant="outline"
              name="name"
              type="text"
              label="Name"
              placeholder="Your name"
            />
            <Field
              variant="outline"
              name="email"
              type="email"
              label="Email"
              placeholder="Your email address"
            />
            <Field
              variant="outline"
              name="password"
              type="password"
              label="Password"
              placeholder="Password"
            />

            <Button type="submit" className="button" variant="solid" size="lg">
              Sign Up
            </Button>

            <Box className="checkbox">
              <StyleLink href="" variant="underline">
                I have read and accept the terms
              </StyleLink>

              <Field
                variant="outline"
                name="acceptTerms"
                type="checkbox"
                label=""
              />
            </Box>
          </Form>

          <Box className="signUpOrsignIn">
            <StyleTypography tag="p" color="dark" size="xs">
              Don&apos;t have an account?
              <StyleLink href="/signin" variant="underline" target="_self">
                Sign In Now
              </StyleLink>
            </StyleTypography>
          </Box>
        </StyleForm>
      )}
    </Formik>
  );
}
