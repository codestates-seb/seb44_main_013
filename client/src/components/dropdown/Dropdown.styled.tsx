import tw, { styled } from 'twin.macro';

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