import styled from "styled-components";

export const StyleHeader = styled.header`
  justify-content: space-between !important;
  position: fixed;
  z-index: 999;
  background: ${({ theme }) => theme.colors.secondary};

  .btnMenu {
    display: none;
  }

  .signIn_signUp {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: end !important;
  }

  @media(max-width: 768px) { 
    justify-content: start;
    background-color: ${({ theme }) => theme.colors.secondary};
    
    .btnMenu {
      display: block;
      z-index: 999;
    }
  }

  @media(max-width: 868px) {
    h2 { display: none; }
  }

  .active {
    left: 0;
  }
`
