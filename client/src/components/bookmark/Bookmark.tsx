import { useState } from 'react';
import { BookmarkContainer, StyledBookmarkButton } from './Bookmark.styled';

export default function Bookmark() {
  const [clicked, setClicked] = useState(false);

  const BookmarkClick = () => {
    setClicked(!clicked);
  };
  return (
    <BookmarkContainer>
      <StyledBookmarkButton
        aria-label="bookmark"
        clicked={clicked}
        onClick={BookmarkClick}
      />
    </BookmarkContainer>
  );
}
