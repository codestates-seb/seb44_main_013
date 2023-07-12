/* 2023-07-05 태그 컴포넌트 - 김다함 */
import { styled, css } from 'styled-components';
import tw from 'twin.macro';
import { RxDotFilled } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { isSelect, selectTag } from '@/modules/TagSlice';
import useTagSelect from '@/hooks/useTagSelect';

interface TagProps {
  value: string;
}

const tagStyle = css`
    ${tw`w-fit py-1.5 px-2.5 rounded-full select-none flex`}
`
const TagBody = styled.div<{ selected?: boolean }>`
    ${tagStyle}
    background-color: #484848;
    border: 0.9px solid #C3C3C3;
    color: white;
    cursor: pointer;
    &:hover {
        border-color: #dcdcdc;
    }

    ${(props) => props.selected &&
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

export const Tag = ({ value }: TagProps) => {
  const [isSelected, onClick] = useTagSelect({
    isSelected: false,
    initialValue: value,
  });

  return (
    <TagBody selected={isSelected} onClick={onClick}>
      <p className='text-xs'>{value}</p>
      {isSelected && <RxDotFilled className='dot' />}
    </TagBody>
  )
}

export default Tag;