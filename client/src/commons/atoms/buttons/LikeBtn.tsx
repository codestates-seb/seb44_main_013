import { FaHeart } from 'react-icons/fa';
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
  );
}
