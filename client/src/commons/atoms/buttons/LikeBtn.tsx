import { FaHeart } from 'react-icons/fa';
import { SmallText } from '../Typography';
import { FlexWrapper } from '@/commons/styles/Containers.styled';
import useLikeBtn from '@/hooks/useLikeBtn';

interface LikeBtnProps {
  portfolio_id: number;
  lastestLikes: number;
  nowIsLike: boolean;
}

export default function LikeBtn({ portfolio_id, lastestLikes, nowIsLike }: LikeBtnProps) {
  const initialColor = nowIsLike ? '#e46868' : 'gray';
  const [likes, color, onClick] = useLikeBtn({
    portfolio_id: portfolio_id,
    initailLikes: lastestLikes,
    initialIsLike: nowIsLike,
  });

  return (
    <FlexWrapper gap={10}>
      <FaHeart color={color ? color : initialColor} size={25} className='cursor-pointer' onClick={onClick} />
      <SmallText color='white'>{likes ? likes : lastestLikes}</SmallText>
    </FlexWrapper>
  );
}
