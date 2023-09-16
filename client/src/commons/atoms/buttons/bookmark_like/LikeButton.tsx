/* 2023-07-07 좋아요 버튼 - 김다함 */
import useToggle, { Toggle } from '@/hooks/useToggle';

import { FaHeart } from 'react-icons/fa';
import { SmallText } from '@/commons/atoms/text/Typography';
import { FlexWrapper } from '@/commons/styles/Containers.styled';

export interface LikeButton extends Toggle {
  currentLikes: number;
}

export default function LikeButton({ portfolioId, currentLikes, isToggled }: LikeButton) {
  const [buttonColor, onClick, likes] = useToggle({
    portfolioId: portfolioId,
    isToggled: isToggled,
    buttonType: 'likes',
    count: currentLikes,
    color: '#e46868',
  })

  return (
    <FlexWrapper gap={10}>
      <FaHeart color={buttonColor} size={25} className='cursor-pointer' onClick={onClick} />
      <SmallText color='white'>{likes}</SmallText>
    </FlexWrapper>
  );
}
