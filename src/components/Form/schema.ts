import * as Yup from 'yup'

export const Schema = Yup.object().shape({
	// name: Yup.string()
	// 	.min(3, 'Very short!')
	// 	.max(50, 'Very long!')
	// 	.required('Required field'),

	email: Yup.string()
		.email('Please enter a valid email address')
		.required('Required field'),
})