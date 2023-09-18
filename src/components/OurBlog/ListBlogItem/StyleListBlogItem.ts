import styled from "styled-components";

export const StyleListBlogItem = styled.li`
  .cardsPosts {
    transition: .4s;
    cursor: pointer;
    justify-content: space-between;
    border: 1px solid ${({ theme }) => theme.colors.additional_7};
    width: 380px;
    height: 400px;

    .img {
      width: 100%;
      
      img {
        width: 100%;
        height: 250px;
        object-fit: cover;
      }
    }

    .content {
      align-items: start !important;
      text-align: start;
      padding: 1rem;
      gap: 1rem;

      h2 {
        font-size: 25px;
        transition: .4s;
      }

      a {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }

    @media (max-width: 407px) {
      width: 100%;
      height: auto;
    }

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.secondary};
      box-shadow: 0px 7px 29px 0px ${({ theme }) => theme.colors.additional_7};

      & a { color: ${({ theme }) => theme.colors.primary}; }
      & h2 { color: ${({ theme }) => theme.colors.primary}; }
    }
  }
`