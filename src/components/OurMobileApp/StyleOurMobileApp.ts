import styled from 'styled-components';

export const StyleOurMobileApp = styled.section`
  justify-content: space-between !important;
  flex-wrap: wrap;
  gap: 2rem;

  div {
    flex-direction: column;
    align-items: start !important;
  }

  .img {
    width: 300px;
  }

  .content {
    width: 430px;
    gap: 2em;

    .buttons {
      flex-direction: row;
      gap: 1rem;
    }

    @media (max-width: 469px) {
      width: 100%;

      .buttons,
      .buttons > button {
        width: 100%;
      }

      .buttons {
        flex-direction: column;
      }
    }
  }

  @media (max-width: 952px) {
    justify-content: center !important;
  }
`;
