import Link from "next/link";
import { css, styled } from "styled-components";

interface iLink {
	linkStyle: "normal" | "light" | "underline" | "dark"
}

export const StyleLink = styled(Link) <iLink>`
	transition: .4s;

	${({ linkStyle }) => {
	switch (linkStyle) {
		case "normal":
			return css`
				color: ${({ theme }) => theme.colors.additional_5};
				text-decoration: none;

				&:hover {
					color: ${({ theme }) => theme.colors.primary};
				}
			`
		case "light":
			return css`
				color: ${({ theme }) => theme.colors.secondary};
				text-decoration: none;
				font-weight: 400 !important;

				&:hover {
					text-decoration: underline;
				}
			`
		case "underline":
			return css`
				color: ${({ theme }) => theme.colors.primary};
			`
		case "dark":
			return css`
				color: ${({ theme }) => theme.colors.additional_1};
				text-decoration: none;

				&:hover {
					color: ${({ theme }) => theme.colors.primary};
				}
			`
	}}}
`