import styled from 'styled-components';

export const SectionWrapper = styled.div`
  border: 1px solid blue;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PortfolioContents = styled.div`
  // line-height: 40px;

  h1 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.rem;
    color: #999;
  }
  button {
    margin: 20px 0;
    border-radius: 5px;
  }
`;

export const PortfolioImage = styled.img`
  border-radius: 100%;
  width: 500px;
  height: 500px;
`;
