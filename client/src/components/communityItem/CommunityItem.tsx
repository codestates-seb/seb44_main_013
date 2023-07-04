import { CommunityItemContainer } from "./CommunityItem.styled";
import Views from "../views/Views";

export default function CommunityItem () {
  return (
    <CommunityItemContainer>
      <h2>Title</h2>
      <p>contents</p>
      <Views />
    </CommunityItemContainer>
  );
};

