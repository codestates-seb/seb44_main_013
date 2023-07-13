import tw from 'twin.macro';
import { styled } from 'styled-components';

export const MainWrapper = tw.div`
    w-screen
    h-full
    flex
    flex-col
    justify-center
    p-4
`;

export const MyItemsWrapper = tw.div`
    h-fit
    flex
    flex-col
    justify-center
    m-auto
`;

export const BoxWrapper = styled.div<{ isRow?: string }>`
  ${tw`
        w-[1050px]
        h-[240px]
        py-3
        pr-5
        flex
        mb-5
        ml-2
    `}
  flex-direction:${(props) => (props.isRow ? 'column' : 'row')};
  overflow: ${(props) => (props.isRow ? 'none' : 'auto')};
  height: ${(props) => (props.isRow ? '380px' : '240px')};
`;

export const BoxTitle = tw.div`
    font-semibold
    text-xl
    text-BASIC_WHITE
    ml-4
    mt-10
`;

//MyProfile
export const MyProfileWrapper = tw.div`
    flex
    flex-row
    justify-center
    mt-3
    mb-10
`;
