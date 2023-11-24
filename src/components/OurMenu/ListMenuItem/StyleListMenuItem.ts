import styled from 'styled-components';

export const StyleListMenuItem = styled.li`
  height: auto;
  width: 380px;

  @media (max-width: 420px) {
    width: 100%;
  }

  .itemMenu {
    border-radius: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.additional_7};
    flex-direction: column;
    padding: 1rem;
    transition: 0.4s;
    gap: 2rem;
    position: relative;

    .imgCard {
      height: 150px;
      width: 100%;
      border-radius: 1rem;
      background: ${({ theme }) => theme.colors.additional_4};

      img {
        top: 0;
        margin-top: 10px;
        border-radius: 50%;
        position: absolute;

        @media (max-width: 420px) {
          position: initial;
        }
      }
    }

    .footerCard,
    .headerCard {
      gap: 1rem;
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
`;
