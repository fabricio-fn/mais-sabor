import styled from "styled-components";

export const StyleOurMenu = styled.section`
  gap: 4rem;
  min-height: 100vh;
  flex-direction: column;

  .content {
    flex-direction: column;
    gap: 1.5rem;

    .title {
      text-align: center;
      flex-direction: column;
    }

    .description {
      text-align: center;    

      p {
        width: 420px; 

        @media(max-width: 420px) {
          width: 100%;
        }
      }
    }
  }
`
