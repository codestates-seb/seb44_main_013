/* 2023-07-05 태그 컴포넌트 - 김다함 */
import { styled, css } from 'styled-components';
import tw from 'twin.macro';
import { RxDotFilled } from 'react-icons/rx';
<<<<<<< HEAD

interface TagProps {
    value: string;
    isSelected?: boolean;
}

const tagStye = css`
    ${tw`w-fit py-1.5 px-2.5 rounded-full select-none flex`}
`

const TagBody = styled.div<{ isSelected?: boolean }>`
    ${tagStye}
=======
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
>>>>>>> 366484dbb3bd8e1e3ffb25a060debf2dda90b01d
    background-color: #484848;
    border: 0.9px solid #C3C3C3;
    color: white;
    cursor: pointer;
    &:hover {
        border-color: #dcdcdc;
    }

<<<<<<< HEAD
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
=======
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
>>>>>>> 366484dbb3bd8e1e3ffb25a060debf2dda90b01d
}

export default Tag;