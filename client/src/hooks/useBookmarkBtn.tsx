/* 2023-07-07 좋아요 버튼 커스텀훅 - 김다함 */
import { BookmarkBtnProps } from '@/commons/atoms/buttons/Bookmark';
import { call } from '@/utils/ApiService';
import { useCallback, useState } from 'react';

export default function useLikeBtn({ portfolio_id, initialMarkedState }: BookmarkBtnProps) {
  const [url, setUrl] = useState<string>(`/bookmarks/${portfolio_id}`);
  const [isMarked, setIsMarked] = useState<boolean>(initialMarkedState);
  const [color, setColor] = useState<string>(initialMarkedState ? '#ffeb54' : 'gray');

  const onClick = useCallback(() => {
    if (!isMarked)
      call(url, 'POST')
        .then(() => {
          setColor('#ffeb54');
        });
    else
      call(url, 'DELETE')
        .then(() => {
          setColor('gray');
        });
    setIsMarked(!isMarked);
  }, [isMarked])

  return [color, onClick] as const;
};