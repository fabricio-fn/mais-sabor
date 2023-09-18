import styled from "styled-components";

export const StyleOurBlog = styled.section`
  flex-direction: column;
  text-align: center;
  gap: 4rem;
  
  div {
    flex-direction: column;
  }

  .title {
    gap: 2rem;

    p {
      width: 390px;

      @media (max-width: 407px) {
        width: 100%;
      }
    }
  }

  .posts {
    text-align: start !important;
    gap: 1rem;
  }
`