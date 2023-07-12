import useBookmarkBtn from '@/hooks/useBookmarkBtn';
import { FaBookmark } from 'react-icons/fa';

export interface BookmarkBtnProps {
  portfolio_id: number;
  initialMarkedState: boolean;
}

export default function Bookmark({ portfolio_id, initialMarkedState }: BookmarkBtnProps) {
  const [color, onClick] = useBookmarkBtn({
    portfolio_id: portfolio_id,
    initialMarkedState: initialMarkedState,
  });

  return (
    <FaBookmark color={color} size={25} className='cursor-pointer' onClick={onClick} />
  );
};