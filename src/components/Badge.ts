import { css, styled } from 'styled-components';

interface iBadge {
  variant: 'transparent' | 'yellow' | 'green' | 'pinkLight';
}

export const Badge = styled.span<iBadge>`
  border-radius: 0.5rem;
  border: none;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};

  ${({ variant, theme }) => {
    switch (variant) {
      case 'transparent':
        return css`
          background: transparent;
          color: ${theme.colors.primary} !important;
          padding: 0 !important;
        `;
      case 'yellow':
        return css`
          background: ${theme.colors.additional_2} !important;
          padding: 0.5rem !important;
        `;
      case 'green':
        return css`
          background: ${theme.colors.additional_6} !important;
          padding: 0.4rem 1.2rem !important;
        `;
      case 'pinkLight':
        return css`
          display: flex;
          gap: 0.5rem;
          color: ${theme.colors.primary};
          background: ${theme.colors.additional_4} !important;
          font-size: 20px !important ;
          padding: 0.75rem !important;
        `;
    }
  }}
`;
