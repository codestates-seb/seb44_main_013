import { FaBookmark } from "react-icons/fa";
import tw from "tailwind-styled-components";

export const BookmarkContainer = tw.div`
  inline-block
  bg-transparent
  absolute
  top-0
  bottom-0
  `;

export const BookmarkButton = tw(FaBookmark)`
  drop-shadow-md
  text-neutral-100
`;

export default function Bookmark() {
  return (
    <BookmarkContainer>
      <BookmarkButton />
    </BookmarkContainer>
  );
};