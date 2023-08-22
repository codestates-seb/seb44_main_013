import styled from 'styled-components';

export const SectionWrapper = styled.div`
  // border: 1px solid blue;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 100px 0;
`;


export const CommunityContents = styled.div`
  
  h1 {
    font-size: 3.5rem;
    font-family: 'Do Hyeon';
    font-weight: 500;
  }
  p {
    font-size: 1.5rem;
    color: #999;
  }
  >div {
    text-align: center;
    margin: 50px 0 0 0 ;

    button {
      padding: 20px;
      border-radius: 5px;
      font-size: 1.3rem;
    }
  }
`;

export const CommunityImage = styled.img`
  border-radius: 100%;
  width: 500px;
  height: 500px;
`;
