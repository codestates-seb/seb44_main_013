/* 2023.07.05 드롭다운 박스(접혔을 때 본체) - 김다함 */
import { useDispatch, useSelector } from 'react-redux';

import { isOpened, openCategory } from '@/modules/categorySlice';

import { DropDownBoxContainer, Item } from '@/commons/atoms/dropdown/DropDown.styled';
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import { CATEGORY_TYPE } from '@/types';

interface DropDownProps {
  dropdownItem: CATEGORY_TYPE;
}

export default function DropDownBox({ dropdownItem }: DropDownProps) {
  const dispatch = useDispatch();
  const isOpen = useSelector(isOpened);

  const CategoryHandler = () => {
    dispatch(openCategory(!isOpen));
  }

  return (
    <DropDownBoxContainer>
      <Item>{dropdownItem}</Item>
      {isOpen ?
        <BiCaretUp className='cursor-pointer' onClick={CategoryHandler} /> :
        <BiCaretDown className='cursor-pointer' onClick={CategoryHandler} />
      }
    </DropDownBoxContainer>
  )
}