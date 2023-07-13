import { FaHeart } from 'react-icons/fa';
<<<<<<< HEAD
import { useState } from 'react';

export default function LikeBtn() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div onClick={toggleLike}>
      <FaHeart color={liked ? '#e46868' : 'gray'} size={25} />
    </div>
=======
import { SmallText } from '../Typography';
import { FlexWrapper } from '@/commons/styles/Containers.styled';
import useLikeBtn from '@/hooks/useLikeBtn';

export interface LikeBtnProps {
  portfolio_id: number;
  initialLikes: number;
  initialIsLiked: boolean;
}

export default function LikeBtn({ portfolio_id, initialLikes, initialIsLiked }: LikeBtnProps) {
  const [likes, color, onClick] = useLikeBtn({
    portfolio_id: portfolio_id,
    initialLikes: initialLikes,
    initialIsLiked: initialIsLiked,
  });
  return (
    <FlexWrapper gap={10}>
      <FaHeart color={color} size={25} className='cursor-pointer' onClick={onClick} />
      <SmallText color='white'>{likes}</SmallText>
    </FlexWrapper>
>>>>>>> 366484dbb3bd8e1e3ffb25a060debf2dda90b01d
  );
}
