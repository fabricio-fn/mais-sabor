import { css, styled } from "styled-components"
import Text from "./Text"

export const StyleText = styled(Text)`
    ${({ fontSize }) => {
		switch (fontSize) {
			case "lg":
				return css`
          font-size: 80px;

					@media (max-width: 525px) {
          	font-size: 60px;
					}
        `
			case "md":
				return css`
          font-size: 60px;
        `
			case "sm":
				return css`
          font-size: 30px;
        `
			case "xs":
				return css`
          font-size: 16px;
        `
			case "xxs":
				return css`
          font-size: 12px;
        `
		}
	}}

    ${({ color, theme }) => {
		switch (color) {
			case "dark":
				return css`
					color: ${theme.colors.additional_1};
        `
			case "black":
				return css`
					color: ${theme.colors.additional_3};
        `
			case "light":
				return css`
					color: ${theme.colors.secondary};
        `
			case "gray":
				return css`
					color: ${theme.colors.additional_5};
        `
			case "grayLight":
				return css`
					color: ${theme.colors.additional_7};
        `
		}
	}}
`