/* 2023-07-07 좋아요 버튼 커스텀훅 - 김다함 */
import { call } from '@/utils/ApiService';
import { useCallback, useState } from 'react';

interface LikeBtnProps {
  portfolio_id: number;
  initailLikes: number;
  initialIsLike: boolean;
}

export default function useLikeBtn({ portfolio_id, initailLikes, initialIsLike }: LikeBtnProps) {
  const [url, setUrl] = useState<string>(`/likes/${portfolio_id}`);
  const [isLike, setIsLike] = useState<boolean>(initialIsLike);
  const [likes, setLikes] = useState<number>(initailLikes);
  const [color, setColor] = useState<string>(initialIsLike ? '#e46868' : 'gray');

  const onClick = useCallback(() => {
    if (!isLike)
      call(url, 'POST')
        .then((res) => {
          setLikes(res.likes);
          setColor('#e46868');
        });
    else
      call(url, 'DELETE')
        .then((res) => {
          setLikes(res.likes);
          setColor('gray');
        });
    setIsLike(!isLike);
  }, [isLike])

  return [likes, color, onClick] as const;
};