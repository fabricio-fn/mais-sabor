import Link from "next/link";
import { css, styled } from "styled-components";

interface iLink {
    linkStyle: "normal" | "light" | "underline"
}

export const StyleLink = styled(Link)<iLink>`
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
        }
    }}
`