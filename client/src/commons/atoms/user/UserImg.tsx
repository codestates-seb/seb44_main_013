import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import useUserImageHandler from '@/hooks/useUserImageHandler';

import HeaderDropwdown from '@/components/headerDropdown/HeaderDropdown';
import { ImgContainer, UserImage } from './UserImg.styled';


export default function UserImg() {
  const [ isDropdown, setIsDropdown ] = useState(false);
  const memberInfo = useSelector((state: RootState) => state.memberSlice);
  const [userProfileImage, _] = useState<string | undefined>(useUserImageHandler(memberInfo.memberId));
  

  const handleMenu = () => {
    setIsDropdown(!isDropdown)
  };

  return (
    <>
      <ImgContainer onClick={handleMenu}>
        <UserImage src={userProfileImage} alt="userimage"></UserImage>
        {
          isDropdown ? 
            (
              <HeaderDropwdown/>
            )
          : null
        }
      </ImgContainer>
    </>
    
  );
}
