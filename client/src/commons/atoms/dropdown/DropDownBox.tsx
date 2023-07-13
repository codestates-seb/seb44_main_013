/* 2023.07.05 드롭다운 박스(접혔을 때 본체) - 김다함 */
<<<<<<< HEAD
import { ReactNode } from 'react';
import { styled } from 'styled-components';
import tw from 'twin.macro';
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import { FlexContainer } from '@/commons/styles/Containers.styled';

interface DropDownProps {
    value: string;
=======
import { ComponentPropsWithoutRef, Dispatch, ReactNode, SetStateAction } from 'react';
import { styled } from 'styled-components';
import tw from 'twin.macro';
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { isOpen, openCategory } from '@/modules/CategorySlice';

interface DropDownProps {
  value: string;
>>>>>>> 366484dbb3bd8e1e3ffb25a060debf2dda90b01d
}

const DropDownBoxContainer = styled.div`
    ${tw`w-28 px-3 py-1.5 text-sm flex justify-between select-none`}
<<<<<<< HEAD

=======
>>>>>>> 366484dbb3bd8e1e3ffb25a060debf2dda90b01d
    border: 1px solid #C3C3C3;
    background-color: #3A3B41;
    color: white;
`;
<<<<<<< HEAD

export default function DropDownBox({ value }: DropDownProps) {
    return (
        <DropDownBoxContainer>
            {value}
            {'isOpen' ? <BiCaretUp /> : <BiCaretDown />}
        </DropDownBoxContainer>
    )
=======
const Value = styled.p`
${tw`w-24 overflow-hidden whitespace-nowrap text-ellipsis`}
`

export default function DropDownBox({ value }: DropDownProps) {
  const dispatch = useDispatch();
  const isOpened = useSelector(isOpen);

  const CategoryHandler = () => {
    dispatch(openCategory(!isOpened));
  }

  return (
    <DropDownBoxContainer>
      <Value>{value}</Value>
      {isOpened ?
        <BiCaretUp className='cursor-pointer' onClick={CategoryHandler} /> :
        <BiCaretDown className='cursor-pointer' onClick={CategoryHandler} />
      }
    </DropDownBoxContainer>
  )
>>>>>>> 366484dbb3bd8e1e3ffb25a060debf2dda90b01d
}