import { FaBookmark } from 'react-icons/fa';
import tw from 'tailwind-styled-components';

export const BookmarkContainer = tw.div`
  inline-block
  bg-transparent
  absolute
  right-5
  bottom-5
  z-1
  `;

export const BookmarkButton = tw(FaBookmark)`
  drop-shadow-md
  text-neutral-100
`;

export const StyledBookmarkButton = tw(BookmarkButton)`
  ${(props) => (props.clicked ? 'text-[#ffeb54]' : '')}
`;
