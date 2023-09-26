import styled from "styled-components";

export const StyleNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media(max-width: 768px) {
    position: absolute;
    left: -100%;
    padding: 2rem 5%;
    margin-top: 310px;
    align-items: start;
    flex-direction: column;
    width: auto;
    border-radius: .5rem;
    transition: .4s;
    background: ${({ theme }) => theme.colors.additional_8};
  }
`