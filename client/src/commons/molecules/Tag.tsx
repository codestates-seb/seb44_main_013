/* 2023-07-05 태그 컴포넌트 - 김다함 */
import { styled, css } from 'styled-components';
import tw from 'twin.macro';
import { RxDotFilled } from 'react-icons/rx';

interface TagProps {
    value: string;
    isSelected?: boolean;
}

const tagStye = css`
    ${tw`w-fit py-1.5 px-2.5 rounded-full select-none float-left m-1`}
`

const TagBody = styled.div<{ isSelected?: boolean }>`
    ${tagStye}
    background-color: #484848;
    border: 1px solid #C3C3C3;
    color: white;
    cursor: pointer;
    &:hover {
        border-color: #dcdcdc;
    }
    &:active {
        background-color: white;
    }

    ${(props) => props.isSelected &&
        css`
            border-color: #dcdcdc;
            background-color: white;
            color: #232428;
        `
    }

    .dot {
        vertical-align: middle;
        color: #484848;
    }
`;

export const Tag = ({ value, isSelected }: TagProps) => {
    return (
        <TagBody isSelected={isSelected}>
            <p className='text-xs'>{value}</p>
            {isSelected && <RxDotFilled className='dot' />}
        </TagBody>
    )
}

export default Tag;