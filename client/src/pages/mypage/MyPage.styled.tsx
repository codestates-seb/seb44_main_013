import tw from 'twin.macro'

export const MainWrapper = tw.div`
  bg-BASIC_BLACK
    w-screen
    h-screen
    flex
    flex-col
    justify-center
`;

export const MyItemsWrapper = tw.div`
    h-fit
`;

export const BoxWrapper = tw.div`
    w-8/12
    h-[240px]
    py-3
    pr-5
     bg-pink-300
    flex
    flex-row
    overflow-x-scroll
    mb-5
    ml-2
`;

export const BoxTitle = tw.div`
    font-semibold
    text-xl
    text-BASIC_WHITE
    ml-4
`;