import useToggle from '@/hooks/useToggle';

import { FaBookmark } from 'react-icons/fa';

export interface BookmarkButton {
  portfolioId: number;
  isToggled: boolean;
}

export default function Bookmark({ portfolioId, isToggled }: BookmarkButton) {
  const [buttonColor, onClick] = useToggle({
    portfolioId: portfolioId,
    buttonType: 'bookmarks',
    color: '#ffeb54',
    isToggled: isToggled,
  });

  return (
    <FaBookmark color={buttonColor} size={25} className='cursor-pointer' onClick={onClick} />
  );
}