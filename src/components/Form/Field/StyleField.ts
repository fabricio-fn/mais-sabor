import styled from 'styled-components'

export const StyleField = styled.label`
  display: flex;
  flex-direction: column;
  gap: .5rem !important;

  .invalid {
    color: ${({ theme }) => theme.colors.primary};
  }
`