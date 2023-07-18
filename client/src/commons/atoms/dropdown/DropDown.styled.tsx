import { styled } from 'styled-components';
import tw from 'twin.macro';

export const DropDownBoxContainer = styled.div`
    ${tw`w-28 px-3 py-1.5 text-sm flex justify-between select-none`}
    border: 1px solid #C3C3C3;
    background-color: #3A3B41;
    color: white;
`;

export const Item = styled.p`
${tw`w-24 overflow-hidden whitespace-nowrap text-ellipsis`}
`

export const DropDownItemContainer = styled.div`
    ${tw`px-3 py-2 text-xs bg-transparent select-none`}
    color: white;
    &:hover {
        background-color: #5e5e5e;
    }
    cursor: pointer;
`;