// 2023-07-05 프로필 기본 보기 & 수정(click to edit) 구현 - 박효정

import { MypageProfileContainer, NameEdit } from './MypageProfile.styled';
import userImg from '../../assets/userImg.jpg';
import { BsFillPencilFill } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';
import { useState, useRef, useEffect } from 'react';

export default function MypageProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(() => {
    const storedName = localStorage.getItem('name');
    return storedName !== null ? storedName : 'HOHO';
  });
  const [editedName, setEditedName] = useState('');

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedName(e.target.value);
  };

  const handleNameBlur = () => {
    if (editedName !== '') {
      setName(editedName);
      localStorage.setItem('name', editedName);
      console.log('Name:', editedName);
    }
    setIsEditing(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus();
  }, []);

  return (
    <MypageProfileContainer>
      <img src={userImg} alt="userImage" />
      <div>
        {isEditing ? (
          <NameEdit
            type="text"
            value={editedName}
            ref={inputRef}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
          />
        ) : (
          <>
            <h1>{name}</h1>
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
