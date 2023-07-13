import { AppItemContainer } from "./AppItem.stlyed";
import item from "../../assets/userImg.jpg";
import { AiOutlineWifi } from "react-icons/ai";
import { BsBatteryFull } from "react-icons/bs";
<<<<<<< HEAD
import Bookmark from "../bookmark/Bookmark";

export default function AppItem () {
=======
import Bookmark from "../../commons/atoms/buttons/Bookmark";

export default function AppItem() {
>>>>>>> 366484dbb3bd8e1e3ffb25a060debf2dda90b01d
  return (
    <AppItemContainer>
      <span>10:30</span>
      <div className="iconsWrap">
        <AiOutlineWifi size={20} />
        <BsBatteryFull size={20} />
      </div>
      <img src={item} alt="appImg" />
      <Bookmark />
    </AppItemContainer>
  );
};
