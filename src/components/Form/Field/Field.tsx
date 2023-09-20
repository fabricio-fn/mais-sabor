import { useField } from 'formik'
import { Input } from './Input';
import { StyleField } from './StyleField';

interface iField {
	styleInput: "normal" | "outline";
	type: string;
	name: string;
	label: string;
	placeholder: string;
}

export default function Field({ styleInput, type, name, label, placeholder }: iField) {
	const [field, meta] = useField(name);

	return (
		<StyleField>
			<label>{label}</label>
			<Input styleInput={styleInput} {...field} type={type} placeholder={placeholder} />
			{meta.touched && meta.error ? (<span className={`${meta.touched && meta.error ? 'invalid' : ''}`}>{meta.error}</span>) : null}
		</StyleField>
	)
}