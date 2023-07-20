import { styled } from 'styled-components';
import tw from 'twin.macro';

export const DropDownBoxContainer = styled.div`
  ${tw`w-28 px-3 py-1.5 text-sm flex justify-between select-none cursor-pointer`}
  border: 1px solid #C3C3C3;
  background-color: #3A3B41;
  color: white;
`;


export const DropDownItemContainer = styled.div`
  ${tw`px-3 py-2 text-xs bg-transparent select-none cursor-pointer`}
  color: white;
  &:hover {
    background-color: #5e5e5e;
  }
`;

export const Item = tw.p`
  w-24 overflow-hidden whitespace-nowrap text-ellipsis
`