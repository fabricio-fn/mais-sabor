import { Formik } from "formik"
import { StyleFormNewsletter } from "./StyleFormNewsletter"
import { StyleButton } from "../../Button/StyleButton"
import Field from "../../Form/Field/Field"
import { Schema } from "../../Form/schema"

export default function FormNewsletter() {
	return (
		<Formik
			initialValues={{
				email: ''
			}}

			validationSchema={Schema}
			onSubmit={(values) => {
				console.log("Dados", values)
			}}
		>

			{() => (
				<StyleFormNewsletter>
					<Field styleInput="outline" name="email" type="email" label="Email" placeholder="Your email address.." />
					<StyleButton className="button" buttonStyle="solid" buttonSize="lg">Subscribe</StyleButton>
				</StyleFormNewsletter>
			)}
		</Formik>
	)
}