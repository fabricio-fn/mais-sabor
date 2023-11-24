import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem !important;

  .invalid {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
