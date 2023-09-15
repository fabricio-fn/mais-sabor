import styled from "styled-components";

export const StyleNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media(max-width: 768px) {
    position: absolute;
    left: -100%;
    padding: 2rem 5%;
    margin-top: 280px;
    display: flex;
    align-items: start;
    flex-direction: column;
    width: 100%;
    transition: .4s;
    background-color: ${({theme}) => theme.colors.secondary};
  }
`