import styled from "styled-components";

export const StylePizzaSpecialOffer = styled.section`
  background: ${({ theme }) => theme.colors.additional_4};
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 100vh;
  gap: 2rem;

  .img {
    width: 450px;
    height: 450px;
    position: relative;
    justify-content: end !important;
 

    .cardAssessment {
      background: ${({ theme }) => theme.colors.secondary};
      width: 280px;
      height: 90px;
      position: absolute;
      gap: 2rem;
      padding: .5rem;
      border-radius: 1rem;
      
      img {
        width: 60px !important;
        height: 60px !important;
        border-radius: 50%;
      }

      .assessment {
        align-items: start !important;
        flex-direction: column;
        gap: .5rem;

        .starIcon {
          gap: .2rem;
          color: ${({ theme }) => theme.colors.yellow};          
        }
      }
    }
  }

  .content {
    align-items: start !important;
    flex-direction: column;
    gap: 2rem;

    .title {
       align-items: start !important;
       flex-direction: column;
       gap: .5rem;
    }

    p {
      width: 400px;
    }
  }

  @media (max-width: 420px) {
    .content > p, .img > .cardAssessment { width: 100%; }
  }

  @media (max-width: 1295px) {
    justify-content: center !important;
  }
`
