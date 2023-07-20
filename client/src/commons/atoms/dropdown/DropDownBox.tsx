/* 2023.07.05 드롭다운 박스(접혔을 때 본체) - 김다함 */
import { DropDownBoxContainer, Item } from '@/commons/atoms/dropdown/DropDown.styled';
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import { ComponentPropsWithoutRef } from 'react';

interface DropDownProps extends ComponentPropsWithoutRef<'div'> {
  dropdownItem?: string;
  isOpen: boolean;
}

export default function DropDownBox({ dropdownItem, isOpen, ...assignment }: DropDownProps) {

  return (
    <DropDownBoxContainer {...assignment}>
      <Item>{dropdownItem}</Item>
      {isOpen ?
        <BiCaretUp /> : <BiCaretDown />
      }
    </DropDownBoxContainer>
  )
}