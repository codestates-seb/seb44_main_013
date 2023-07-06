import { FaBookmark } from 'react-icons/fa';
import tw from 'tailwind-styled-components';

export const BookmarkContainer = tw.div`
  inline-block
  bg-transparent
  absolute
  right-5
  z-1
`;

const BookmarkButton = tw(FaBookmark)`
  drop-shadow-md
  text-neutral-100
`;

type StyledBookmarkButtonProps = {
  clicked: boolean;
};

export const StyledBookmarkButton = tw(
  BookmarkButton
)<StyledBookmarkButtonProps>`
  ${(props) => (props.clicked ? 'text-[#ffeb54]' : '')}
`;
