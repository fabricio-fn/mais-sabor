import { css, styled } from 'styled-components';

interface iButton {
  variant: 'solid' | 'outline' | 'outlineLight' | 'solidYellow' | 'solidLight';
  size: 'lg' | 'md' | 'sm';
}

export const Button = styled.button<iButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 18px;
  transition: 0.4s;
  font-weight: 700;
  cursor: pointer;

  ${({ size }) => {
    switch (size) {
      case 'lg':
        return css`
          padding: 1rem 2rem;
        `;
      case 'md':
        return css`
          padding: 0.5rem 1.5rem;
        `;
      case 'sm':
        return css`
          padding: 0.5rem;
        `;
    }
  }}

  ${({ variant, theme }) => {
    switch (variant) {
      case 'solid':
        return css`
          background: ${theme.colors.primary};
          color: ${theme.colors.secondary};
        `;
      case 'outlineLight':
        return css`
          border: 1px solid ${theme.colors.additional_5};
          color: ${theme.colors.additional_3};
          background: transparent;

          &:hover {
            background: ${theme.colors.additional_5};
            color: ${theme.colors.secondary};
          }
        `;
      case 'outline':
        return css`
          border: 1px solid ${theme.colors.primary};
          background: transparent;
          color: ${theme.colors.primary};

          &:hover {
            background: ${theme.colors.primary};
            color: ${theme.colors.secondary};
          }
        `;
      case 'solidYellow':
        return css`
          background: ${theme.colors.additional_2};
          color: ${theme.colors.secondary};
        `;
      case 'solidLight':
        return css`
          background: ${theme.colors.secondary};
          color: ${theme.colors.primary};
        `;
    }
  }}
`;
