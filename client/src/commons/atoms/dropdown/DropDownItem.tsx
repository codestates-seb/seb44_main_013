/* 2023.07.05 드롭다운 아이템(펼쳤을 때 나오는 옵션들) - 김다함 */
import { styled } from 'styled-components';
import tw from 'twin.macro';

interface DropDownItemProps {
    value: string;
}

const DropDownItemContainer = styled.div`
    ${tw`px-3 py-2 text-xs bg-transparent select-none`}
    color: white;
    &:hover {
        background-color: #5e5e5e;
    }
    cursor: pointer;
`;

export default function DropDownItem({ value }: DropDownItemProps) {
    return (
        <DropDownItemContainer>
            {value}
        </DropDownItemContainer>
    )
}