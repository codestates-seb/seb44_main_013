/* 2023-07-07 좋아요 버튼 커스텀훅 - 김다함 */
import { portfolios } from '@/mocks/data';
import { call } from '@/utils/ApiService';
import { useCallback, useEffect, useState } from 'react';

interface LikeBtnProps {
  portfolio_id: number;
  initailLikes: number;
  initialIsLike: boolean;
}

export default function useLikeBtn({ portfolio_id, initailLikes, initialIsLike }: LikeBtnProps) {
  const [url, setUrl] = useState(`/likes/${portfolio_id}`);
  const [isLike, setIsLike] = useState(initialIsLike);
  const [likes, setLikes] = useState(initailLikes);
  const [color, setColor] = useState('');

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
  }, [])

  return [likes, color, onClick] as const;
};