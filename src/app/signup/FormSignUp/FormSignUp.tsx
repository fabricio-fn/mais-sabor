import { Form, Formik } from 'formik';
import Field from "@/components/Form/Field/Field"
import { StyleButton } from "@/components/Button/StyleButton"
import { StyleLink } from "@/components/Link/StyleLink"
import { FlexBoxContainer } from "@/components/FlexBoxContainer/FlexBoxContainer"
import { StyleText } from "@/components/Text/StyleText"
import { schemaSignUp } from './schemaSignUp';
import { StyleForm } from '@/app/signin/FormSignIn/StyleForm';

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
        console.log(values)
      }}
    >

      {() => (
        <StyleForm>
          <Form>
            <Field styleInput="outline" name="name" type="text" label="Name" placeholder="Your name" />
            <Field styleInput="outline" name="email" type="email" label="Email" placeholder="Your email address" />
            <Field styleInput="outline" name="password" type="password" label="Password" placeholder="Password" />

            <StyleButton type="submit" className="button" buttonStyle="solid" buttonSize="lg">
              Sign Up
            </StyleButton>

            <FlexBoxContainer className="checkbox">
              <StyleLink href="" linkStyle="underline">
                I have read and accept the terms
              </StyleLink>

              <Field styleInput="outline" name="acceptTerms" type="checkbox" label="" />
            </FlexBoxContainer>
          </Form>

          <FlexBoxContainer className="signUpOrsignIn">
            <StyleText tag="p" color="dark" fontSize="xs">
              Don't have an account?
              <StyleLink href="/signin" linkStyle="underline">
                Sign In Now
              </StyleLink>
            </StyleText>
          </FlexBoxContainer>
        </StyleForm>
      )}
    </Formik>
  )
}
