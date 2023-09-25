import styled, { css } from 'styled-components'

interface iInput {
  styleInput: string;
}

export const Input = styled.input<iInput>`
  background: transparent;
  border: none;
  font-size: 18px;
  padding: 1rem .5rem;
  display: flex;
  outline: none;
  border-radius: .5rem;

  ${({ styleInput, theme }) => {
    switch (styleInput) {
      case 'normal':
        return css`
          color: ${theme.colors.secondary};
        `
      case 'outline':
        return css`
          border: 1px solid ${theme.colors.primary};
        `
    }
	}}
`