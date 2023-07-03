import tw from "tailwind-styled-components";
import WebItem1 from "../assets/WebItem1.png";
import Bookmark from "./Bookmark";

export const WebItemContainer = tw.div`
  w-80
  relative
  shadow-md

  hover:bg-neutral-500/60
`;

export const WebItemImg = tw.img`
  hover:opacity-80
`;

export default function WebItem() {
  return (
    <WebItemContainer>
      <WebItemImg src={WebItem1} alt="웹 아이템1 이미지" />
      <Bookmark />
    </WebItemContainer>
  );
};