/* 2023.07.05 드롭다운 박스(접혔을 때 본체) - 김다함 */
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import tw from 'twin.macro';

import { isOpened, openCategory } from '@/modules/categorySlice';

import { BiCaretDown, BiCaretUp } from "react-icons/bi";

interface DropDownProps {
  value: string;
}

const DropDownBoxContainer = styled.div`
    ${tw`w-28 px-3 py-1.5 text-sm flex justify-between select-none`}
    border: 1px solid #C3C3C3;
    background-color: #3A3B41;
    color: white;
`;
const Value = styled.p`
${tw`w-24 overflow-hidden whitespace-nowrap text-ellipsis`}
`

export default function DropDownBox({ value }: DropDownProps) { // value => dropdownItem
  const dispatch = useDispatch();
  const isOpen = useSelector(isOpened);

  const CategoryHandler = () => {
    dispatch(openCategory(!isOpen));
  }

  return (
    <DropDownBoxContainer>
      <Value>{value}</Value>
      {isOpen ?
        <BiCaretUp className='cursor-pointer' onClick={CategoryHandler} /> :
        <BiCaretDown className='cursor-pointer' onClick={CategoryHandler} />
      }
    </DropDownBoxContainer>
  )
}