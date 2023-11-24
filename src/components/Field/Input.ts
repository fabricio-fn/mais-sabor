import styled, { css } from 'styled-components';

interface iInput {
  variant: string;
}

export const Input = styled.input<iInput>`
  background: transparent;
  border: none;
  font-size: 18px;
  padding: 1rem 0.5rem;
  display: flex;
  outline: none;
  border-radius: 0.5rem;

  ${({ variant, theme }) => {
    switch (variant) {
      case 'normal':
        return css`
          color: ${theme.colors.secondary};
        `;
      case 'outline':
        return css`
          border: 1px solid ${theme.colors.primary};
        `;
    }
  }}
`;
