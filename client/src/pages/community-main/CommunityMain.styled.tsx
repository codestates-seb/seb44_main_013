import tw from 'twin.macro';
import { styled } from 'styled-components';
import communitymainimg from '../../assets/communitymainimg.png';
import WritingBtn from '@/commons/atoms/buttons/writing/writingBtn';

export const CommunityWrapper = styled.div`
  ${tw`
    w-screen h-screen flex flex-col
    pb-20 bg-center bg-no-repeat bg-cover px-14
  `}/* background-image: url(${communitymainimg}) */
`;

export const SearchContainer = tw.div`
  w-1/2
  flex
  justify-center
  items-center
  mx-auto
  mt-10
`;

export const ItemWrapper = tw.div`
  flex
  flex-col
  items-end
`;

export const StyledWritingBtn = styled(WritingBtn)`
  ${tw`
    mr-10
  `}
`;

export const ListsWrapper = tw.div`
  flex
  flex-wrap
  justify-evenly
  gap-4
`;

export const NodataImage = styled.img`
  ${tw`
    flex
    justify-center
    items-center
  `}
  width: 350px;
  height: 350px;
  margin: 60px auto 0;
`;
