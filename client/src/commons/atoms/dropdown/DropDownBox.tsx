/* 2023.07.05 드롭다운 박스(접혔을 때 본체) - 김다함 */
import { ComponentPropsWithoutRef, Dispatch, ReactNode, SetStateAction } from 'react';
import { styled } from 'styled-components';
import tw from 'twin.macro';
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import { FlexContainer } from '@/commons/styles/Containers.styled';

interface DropDownProps extends ComponentPropsWithoutRef<'select'> {
  value: string;
  isOpen: boolean;
  openHandler: Dispatch<SetStateAction<boolean>>;
}

const DropDownBoxContainer = styled.div`
    ${tw`w-28 px-3 py-1.5 text-sm flex justify-between select-none`}

    border: 1px solid #C3C3C3;
    background-color: #3A3B41;
    color: white;
`;

export default function DropDownBox({ value, isOpen, openHandler }: DropDownProps) {
  const ClickHandler = () => {
    openHandler(!isOpen);
  }
  return (
    <DropDownBoxContainer>
      {value}
      {isOpen ?
        <BiCaretUp className='cursor-pointer' onClick={ClickHandler} /> :
        <BiCaretDown className='cursor-pointer' onClick={ClickHandler} />
      }
    </DropDownBoxContainer>
  )
}