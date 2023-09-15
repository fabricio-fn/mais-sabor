import { css, styled } from "styled-components";

interface iBadge {
  badgeStyle: "transparent" | "yellow" | "green" | "pinkLight"
}

export const StyleBadge = styled.span<iBadge>`
  border-radius: .5rem;
  border: none;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  
  ${({ badgeStyle, theme }) => {
    switch (badgeStyle) {
      case "transparent":
        return css`
          background: transparent;
          color: ${theme.colors.primary} !important;
          padding: 0 !important;
        `
      case "yellow":
        return css`
          background: ${theme.colors.additional_2} !important;
          padding: .5rem !important;
        `
      case "green":
        return css`
          background: ${theme.colors.additional_6} !important;
          padding: .4rem 1.2rem !important;
        `
      case "pinkLight":
        return css`
          display: flex;
          gap: .5rem;
          color: ${theme.colors.primary};
          background: ${theme.colors.additional_4} !important;
          font-size: 20px !important ;
          padding: .75rem !important;
        `
    }
  }}
`