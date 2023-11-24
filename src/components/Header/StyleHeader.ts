import styled from 'styled-components';

export const StyleHeader = styled.header`
  justify-content: space-between !important;
  position: fixed;
  z-index: 999;
  background: ${({ theme }) => theme.colors.secondary};

  .btnMenu {
    display: none;
  }

  .buttons {
    gap: 1rem;
  }

  .profilePicture {
    z-index: 999;
    width: 60px;
    height: 60px;

    img {
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.colors.primary};

      &:hover {
        opacity: 0.5;
      }
    }
  }

  @media (max-width: 768px) {
    justify-content: start;
    background-color: ${({ theme }) => theme.colors.secondary};

    .btnMenu {
      display: block;
    }
  }

  @media (max-width: 968px) {
    h2 {
      display: none;
    }

    .buttons > a {
      padding: 0.5rem !important;
    }
  }

  .active {
    left: 5%;
  }
`;
