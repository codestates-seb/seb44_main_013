import 'styled-components/macro';
import tw from 'twin.macro';
import { styled } from 'styled-components';

export interface CategoryBtnProps {
    category: string,
}


export default function CategoryButton({category}:CategoryBtnProps){
    const Category = styled.button`
        width: 180px;
        ${tw`h-12 p-3 rounded-full border-0`}
        background-color: rgba(245, 245, 245, 0.51);
        box-shadow: 0 10px 24px hsla(0,0%,0%,0.05), 0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);

        &:active {
            color: white;
            box-shadow:inset 3px 3px 5px rgba(0, 0, 0, .1);
        }
    `

    return (
        <Category>{category}</Category>
    );
};