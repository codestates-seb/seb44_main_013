/* 2023-07-07 좋아요 버튼 커스텀훅 - 김다함 */
import { portfolios } from '@/mocks/data';
import { call } from '@/utils/ApiService';
import { MouseEventHandler, useCallback, useEffect, useState } from 'react';

interface LikeBtnProps {
  portfolio_id: number;
  initailLikes: number;
  initialIsLike: boolean;
}

export default function useLikeBtn({ portfolio_id, initailLikes, initialIsLike }: LikeBtnProps) {
  const [isLike, setIsLike] = useState(initialIsLike);
  const [likes, setLikes] = useState(initailLikes);

  const onClick = useCallback(() => {
    if (!isLike)
      call(`/likes/${portfolio_id}`, 'POST')
        .then((res) => {
          setLikes(res.likes);
        });
    else
      call(`/likes/${portfolio_id}`, 'DELETE')
        .then((res) => {
          setLikes(res.likes);
        });
    setIsLike(!isLike);
  }, [])

  return [isLike, likes, onClick] as const;
};