import { Form, Formik } from 'formik';
import Field from "@/components/Form/Field/Field"
import { StyleButton } from "@/components/Button/StyleButton"
import { StyleLink } from "@/components/Link/StyleLink"
import { FlexBoxContainer } from "@/components/FlexBoxContainer/FlexBoxContainer"
import { StyleText } from "@/components/Text/StyleText"
import { schemaSignIn } from './schemaSignIn';
import { StyleForm } from './StyleForm';

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
        console.log(values)
      }}
    >

      {() => (
        <StyleForm>
          <Form>
            <Field styleInput="outline" name="email" type="email" label="Email" placeholder="Your email address" />
            <Field styleInput="outline" name="password" type="password" label="Password" placeholder="Password" />

            <StyleButton type="submit" className="button" buttonStyle="solid" buttonSize="lg">
              Login
            </StyleButton>

            <FlexBoxContainer className="checkbox">
              <Field styleInput="outline" name="rememberMe" type="checkbox" label="Remember me" />
            </FlexBoxContainer>
          </Form>

          <FlexBoxContainer className="signUpOrsignIn">
            <StyleText tag="p" color="dark" fontSize="xs">
              New here?
              <StyleLink href="/signup" linkStyle="underline" target="_self">
                Sign Up Now
              </StyleLink>
            </StyleText>

            <StyleLink href="" linkStyle="underline">Forgot your password?</StyleLink>
          </FlexBoxContainer>
        </StyleForm>
      )}
    </Formik>
  )
}