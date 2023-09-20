import { Formik } from "formik"
import { StyleFormHome } from "./StyleFormHome"
import { StyleButton } from "../../Button/StyleButton"
import Field from "../Field/Field"
import { Schema } from "../schema"

export default function FormHome() {
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
				<StyleFormHome>
					<Field styleInput="outline" name="email" type="email" label="Email" placeholder="Your email endress" />
					<StyleButton className="button" buttonStyle="solid" buttonSize="lg">Enviar</StyleButton>
				</StyleFormHome>
			)}
		</Formik>
	)
}