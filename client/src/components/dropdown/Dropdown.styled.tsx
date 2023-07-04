import tw from 'twin.macro';
import { styled } from 'styled-components';

export const ModalLink = styled.li`
    ${ tw`
        py-1
        text-[8px]
        font-semibold
        flex
        flex-row
        items-center
        justify-center
        cursor-pointer
    `}

    &:hover{
        ${tw`
            bg-HOVER_COLOR
            text-BASIC_WHITE
        `}
    }
`;