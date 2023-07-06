import tw from 'twin.macro';
import { styled } from 'styled-components';
import { MypageItemProps, childrenProps } from '@/types';
import tempItem from '@/assets/tempItem.png';

export const SMportItemWrapper = tw.div`
    cursor-pointer
    drop-shadow-lg
    mr-5
    whitespace-nowrap
`;

export const Imgtype = tw.img`
    rounded-lg
    object-cover
    overflow-hidden
    w-48
    h-52
`;

export const ImgEx = styled.div`
    ${ tw`
        rounded-lg
        px-3
        py-3
        text-ITEM_TITLE
        relative
        -translate-y-[73px]
        w-48
        flex
        flex-col
        transition duration-300 ease-in-out
    ` }
    background-color: rgb(26, 26, 26, 50%);

    &:hover{
        color:white;

    }

`;

export const ExTitle = tw.div`
    font-semibold
    text-lg
`;

export const ExName = tw.div`
    font-semibold
    text-sm
`;

export function ImgSection ({src}:MypageItemProps) {
    const imgSource = src === '' ? tempItem : src
    return(
        <Imgtype src={imgSource} /> 
    )
}

export function ImgInfoSection ({title, name}:childrenProps ) {
    return(
        <ImgEx>
            <ExTitle>{title}</ExTitle>
            <ExName>@ {name}</ExName>
        </ImgEx>
    )
}

