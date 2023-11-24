import styled from 'styled-components';

export const StyleFooterLinks = styled.section`
  justify-content: space-between !important;
  background: ${({ theme }) => theme.colors.additional_8};
  flex-wrap: wrap;
  min-height: auto !important;
  width: 100%;
  padding: 4rem 10%;
  gap: 4rem;

  @media (max-width: 768px) {
    padding: 4rem 5%;
  }

  .logo {
    gap: 2rem;
    width: 300px;

    .links {
      gap: 1rem;
    }

    .linksSocials {
      flex-direction: row;

      @media (max-width: 327px) {
        width: 100%;
        flex-direction: column;

        a {
          width: 100%;
        }
      }
    }
  }

  .otherLinks {
    justify-content: space-between !important;
    flex-wrap: wrap;
    gap: 4rem;
    flex-direction: row;

    .logo {
      width: auto;
    }
  }

  div {
    align-items: start !important;
    flex-direction: column;
    gap: 2rem;
  }
`;
