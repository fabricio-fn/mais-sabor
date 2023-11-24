import { Form, Formik } from 'formik';
import { StyleLink } from '@/components/Link/StyleLink';
import { schemaSignIn } from './schemaSignIn';
import { StyleForm } from './StyleForm';
import { Box, Field, StyleTypography, Button } from '@/components';

export default function FormSignIn() {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        rememberMe: false,
      }}
      validationSchema={schemaSignIn}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <StyleForm>
          <Form>
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
              Login
            </Button>

            <Box className="checkbox">
              <Field
                variant="outline"
                name="rememberMe"
                type="checkbox"
                label="Remember me"
              />
            </Box>
          </Form>

          <Box className="signUpOrsignIn">
            <StyleTypography tag="p" color="dark" size="xs">
              New here?
              <StyleLink href="/signup" variant="underline" target="_self">
                Sign Up Now
              </StyleLink>
            </StyleTypography>

            <StyleLink href="" variant="underline">
              Forgot your password?
            </StyleLink>
          </Box>
        </StyleForm>
      )}
    </Formik>
  );
}
