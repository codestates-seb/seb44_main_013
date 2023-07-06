import { FaHeart } from 'react-icons/fa';
import { useState } from 'react';

export default function LikeBtn() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div onClick={toggleLike}>
      <FaHeart color={liked ? '#e46868' : 'gray'} size={25} />
    </div>
  );
}
