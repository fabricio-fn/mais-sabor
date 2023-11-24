import { Formik } from 'formik';
import { StyleFormNewsletter } from './StyleFormNewsletter';
import { schemaNewsletter } from './schemaNewsletter';
import { Field, Button } from '@/components';

export default function FormNewsletter() {
  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={schemaNewsletter}
      onSubmit={(values) => {
        console.log('Dados', values);
      }}
    >
      {() => (
        <StyleFormNewsletter>
          <Field
            variant="outline"
            name="email"
            type="email"
            label="Email"
            placeholder="Your email address.."
          />
          <Button type="submit" className="button" variant="solid" size="lg">
            Subscribe
          </Button>
        </StyleFormNewsletter>
      )}
    </Formik>
  );
}
