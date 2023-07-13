/* 2023-07-02 메인(카테고리)페이지 카테고리 navBar의 낱개 버튼 - 김다함*/
import 'styled-components/macro';
import tw from 'twin.macro';
import { styled } from 'styled-components';

export interface CategoryBtnProps {
    category: string,
}

const Category = styled.button`
    width: 180px;
    ${tw`h-12 p-3 rounded-full border-0 whitespace-nowrap`}
    background-color: rgba(245, 245, 245, 0.51);
    box-shadow: 0 10px 24px hsla(0,0%,0%,0.05), 0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);

    &:active {
        color: white;
        box-shadow:inset 3px 3px 5px rgba(0, 0, 0, .1);
    }
    
    &:focus {
        color: white;
        box-shadow:inset 3px 3px 5px rgba(0, 0, 0, .1);
    }
`

export default function CategoryButton({ category }: CategoryBtnProps) {

    return (
        <Category>{category}</Category>
    );
}