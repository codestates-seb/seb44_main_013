/* 2023-07-07 좋아요 버튼 커스텀훅 - 김다함 */
import { LikeBtnProps } from '@/commons/atoms/buttons/LikeBtn';
import { call } from '@/utils/ApiService';
import { useCallback, useState } from 'react';

export default function useLikeBtn({ portfolio_id, initialLikes, initialIsLiked }: LikeBtnProps) {
  const [url, setUrl] = useState<string>(`/likes/${portfolio_id}`);
  const [isLike, setIsLike] = useState<boolean>(initialIsLiked);
  const [likes, setLikes] = useState<number>(initialLikes);
  const [color, setColor] = useState<string>(initialIsLiked ? '#e46868' : 'gray');

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