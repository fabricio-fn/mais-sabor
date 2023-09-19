import styled from "styled-components";

export const StyleFooter = styled.footer`
  justify-content: space-between !important;
  background: ${({ theme }) => theme.colors.primary};
  flex-wrap: wrap;
  flex-direction: row;
  gap: 2rem;

  div {
    gap: 2rem;
  }

  @media(max-width: 486px) {
    justify-content: center !important;
  }
`