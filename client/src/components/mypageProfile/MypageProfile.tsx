// 2023-07-05 프로필 기본 보기 & 수정(click to edit) 구현 - 박효정 

import { MypageProfileContainer, NameEdit} from "./MypageProfile.styled";
import userImg from "../../assets/userImg.jpg";
import { BsFillPencilFill } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { useState, useRef, useEffect } from "react";

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

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus();
  });
  
  return (
    <MypageProfileContainer>
      <img src={userImg} alt="userImage" />
      <div>
        {isEdit ?
           <NameEdit type="text" value={name} ref={inputRef} onChange={handleEditValue} onBlur={hanldeEditState}></NameEdit> :
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
}

