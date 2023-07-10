import { MypageProfileContainer, NameEdit } from './MypageProfile.styled';
import userImg from '../../assets/userImg.jpg';
import { BsFillPencilFill } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';
import { useState, useRef, useEffect } from 'react';
import { UserData } from '@/mocks/data';

interface MypageProfileProps {
  userData: UserData | null;
}

export default function MypageProfile({ userData }: MypageProfileProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(() => {
    const storedName = localStorage.getItem('name');
    return storedName !== null ? storedName : 'HOHO';
  });

  const handleEditToggle = () => {
    setIsEdit(!isEdit);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleNameBlur = () => {
    if (name.trim() !== '') {
      localStorage.setItem('name', name);
    }
    setIsEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <MypageProfileContainer>
      <img src={userImg} alt="userImage" />
      <div>
        {isEdit ? (
          <NameEdit
            type="text"
            value={name}
            ref={inputRef}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
          />
        ) : (
          <>
            <h1 onClick={handleEditToggle}>{name}</h1>
            <BsFillPencilFill
              size={20}
              className="editBtn"
              onClick={handleEditToggle}
            />
          </>
        )}
      </div>
      <div>
        <BiMap size={18} />
        <p>Seoul, South Korea</p>
      </div>
    </MypageProfileContainer>
  );
}
