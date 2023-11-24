import styled from 'styled-components';

export const StyleHome = styled.section`
  justify-content: space-between !important;
  flex-wrap: wrap-reverse;
  min-height: 130vh;
  gap: 2rem;

  .content {
    flex-direction: column;
    gap: 2rem;
    width: 550px;

    span {
      width: 175px;
    }
  }

  .img {
    width: 400px;
    height: 450px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 4rem;
    align-items: end !important;

    img {
      border-radius: 4rem;
    }
  }

  @media (max-width: 420px) {
    .img,
    .img img {
      border-radius: 2rem;
      height: auto;
    }
  }

  @media (max-width: 1227px) {
    justify-content: center !important;
  }
`;
