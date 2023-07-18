/* 2023.07.05 드롭다운 아이템(펼쳤을 때 나오는 옵션들) - 김다함 */
import { useDispatch, useSelector } from 'react-redux';

import { setCategory, openCategory, isOpened } from '@/modules/categorySlice';
import { deleteTag } from '@/modules/tagSlice';
import { CATEGORY_TYPE } from '@/types';

import { DropDownItemContainer } from '@/commons/atoms/dropdown/DropDown.styled';
interface DropDownItemProps {
  value: CATEGORY_TYPE;
}

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