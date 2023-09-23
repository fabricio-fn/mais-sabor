import Link from "next/link";
import { css, styled } from "styled-components";

interface iButtonLink {
	buttonLinkStyle: "solid" | "outline" | "outlineLight" | "solidYellow" | "solidLight"
	buttonLinkSize: "lg" | "md" | "sm"
}

export const StyleButtonLink = styled(Link)<iButtonLink>`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	border-radius: .5rem;
	border: none;
	font-size: 18px;
	cursor: pointer;
	text-decoration: none;

	${({ buttonLinkSize }) => {
	switch (buttonLinkSize) {
		case "lg":
			return css`
				padding: 1rem 2rem;
			`
		case "md":
			return css`
				padding: .5rem 1.5rem;
			`
		case "sm":
			return css`
				padding: .5rem;
			`
	}}}
		
	${({ buttonLinkStyle, theme }) => {
	switch (buttonLinkStyle) {
		case "solid":
			return css`
				background: ${theme.colors.primary};
				color: ${theme.colors.secondary};
			`
		case "outlineLight":
			return css`
				border: 1px solid ${theme.colors.additional_5};
				color: ${theme.colors.additional_3};
				background: transparent;

				&:hover {
					background: ${theme.colors.additional_5};
					color: ${theme.colors.secondary};
				}
			`
		case "outline":
			return css`
				border: 1px solid ${theme.colors.primary};
				background: transparent;
				color: ${theme.colors.primary};
							
				&:hover {
						background: ${theme.colors.primary};
						color: ${theme.colors.secondary};
				}
			`
		case "solidYellow":
			return css`
				background: ${theme.colors.additional_2};
				color: ${theme.colors.secondary};
			`
		case "solidLight":
			return css`
				background: ${theme.colors.secondary};
				color: ${theme.colors.primary};
			`
	}}}
`