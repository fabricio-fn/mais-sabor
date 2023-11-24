import Link from 'next/link';
import { css, styled } from 'styled-components';

interface iLink {
  variant: 'normal' | 'light' | 'underline' | 'dark' | 'gray' | 'standard';
}

export const StyleLink = styled(Link)<iLink>`
  transition: 0.4s;
  text-decoration: none;

  ${({ variant, theme }) => {
    switch (variant) {
      case 'normal':
        return css`
          color: ${theme.colors.additional_5};
          text-decoration: none;

          &:hover {
            color: ${theme.colors.primary};
          }
        `;
      case 'light':
        return css`
          color: ${theme.colors.secondary};
          font-size: 12px;
          font-weight: initial !important;

          &:hover {
            text-decoration: underline;
          }
        `;
      case 'underline':
        return css`
          color: ${theme.colors.primary};
          text-decoration: underline;
        `;
      case 'dark':
        return css`
          color: ${theme.colors.additional_1};

          &:hover {
            color: ${theme.colors.primary};
          }
        `;
      case 'gray':
        return css`
          color: ${theme.colors.additional_7};
          font-weight: initial !important;

          &:hover {
            text-decoration: underline;
          }
        `;
      case 'standard':
        return css``;
    }
  }}
`;
