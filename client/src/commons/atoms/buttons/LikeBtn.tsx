import { FaHeart } from 'react-icons/fa';
import { useState } from 'react';
import { SmallText } from '../Typography';
import { FlexWrapper } from '@/commons/styles/Containers.styled';

interface LikeBtnProps {
  likes?: number;
}

export default function LikeBtn({ likes }: LikeBtnProps) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div onClick={toggleLike}>
      <FlexWrapper gap={10}>
        <FaHeart color={liked ? '#e46868' : 'gray'} size={25} className='cursor-pointer' />
        <SmallText color='white'>{likes}</SmallText>
      </FlexWrapper>
    </div>
  );
}
