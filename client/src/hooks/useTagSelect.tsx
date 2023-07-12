/* 2023-07-07 좋아요 버튼 커스텀훅 - 김다함 */
import { selectTag } from '@/modules/TagSlice';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface TagProps {
  initialValue: string;
  isSelected: boolean;
}

export default function useTagSelect({ initialValue, isSelected }: TagProps) {
  const [isSelect, setIsSelect] = useState<boolean>(isSelected);
  const [value, setValue] = useState(initialValue);
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    setValue(value);
    dispatch(selectTag(!isSelect, value))
    setIsSelect(!isSelect);
  }, [isSelect])

  return [isSelect, onClick] as const;
};