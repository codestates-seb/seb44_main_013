import { styled } from 'styled-components';
import tw from 'twin.macro';

export const DropDownItemContainer = styled.div`
    ${tw`w-28 flex flex-col z-10 absolute`}
    background-color: rgba(72, 72, 72, 0.9);
    border: 1px solid #C3C3C3;
    border-top: 0;
    top: 117px;
`;