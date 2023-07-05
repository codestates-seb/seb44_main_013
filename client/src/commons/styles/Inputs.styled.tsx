/* 2023-07-04 홈페이지에 들어가는 모든 Input styled - 김다함*/
import { styled, css } from 'styled-components';
import tw from 'twin.macro';

const Input = styled.input`
    ${tw`w-full border-0`}
`;

export const PortfolioTitleInput = styled(Input)`
    ${tw`bg-transparent text-4xl`}
    color: white;
    &:focus{
        ${tw`outline-0`}
    }
`;