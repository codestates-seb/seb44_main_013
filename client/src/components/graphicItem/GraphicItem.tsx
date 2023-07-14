import { GraphicItemContainer} from "./GraphicItem.styled";
import graphicimg from "../../assets/userImg.jpg";
import Bookmark from "../bookmark/Bookmark";


export default function GraphicItem () {
  return (
    <GraphicItemContainer>
      <img src={graphicimg} alt="graphic image" />
      <Bookmark />
    </GraphicItemContainer>
  );
};

