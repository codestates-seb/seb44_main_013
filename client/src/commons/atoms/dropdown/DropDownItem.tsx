/* 2023.07.05 드롭다운 아이템(펼쳤을 때 나오는 옵션들) - 김다함 */
import { DropDownItemContainer } from '@/commons/atoms/dropdown/DropDown.styled';
import { ComponentPropsWithoutRef } from 'react';
interface DropDownItemProps extends ComponentPropsWithoutRef<'div'> {
  item: string;
}

export default function DropDownItem({ item, ...assignment }: DropDownItemProps) {
  return <DropDownItemContainer {...assignment}>{item}</DropDownItemContainer>;
}
