// import styled from 'styled-components';
import tw from 'twin.macro';
// import mainwebimg from '../../assets/main-web.png';

// export const StyledBackground = styled.div`
//   ${tw`w-full`}
//   min-height: 100vh;
//   background-image: url('${mainwebimg}');
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
// `;

export const WebItemsContainer = tw.div`
  flex 
  flex-wrap 
  justify-center
  mt-10
  md:(flex-row)
  sm:(flex-col)
  bg-contain
  bg-no-repeat
  bg-center
`;
