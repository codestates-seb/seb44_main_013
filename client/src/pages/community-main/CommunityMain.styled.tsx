import tw from 'twin.macro';
import { styled } from 'styled-components';
import communitymainimg from '../../assets/communitymainimg.png';
import WritingBtn from '@/commons/atoms/buttons/writing/writingBtn';

export const CommunityWrapper = styled.div`
  ${tw`
    w-screen flex flex-col
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
    absolute
  `}
  width: 350px;
  height: 350px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FilterWrapper = tw.div`
  flex
  flex-row
  pt-5
`;

export const FilterText = styled.button`
  ${tw`
    text-sm
    text-gray-400
    ml-3
  `}

  &:hover, &:focus {
    color: #8580e1;
  }
`;
