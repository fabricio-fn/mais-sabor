import styled from 'styled-components'

export const StyleFormSignIn = styled.section`
  gap: 4rem;
  flex-direction: column;

  @media (max-width: 768px) { width: 100%; }

  form {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    width: 400px;
    height: auto;

    @media (max-width: 768px) { width: 100%; }

    .checkbox {
      justify-content: start;
      
      label {
        flex-direction: row;
        accent-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  .signupnow {
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between !important;
    gap: 1rem;
  }
`