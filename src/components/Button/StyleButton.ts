import { css, styled } from "styled-components";

interface iButton {
    buttonStyle: "solid" | "outline" | "outlineLight" | "solidYellow"
    buttonSize: "lg" | "md" | "sm"
}

export const StyleButton = styled.button<iButton>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border-radius: .5rem;
    border: none;
    font-size: 18px;
    transition: .4s;
    font-weight: 700;
    cursor: pointer;

    ${({ buttonSize }) => {
        switch (buttonSize) {
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
        }
    }}

    ${({ buttonStyle, theme }) => {
        switch (buttonStyle) {
            case "solid":
                return css`
                    background: ${theme.colors.primary};
                    color: ${theme.colors.secondary};
                `
            case "outlineLight":
                return css`
                    border: 1px solid ${theme.colors.additional_5};
                    color: ${theme.colors.aditional_3};
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
        }
    }}
`