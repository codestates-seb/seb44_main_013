/* 2023.07.05 드롭다운 아이템(펼쳤을 때 나오는 옵션들) - 김다함 */
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import tw from 'twin.macro';

import { setCategory, openCategory, isOpened } from '@/modules/categorySlice';
import { deleteTag } from '@/modules/tagSlice';
import { CATEGORY_TYPE } from '@/types';

interface DropDownItemProps {
  value: CATEGORY_TYPE;
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
  const dispatch = useDispatch();
  const isOpen = useSelector(isOpened);

  const selectCategory = () => {
    dispatch(openCategory(!isOpen));
    dispatch(setCategory(value));
    dispatch(deleteTag());
  }

  return (
    <DropDownItemContainer onClick={selectCategory}>
      {value}
    </DropDownItemContainer>
  )
}