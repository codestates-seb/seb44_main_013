import tw from "tailwind-styled-components";
import WebItem1 from "../assets/WebItem1.png";
import Bookmark from "./Bookmark";

export const WebItemContainer = tw.div`
  w-80
  relative
  shadow-md
`;

export default function WebItem() {
  return (
    <WebItemContainer>
      <img src={WebItem1} alt="웹 아이템1 이미지" />
      <Bookmark />
    </WebItemContainer>
  );
};