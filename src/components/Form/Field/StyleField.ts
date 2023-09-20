import styled from 'styled-components'

export const StyleField = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem !important;
  width: 100%;

  .invalid {
    color: ${({ theme }) => theme.colors.primary};
  }
`