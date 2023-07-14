import { MypageProfileContainer} from "./MypageProfile.styled";
import userImg from "../../assets/userImg.jpg";
import { BsFillPencilFill } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { useState } from "react";

export default function MypageProfile () {
  const [isEdit, setIsEdit] = useState(false)
  const [name, setName] = useState("HOHO")

  const hanldeEditState = () => {
    setIsEdit(!isEdit);
  }

  const handleEditValue = (e: any) => {
    setName(e.target.value);
  }
  console.log(isEdit);
  
  return (
    <MypageProfileContainer>
      <img src={userImg} alt="userImage" />
      <div>
        {isEdit ?
           <input type="text" value={name} onChange={handleEditValue} onBlur={hanldeEditState}></input> :
          <>
            <h1>{name}</h1>
            <BsFillPencilFill size={20} className="editBtn" onClick={hanldeEditState} />
          </>
        }
      </div>
      <div>
        <BiMap size={18} />
        <p>Seoul, South Korea</p>
      </div>
    </MypageProfileContainer>
  );
};

