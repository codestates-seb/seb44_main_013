/* 2023-07-04 홈페이지에 들어가는 모든 Input styled - 김다함*/
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const Input = styled.input`
    ${tw`w-full border-0`}
`;

export const TextArea = styled.textarea`
    ${tw`resize-none rounded-md border-[0.5px] px-2 py-1`}
    &:focus {outline: none;}
    border-color: gray;
    font-size: 13px;
    color:black;
`

export const PortfolioTitleInput = styled(Input)`
    ${tw`bg-transparent text-4xl`}
    color: white;
    &:focus{
        ${tw`outline-0`}
    }
`;

export const DarkTextArea = styled(TextArea)`
    outline: none;
    box-shadow: inset 0px 0px 33px -6px #111111;
    background-color: #3A3B41;
    color: white;
`;