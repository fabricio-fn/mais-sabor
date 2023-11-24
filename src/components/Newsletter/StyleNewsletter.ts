import styled from 'styled-components';

export const StyleNewsletter = styled.section`
  background: ${({ theme }) => theme.colors.additional_4};
  justify-content: space-between !important;
  align-items: start !important;
  min-height: auto !important;
  flex-wrap: wrap;
  padding: 4rem 10%;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 4rem 5%;
  }

  @media (max-width: 1039px) {
    justify-content: center !important;
  }

  .content {
    align-items: start !important;
    flex-direction: column;
    width: 400px;
    gap: 2rem;

    @media (max-width: 400px) {
      width: 100%;
    }
  }
`;
