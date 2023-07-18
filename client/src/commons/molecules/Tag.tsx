/* 2023-07-05 태그 컴포넌트 - 김다함 */
import { styled, css } from 'styled-components';
import tw from 'twin.macro';

import useTagSelect from '@/hooks/useTagSelect';
import { Tag as tag } from '@/types/portfolio';

import { RxDotFilled } from 'react-icons/rx';

const tagStyle = css`
    ${tw`w-fit py-1.5 px-2.5 rounded-full select-none flex`}
`
const TagBody = styled.div<{ selected?: boolean, readOnly?: boolean }>`
    ${tagStyle}
    background-color: #484848;
    border: 0.9px solid #C3C3C3;
    color: white;
    cursor: pointer;
    &:hover {
        border-color: #dcdcdc;
    }

    ${(props) => props.selected && !props.readOnly &&
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

interface TagProps {
  tag: tag;
  readOnly?: boolean;
  selected?: boolean;
}

export const Tag = ({ tag, readOnly, selected = false }: TagProps) => {
  const [isSelected, onClick] = useTagSelect({
    isSelected: selected,
    currentTag: tag,
  });

  return (
    <TagBody selected={isSelected} onClick={onClick} readOnly={readOnly}>
      <p className='text-xs'>{tag.name}</p>
      {isSelected && !readOnly && <RxDotFilled className='dot' />}
    </TagBody>
  )
}

export default Tag;