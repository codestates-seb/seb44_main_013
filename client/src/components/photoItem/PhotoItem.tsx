import tw from "twin.macro";
import styled from "styled-components";
import photoImg from "../../assets/userImg.jpg";
<<<<<<< HEAD
import Bookmark from "../bookmark/Bookmark";
=======
import Bookmark from "../../commons/atoms/buttons/Bookmark";
>>>>>>> 366484dbb3bd8e1e3ffb25a060debf2dda90b01d

export const PhotoItemContainer = styled.div`
  ${tw`
    relative
    shadow-md
  `}

  width: 450px;
  height: 300px;
  margin-bottom: 10px;

  &:hover{
    ${tw`bg-neutral-500/60`}
  }

  >img {
    ${tw`
      w-full
      h-full
    `}

    &:hover{
      ${tw`opacity-80`}
    }
  }
`;

<<<<<<< HEAD
export default function PhotoItem () {
=======
export default function PhotoItem() {
>>>>>>> 366484dbb3bd8e1e3ffb25a060debf2dda90b01d
  return (
    <PhotoItemContainer>
      <img src={photoImg} alt="photo image" />
      <Bookmark />
    </PhotoItemContainer>
  );
};

