import styled from "styled-components";

export const StyleListMenuItem = styled.li`
  .itemMenu {
    border-radius: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.additional_7};
    width: 380px;
    height: 400px;
    flex-direction: column;
    padding: 1rem;
    transition: .4s;
    gap: 1rem;
    position: relative;

    .imgCard {
      height: 150px;
      width: 100%;
      border-radius: 1rem;
      background: ${({ theme }) => theme.colors.additional_4};

      img {
        top: 0;
        border-radius: 50%;
        position: absolute;
      }
    }

    .footerCard, .headerCard {
      width: 100%;
      align-items: start !important;
      justify-content: space-between !important;

      .content {
        align-items: start !important;
        flex-direction: column;
        gap: 1rem;
      }

    }

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.secondary};
      box-shadow: 0px 7px 29px 0px ${({ theme }) => theme.colors.additional_7};
    }
  }
  
  @media(max-width: 420px) {
    .itemMenu { 
      width: 100%;

      .imgCard > img { position: initial; }
    }
  }
`
