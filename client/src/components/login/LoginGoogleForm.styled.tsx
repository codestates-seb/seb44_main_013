import tw from "twin.macro";
import { styled } from "styled-components";

export const GoogleWrapper = styled.span`
    ${tw`
        border
        border-zinc-300
        pr-4
        pl-14
        py-3
        flex
        flex-row
        justify-center
        items-center
        w-96
        text-BASIC_WHITE
        font-light
        text-lg
        rounded-lg
        cursor-pointer
    `}

    &:hover {
        background-color:rgb(217, 217, 217, 0.17)
    }
`;

export const TextSection = tw.div`
    ml-10
    mr-20
`;

