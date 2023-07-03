import 'styled-components/macro';
import tw from 'twin.macro';
import { styled } from 'styled-components';

export interface CategoryBtnProps {
    category: string,
}

const Category = styled.button`
    width: fit-content;
    height: fit-content;
`

export default function CategoryButton({category}:CategoryBtnProps){
    return (
        <Category>{category}</Category>
    );
};