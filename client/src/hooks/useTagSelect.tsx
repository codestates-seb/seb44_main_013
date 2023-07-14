/* 2023-07-07 좋아요 버튼 커스텀훅 - 김다함 */
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { selectTag } from '@/modules/tagSlice';
import { Tag } from '@/types';

interface TagProps {
  currentTag: Tag;
  isSelected: boolean;
}

export default function useTagSelect({ currentTag, isSelected: selected }: TagProps) {
  const [isSelected, setIsSelect] = useState<boolean>(selected);
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(selectTag(!isSelected, currentTag))
    setIsSelect(!isSelected);
  }, [isSelected])

  return [isSelected, onClick] as const;
};